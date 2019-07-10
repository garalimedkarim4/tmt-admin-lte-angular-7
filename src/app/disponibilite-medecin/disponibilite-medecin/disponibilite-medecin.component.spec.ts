import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibiliteMedecinComponent } from './disponibilite-medecin.component';

describe('DisponibiliteMedecinComponent', () => {
  let component: DisponibiliteMedecinComponent;
  let fixture: ComponentFixture<DisponibiliteMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibiliteMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibiliteMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
