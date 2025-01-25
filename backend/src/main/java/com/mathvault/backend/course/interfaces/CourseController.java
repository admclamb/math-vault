package com.mathvault.backend.course.interfaces;

import com.mathvault.backend.course.dto.GetAllCoursesResponseDto;
import com.mathvault.backend.course.dto.TopicDto;
import com.mathvault.backend.course.services.CourseService;
import com.mathvault.backend.course.infrastructure.entities.CourseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<GetAllCoursesResponseDto> getAllCourses() {
        List<CourseEntity> courses = courseService.getAllCourses();
        return courses.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    private GetAllCoursesResponseDto mapToDto(CourseEntity course) {
        List<TopicDto> topics = course.getTopics().stream()
                .map(topic -> new TopicDto(topic.getId(), topic.getName()))
                .collect(Collectors.toList());
        return new GetAllCoursesResponseDto(course.getId(), course.getName(), course.getCreatedAt(), topics);
    }
}
