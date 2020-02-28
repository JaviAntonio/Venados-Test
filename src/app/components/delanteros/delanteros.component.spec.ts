import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelanterosComponent } from './delanteros.component';

describe('DelanterosComponent', () => {
  let component: DelanterosComponent;
  let fixture: ComponentFixture<DelanterosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelanterosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelanterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
