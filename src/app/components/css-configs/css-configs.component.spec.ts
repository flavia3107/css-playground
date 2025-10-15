import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssConfigsComponent } from './css-configs.component';

describe('CssConfigsComponent', () => {
  let component: CssConfigsComponent;
  let fixture: ComponentFixture<CssConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssConfigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
