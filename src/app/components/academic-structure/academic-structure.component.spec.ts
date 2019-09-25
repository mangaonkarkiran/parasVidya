import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicStructureComponent } from './academic-structure.component';

describe('AcademicStructureComponent', () => {
  let component: AcademicStructureComponent;
  let fixture: ComponentFixture<AcademicStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
