package com.mathvault.backend.course.services;

import java.util.List;

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
}
