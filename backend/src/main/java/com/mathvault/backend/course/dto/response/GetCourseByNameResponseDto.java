package com.mathvault.backend.course.dto.response;

import java.util.List;
import java.util.UUID;

import com.mathvault.backend.course.dto.TagDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetCourseByNameResponseDto {
    private UUID id;
    private String name;
    private String description;
    private List<TagDto> tags;
}
