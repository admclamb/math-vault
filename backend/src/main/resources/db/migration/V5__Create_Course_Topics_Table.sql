CREATE TABLE course_topics (
    course_id UUID,
    topic_id UUID,
    CONSTRAINT fk_course
        FOREIGN KEY(course_id) 
        REFERENCES courses(id),
    CONSTRAINT fk_topic
        FOREIGN KEY(topic_id) 
        REFERENCES topics(id),
    PRIMARY KEY (course_id, topic_id)
);