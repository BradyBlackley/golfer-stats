package com.golfer.demo.models.enums;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

public enum BallFlightType {
    STRAIGHT(1, "straight"),
    STRAIGHT_DRAW(2, "straight-draw"),
    STRAIGHT_FADE(3, "straight-fade"),
    PUSH(4, "push"),
    PUSH_DRAW(5, "push-draw"),
    PUSH_FADE(6, "push-fade"),
    PUSH_SLICE(7, "push-slice"),
    PULL(8, "pull"),
    PULL_DRAW(9, "pull-draw"),
    PULL_FADE(10, "pull-fade"),
    PULL_HOOK(11, "pull-hook"),
    ROLLER(12, "roller");

    private static final Map<Integer, BallFlightType> codeMap = new HashMap<>();
    private static final Map<String, BallFlightType> textValueMap = new HashMap<>();
    public final Integer id;
    public final String label;

    BallFlightType(Integer id, String label) {
        this.id = id;
        this.label = label;
    }

    public Integer getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public static BallFlightType fromId(Integer enumId) {
        return Objects.isNull(enumId) ? null :
                Optional.ofNullable(codeMap.get(enumId)).orElseThrow(() ->
                        new EnumConstantNotPresentException(BallFlightType.class, String.valueOf(enumId)));
    }

    public static BallFlightType fromTextValue(String text) {
        return Objects.isNull(text) ? null :
                Optional.ofNullable(textValueMap.get(text)).orElseThrow(() ->
                        new EnumConstantNotPresentException(BallFlightType.class, text));
    }

    static {
        for(BallFlightType v : values()) {
            codeMap.put(v.getId(), v);
            textValueMap.put(v.getLabel(), v);
        }
    }
}
