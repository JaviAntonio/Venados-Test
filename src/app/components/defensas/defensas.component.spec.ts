import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensasComponent } from './defensas.component';

describe('DefensasComponent', () => {
  let component: DefensasComponent;
  let fixture: ComponentFixture<DefensasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
