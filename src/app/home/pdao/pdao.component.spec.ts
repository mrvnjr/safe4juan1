import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdaoComponent } from './pdao.component';

describe('PdaoComponent', () => {
  let component: PdaoComponent;
  let fixture: ComponentFixture<PdaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
