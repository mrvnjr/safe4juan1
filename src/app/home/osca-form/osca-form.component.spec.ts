import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscaFormComponent } from './osca-form.component';

describe('OscaFormComponent', () => {
  let component: OscaFormComponent;
  let fixture: ComponentFixture<OscaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OscaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OscaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
