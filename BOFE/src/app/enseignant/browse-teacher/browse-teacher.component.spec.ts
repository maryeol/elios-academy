import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTeacherComponent } from './browse-teacher.component';

describe('BrowseTeacherComponent', () => {
  let component: BrowseTeacherComponent;
  let fixture: ComponentFixture<BrowseTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
