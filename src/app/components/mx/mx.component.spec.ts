import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxComponent } from './mx.component';

describe('MxComponent', () => {
  let component: MxComponent;
  let fixture: ComponentFixture<MxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
