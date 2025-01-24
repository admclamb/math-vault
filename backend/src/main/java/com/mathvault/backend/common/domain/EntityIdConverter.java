package com.mathvault.backend.common.domain;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class EntityIdConverter<T> implements AttributeConverter<EntityId<T>, T> {

    @Override
    public T convertToDatabaseColumn(EntityId<T> attribute) {
        return attribute != null ? attribute.getValue() : null;
    }

    @Override
    public EntityId<T> convertToEntityAttribute(T dbData) {
        return dbData != null ? new EntityId<>(dbData) : null;
    }
}