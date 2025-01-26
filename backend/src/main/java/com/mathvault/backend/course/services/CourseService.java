package com.mathvault.backend.course.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathvault.backend.course.infrastructure.entities.CourseEntity;
import com.mathvault.backend.course.repositories.CourseRepository;

@Service
public class CourseService implements ICourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<CourseEntity> getAllCourses() {
        return courseRepository.findAll();
    }

    public CourseEntity getCourseByName(String courseName) {
        Optional<CourseEntity> course = courseRepository.findByName(courseName);

        if (!course.isPresent()) {
            throw new CourseNotFoundException("Course not found with name: " + courseName);
        }

        return course.get();
    }

    public static class CourseNotFoundException extends RuntimeException {
        public CourseNotFoundException(String message) {
            super(message);
        }
    }
}
