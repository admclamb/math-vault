CREATE TABLE module_topics (
    module_id UUID REFERENCES modules(id),
    topic_id UUID REFERENCES topics(id),
    PRIMARY KEY (module_id, topic_id)
);