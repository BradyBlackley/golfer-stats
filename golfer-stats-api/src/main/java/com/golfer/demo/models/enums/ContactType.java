package com.golfer.demo.models.enums;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

public enum ContactType {
    FLUSH(1, "flush"),
    MISS_HIT_THIN(2, "miss hit - thin"),
    MISS_HIT_FAT(3, "miss hit - fat"),
    MISS_HIT_TOE(4, "miss hit - toe"),
    MISS_HIT_HEEL(5, "miss hit - heel"),
    MISS(6, "miss");

    private static final Map<Integer, ContactType> codeMap = new HashMap<>();
    private static final Map<String, ContactType> textValueMap = new HashMap<>();
    private final Integer id;
    private final String label;


    ContactType(Integer id, String label) {
        this.id = id;
        this.label = label;
    }

    public Integer getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public static ContactType fromId(Integer enumId) {
        return Objects.isNull(enumId) ? null :
                Optional.ofNullable(codeMap.get(enumId)).orElseThrow(() ->
                        new EnumConstantNotPresentException(ContactType.class, String.valueOf(enumId)));
    }

    public static ContactType fromTextValue(String text) {
        return Objects.isNull(text) ? null :
                Optional.ofNullable(textValueMap.get(text)).orElseThrow(() ->
                        new EnumConstantNotPresentException(ContactType.class, text));
    }

    static {
        for(ContactType v : values()) {
            codeMap.put(v.getId(), v);
            textValueMap.put(v.getLabel(), v);
        }
    }
}
