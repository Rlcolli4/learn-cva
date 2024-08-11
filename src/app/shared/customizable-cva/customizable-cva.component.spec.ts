import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizableCvaComponent } from './customizable-cva.component';

describe('CustomizableCvaComponent', () => {
  let component: CustomizableCvaComponent;
  let fixture: ComponentFixture<CustomizableCvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizableCvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizableCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
