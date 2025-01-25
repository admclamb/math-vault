package com.mathvault.backend.course.services;

import java.util.List;

import com.mathvault.backend.course.infrastructure.entities.CourseEntity;

public interface ICourseService {
    List<CourseEntity> getAllCourses();
}
