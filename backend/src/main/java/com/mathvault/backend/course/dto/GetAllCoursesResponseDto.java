package com.mathvault.backend.course.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetAllCoursesResponseDto {
    private UUID id;
    private String name;
    private LocalDateTime createdAt;
    private List<TagDto> tags;
}
