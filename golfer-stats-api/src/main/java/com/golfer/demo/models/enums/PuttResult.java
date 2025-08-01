package com.golfer.demo.models.enums;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

public enum PuttResult {
    SINK(1, "sink"),
    MISS_WITHIN_GIMME_RANGE(2, "miss - within gimme range"),
    MISS_BEYOND_GIMME_RANGE(3, "miss - beyond gimme range");

    private static final Map<Integer, PuttResult> codeMap = new HashMap<>();
    private static final Map<String, PuttResult> textValueMap = new HashMap<>();
    private final Integer id;
    private final String label;

    PuttResult(Integer id, String label) {
        this.id = id;
        this.label = label;
    }

    public Integer getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public static PuttResult fromId(Integer enumId) {
        return Objects.isNull(enumId) ? null :
                Optional.ofNullable(codeMap.get(enumId)).orElseThrow(() ->
                        new EnumConstantNotPresentException(PuttResult.class, String.valueOf(enumId)));
    }

    public static PuttResult fromTextValue(String text) {
        return Objects.isNull(text) ? null :
                Optional.ofNullable(textValueMap.get(text)).orElseThrow(() ->
                        new EnumConstantNotPresentException(PuttResult.class, text));
    }

    static {
        for(PuttResult v : values()) {
            codeMap.put(v.getId(), v);
            textValueMap.put(v.getLabel(), v);
        }
    }
}
