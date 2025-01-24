import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoursesTableComponent } from './home-courses-table.component';

describe('HomeCoursesTableComponent', () => {
  let component: HomeCoursesTableComponent;
  let fixture: ComponentFixture<HomeCoursesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCoursesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCoursesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
