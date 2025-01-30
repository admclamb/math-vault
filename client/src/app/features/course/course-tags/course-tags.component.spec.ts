import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTagsComponent } from './course-tags.component';

describe('CourseTagsComponent', () => {
  let component: CourseTagsComponent;
  let fixture: ComponentFixture<CourseTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
