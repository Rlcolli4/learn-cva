import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCvaComponent } from './basic-cva.component';

describe('BasicCvaComponent', () => {
  let component: BasicCvaComponent;
  let fixture: ComponentFixture<BasicCvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
