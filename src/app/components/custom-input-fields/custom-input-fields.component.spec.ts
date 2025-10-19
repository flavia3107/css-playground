import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputFieldsComponent } from './custom-input-fields.component';

describe('CustomInputFieldsComponent', () => {
  let component: CustomInputFieldsComponent;
  let fixture: ComponentFixture<CustomInputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInputFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
