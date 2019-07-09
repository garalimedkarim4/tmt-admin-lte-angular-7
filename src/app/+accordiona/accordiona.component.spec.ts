import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionaComponent } from './accordiona.component';

import { AccordionModule, BoxModule } from 'angular-admin-lte';

describe('AccordionComponent', () => {
  let component: AccordionaComponent;
  let fixture: ComponentFixture<AccordionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AccordionModule,
        BoxModule
      ],
      declarations: [ AccordionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
