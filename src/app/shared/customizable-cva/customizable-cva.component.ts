import { Directive, forwardRef, Injectable, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

export function createCvaProviders(component: any) {
  return [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => component), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => component), multi: true }
  ]
}

@Directive()
@Injectable()
export abstract class CustomizableCvaComponent implements ControlValueAccessor, Validator {
  @Input()
  set formValues(val: any) {
    if (val) { //don't reset form on close
      const form = this.form;
      this.beforeFormSet(val);
      form.setValue(val);
      this.afterFormSet(val);
    }
  }
  get formValues(): any {
    return this.form.value;
  }

  public get form(): FormGroup {
    if (!this._form) {
      this._form = this.createForm();
    }
    return this._form as FormGroup;
  }

  private _form: FormGroup | undefined;

  constructor() { }

  // Functions that will allow us to implement custom form controls on each level of the form
  protected abstract createForm(): any;
  //The following are not abstract because we do not want to force use of them
  protected beforeFormSet(val: any): any { }
  protected afterFormSet(val: any): any { }

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
