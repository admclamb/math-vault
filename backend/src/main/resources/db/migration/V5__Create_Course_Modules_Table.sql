CREATE TABLE course_modules (
    course_id UUID REFERENCES courses(id),
    module_id UUID REFERENCES modules(id),
    PRIMARY KEY (course_id, module_id)
)