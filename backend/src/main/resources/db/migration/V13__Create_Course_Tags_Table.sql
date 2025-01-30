CREATE TABLE course_tags (
    course_id UUID REFERENCES courses(id),
    tag_id UUID REFERENCES tags(id),
    PRIMARY KEY (course_id, tag_id)
)