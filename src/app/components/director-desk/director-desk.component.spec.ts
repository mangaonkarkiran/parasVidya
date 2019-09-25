import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDeskComponent } from './director-desk.component';

describe('DirectorDeskComponent', () => {
  let component: DirectorDeskComponent;
  let fixture: ComponentFixture<DirectorDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
