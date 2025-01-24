package com.mathvault.backend.course.interfaces;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController("/api/v1/course")
public class CourseController {

    @GetMapping()
    public String getMethodName(@RequestParam String param) {
        return new String("HELLO");
    }

}
