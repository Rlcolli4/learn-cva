
import { Directive, forwardRef, Injectable, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

export function createCvaProviders(component: any) {
  return [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => component), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => component), multi: true }
  ]
}

@Directive()
@Injectable()
export abstract class BasicCvaComponent implements ControlValueAccessor, Validator {
  @Input()
  set formValues(val: any) {
    if (val) {
      this.form = this.createForm(val);
    }
  }
  get formValues(): any {
    return this.form.value;
  }

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
  }

  //handles dynamic form creation for a bare bones cva
  createForm(val: any): FormGroup {
    const newForm = new FormGroup({});
    let keys: string[] = Object.keys(val);
    keys.forEach((key) => {
      newForm.addControl(key, new FormControl(val[key]));
    });
    return newForm;
  }

  //required for ControlValueAccessor, allows for nesting and inheritance of forms through components
  public onTouched: () => void = () => { };

  public writeValue(val: any): void {
    val && this.form.setValue(val, { emitEvent: false });
  }

  public registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  public validate(c: AbstractControl): ValidationErrors | null {
    switch (this.form.status) {
      case 'VALID':
      case 'DISABLED':
        return null;
      default:
        const errorObjects: any[] = [];
        const keys = Object.keys(this.form.controls);
        for (let i = 0; i < keys.length; i++) {
          if (this.form.controls[keys[i]].errors !== null) {
            const newObject: any = {};
            newObject[keys[i]] = this.form.controls[keys[i]].errors;
            errorObjects.push(newObject);
          }
        }

        return { invalidForm: { valid: false, errors: errorObjects } };
    }
  }
}
