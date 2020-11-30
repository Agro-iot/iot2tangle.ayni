package com.ayni.ayniapi.service;

import com.ayni.ayniapi.dto.AverageProduction;
import com.ayni.ayniapi.dto.ParamProduction;

import java.io.IOException;

public interface ProductionService {
    AverageProduction getAverageProduction(ParamProduction param);
    byte[] generaQrCodeProduction(Integer id) throws IOException;
    AverageProduction getAverageProductionByHash(String hash);
}
