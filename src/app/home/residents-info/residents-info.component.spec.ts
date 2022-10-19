import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsInfoComponent } from './residents-info.component';

describe('ResidentsInfoComponent', () => {
  let component: ResidentsInfoComponent;
  let fixture: ComponentFixture<ResidentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
