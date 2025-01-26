package com.mathvault.backend.course.dto.response;

import java.util.List;
import java.util.UUID;

import com.mathvault.backend.course.dto.TopicDto;

import lombok.Data;

@Data
public class GetCourseByNameResponseDto {
    private UUID id;
    private String name;
    private String description;
    private List<TopicDto> topics;

    public GetCourseByNameResponseDto(UUID id, String name, String description, List<TopicDto> topics) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.topics = topics;
    }
}
