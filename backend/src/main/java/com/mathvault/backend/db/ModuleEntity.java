package com.mathvault.backend.db;

import java.util.List;
import java.util.UUID;

import com.mathvault.backend.common.domain.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "modules")
public class ModuleEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @ManyToMany(mappedBy = "modules")
    private List<CourseEntity> courses;

    @ManyToMany
    @JoinTable(name = "module_topics", joinColumns = @JoinColumn(name = "module_id"), inverseJoinColumns = @JoinColumn(name = "topic_id"))
    private List<TopicEntity> topics;
}
