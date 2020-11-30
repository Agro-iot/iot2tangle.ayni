package com.ayni.ayniapi.controller;

import com.ayni.ayniapi.dto.AverageProduction;
import com.ayni.ayniapi.dto.ParamProduction;
import com.ayni.ayniapi.service.ProductionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpHeaders.CONTENT_DISPOSITION;

import java.io.IOException;
import java.util.Date;

@RestController
@CrossOrigin()
@RequestMapping("/api/v1")
public class ProductionController {

    private final ProductionService productionService;

    @Autowired
    public ProductionController(ProductionService productionService) {
        this.productionService = productionService;
    }

    @GetMapping("/avgSensors")
    public AverageProduction getAverageProduction(ParamProduction param) {
        if (param.getPlanting_date() == null) {
            //menor tiempo de la BD
            param.setPlanting_date((long) 0);
        }

        if (param.getHarveting_date() == null) {
            Date date = new Date();
            long time = date.getTime();
            param.setHarveting_date(time / 1000);
        }

        final AverageProduction averageProduction = productionService.getAverageProduction(param);
        return averageProduction;
    }

    @GetMapping("/qrcode/{id}")
    public ResponseEntity<byte[]> generateQrCode(@PathVariable Integer id) throws IOException {
        byte[] qrCode = productionService.generaQrCodeProduction(id);
        HttpHeaders respHeaders = new HttpHeaders();
        respHeaders.setContentLength(qrCode.length);
        respHeaders.setContentType(MediaType.parseMediaType(MediaType.IMAGE_PNG_VALUE));
        respHeaders.set(CONTENT_DISPOSITION, "attachment; filename=" + "qrCode" + ".png");
        return new ResponseEntity<byte[]>(qrCode, respHeaders, HttpStatus.OK);
    }

    @GetMapping("/production/{hash}")
    AverageProduction getAverageProductionByHash(@PathVariable String hash){
        final AverageProduction averageProductionByHash = productionService.getAverageProductionByHash(hash);
        return averageProductionByHash;
    }
}
