package com.golfer.demo.models.enums;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

public enum Club {
    DRIVER(1,"driver"),
    THREE_WOOD(2, "3-wood"),
    FOUR_WOOD(3, "4-wood"),
    FIVE_WOOD(4, "5-wood"),
    SEVEN_WOOD(5, "7-wood"),
    TWO_HYBRID(6, "2-hybrid"),
    THREE_HYBRID(7, "3-hybrid"),
    FOUR_HYBRID(8, "4-hybrid"),
    FIVE_HYBRID(9, "5-hybrid"),
    TWO_IRON(10, "2-iron"),
    THREE_IRON(11, "3-iron"),
    FOUR_IRON(12, "4-iron"),
    FIVE_IRON(13, "5-iron"),
    SIX_IRON(14, "6-iron"),
    SEVEN_IRON(15, "7-iron"),
    EIGHT_IRON(16, "8-iron"),
    NINE_IRON(17, "9-iron"),
    PITCHING_WEDGE(18, "P-wedge"),
    GAP_WEDGE(19, "G-wedge"),
    SAND_WEDGE(20, "S-wedge"),
    LOFT_WEDGE(21, "L-wedge"),
    PUTTER(22, "putter");

    private static final Map<Integer, Club> codeMap = new HashMap<>();
    private static final Map<String, Club> textValueMap = new HashMap<>();
    public final Integer id;
    public final String label;

    Club(Integer id, String label) {
        this.id = id;
        this.label = label;
    }

    public Integer getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public static Club fromId(Integer enumId) {
        return Objects.isNull(enumId) ? null :
                Optional.ofNullable(codeMap.get(enumId)).orElseThrow(() ->
                        new EnumConstantNotPresentException(Club.class, String.valueOf(enumId)));
    }

    public static Club fromTextValue(String text) {
        return Objects.isNull(text) ? null :
                Optional.ofNullable(textValueMap.get(text)).orElseThrow(() ->
                        new EnumConstantNotPresentException(Club.class, text));
    }

    static {
        for(Club v : values()) {
            codeMap.put(v.getId(), v);
            textValueMap.put(v.getLabel(), v);
        }
    }
}
