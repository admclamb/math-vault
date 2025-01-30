package com.mathvault.backend.course.interfaces;

import com.mathvault.backend.course.dto.GetAllCoursesResponseDto;
import com.mathvault.backend.course.dto.TagDto;
import com.mathvault.backend.course.dto.response.GetCourseByNameResponseDto;
import com.mathvault.backend.course.services.CourseService;
import com.mathvault.backend.db.CourseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("name/{courseName}")
    public GetCourseByNameResponseDto getCourseByName(@PathVariable("courseName") String courseName) {
        CourseEntity course = courseService.getCourseByName(courseName);
        return mapCourseByNameToDto(course);
    }

    private GetAllCoursesResponseDto mapToDto(CourseEntity course) {
        List<TagDto> tags = course.getTags().stream()
                .map(tag -> new TagDto(tag.getId(), tag.getName()))
                .collect(Collectors.toList());
        return new GetAllCoursesResponseDto(course.getId(), course.getName(), course.getCreatedAt(), tags);
    }

    private GetCourseByNameResponseDto mapCourseByNameToDto(CourseEntity course) {
        List<TagDto> tags = course.getTags().stream()
                .map(tag -> new TagDto(tag.getId(), tag.getName()))
                .collect(Collectors.toList());
        return new GetCourseByNameResponseDto(course.getId(), course.getName(), course.getDescription(), tags);
    }
}
