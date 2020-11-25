package com.ayni.ayniapi.dto;

import lombok.Data;

@Data
public class ParamProduction {
    private Long planting_date;
    private Long harveting_date;
    private String seed;
    private String location;
    private String medium;
}
