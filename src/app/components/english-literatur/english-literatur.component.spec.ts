import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENGLISHLITERATURComponent } from './english-literatur.component';

describe('ENGLISHLITERATURComponent', () => {
  let component: ENGLISHLITERATURComponent;
  let fixture: ComponentFixture<ENGLISHLITERATURComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENGLISHLITERATURComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENGLISHLITERATURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
