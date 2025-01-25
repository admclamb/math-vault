package com.mathvault.backend.course.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class GetAllCoursesResponseDto {
    private UUID id;
    private String name;
    private LocalDateTime createdAt;
    private List<TopicDto> topics;

    public GetAllCoursesResponseDto() {
    }

    public GetAllCoursesResponseDto(UUID id, String name, LocalDateTime createdAt, List<TopicDto> topics) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.topics = topics;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<TopicDto> getTopics() {
        return topics;
    }

    public void setTopics(List<TopicDto> topics) {
        this.topics = topics;
    }
}
