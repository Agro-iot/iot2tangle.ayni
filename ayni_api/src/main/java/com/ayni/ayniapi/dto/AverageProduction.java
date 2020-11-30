package com.ayni.ayniapi.dto;

import lombok.Data;

import java.util.Map;

@Data
public class AverageProduction {
    private Integer id;
    private ParamProduction parameters;
    private Map<String,Double> sensors;
}
