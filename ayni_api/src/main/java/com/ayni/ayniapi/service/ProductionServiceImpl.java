package com.ayni.ayniapi.service;

import com.ayni.ayniapi.dto.AverageProduction;
import com.ayni.ayniapi.dto.ParamProduction;
import com.ayni.ayniapi.utils.FileUtils;
import com.ayni.ayniapi.utils.IotaUtils;
import com.ayni.ayniapi.utils.QRCodeUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.jdbc.core.JdbcTemplate;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

@Service
public class ProductionServiceImpl implements ProductionService {

    private final NamedParameterJdbcTemplate DBparam;
    private final IotaUtils iotaUtils;
    private final QRCodeUtils qrCodeUtils;
    private final JdbcTemplate jdbcTemplate;
    @Value("${url.fronted}")
    private String  ulr ;

    @Autowired
    public ProductionServiceImpl(NamedParameterJdbcTemplate DBparam, IotaUtils iotaUtils, QRCodeUtils qrCodeUtils, JdbcTemplate jdbcTemplate) {
        this.DBparam = DBparam;
        this.iotaUtils = iotaUtils;
        this.qrCodeUtils = qrCodeUtils;
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public AverageProduction getAverageProduction(ParamProduction param) {

        final AverageProduction averageProductions = getAvgSensors(param);
        final int insertId = InsertAvgProduction(averageProductions);
        averageProductions.setId(insertId);
        return averageProductions;
    }

    @Override
    public byte[] generaQrCodeProduction(Integer id) throws IOException {
        final AverageProduction averageProductionById = getAverageProductionById(id);
        final ObjectMapper objectMapper = new ObjectMapper();
        final String data = objectMapper.writeValueAsString(averageProductionById);
        String hash = iotaUtils.senDataTangle(data);
        updateHashAverageProductionById(id, hash);
        String qrCodePath = System.getProperty("java.io.tmpdir") + id + "_qrcode.png";
        String urlData = this.ulr + "/#/inicio/production/" + hash;
        qrCodeUtils.createQRCode(qrCodePath, urlData);
        MultipartFile qrCodeFile = FileUtils.fileToMultipart(qrCodePath);
        final byte[] qrCode = qrCodeFile.getBytes();
        return qrCode;
    }
    @Override
    public AverageProduction getAverageProductionByHash(String hash) {

        final String QUERY_SELECT = "select id, " +
                "       hash, " +
                "       planting_date, " +
                "       harveting_date, " +
                "       seed, " +
                "       location, " +
                "       medium, " +
                "       temperature, " +
                "       humidity, " +
                "       pressure, " +
                "       soilHumidity " +
                "from avg_production " +
                "where hash = :hash;";

        Map<String, String> paramMap = new HashMap<>();
        paramMap.put("hash", hash);

        final AverageProduction averageProductions = DBparam.queryForObject(QUERY_SELECT, paramMap, (rs, i) -> {
            final AverageProduction averageProduction = new AverageProduction();
            final HashMap<String, Double> sensorMap = new HashMap<>();
            sensorMap.put("avg_temperature", rs.getDouble("temperature"));
            sensorMap.put("avg_humidity", rs.getDouble("humidity"));
            sensorMap.put("avg_pressure", rs.getDouble("pressure"));
            sensorMap.put("avg_soilHumidity", rs.getDouble("soilHumidity"));
            final ParamProduction param = new ParamProduction();

            param.setPlanting_date(rs.getLong("planting_date"));
            param.setHarveting_date(rs.getLong("harveting_date"));
            param.setLocation(rs.getString("location"));
            param.setMedium(rs.getString("medium"));
            param.setSeed(rs.getString("seed"));
            averageProduction.setSensors(sensorMap);
            averageProduction.setParameters(param);
            return averageProduction;
        });

        return averageProductions;
    }

    private void updateHashAverageProductionById(Integer id, String hash) {
        final String QUERY_UPDATE = "update avg_production " +
                "set hash =:hash " +
                "where id = :id";
        HashMap<String, Object> params = new HashMap<>();
        params.put("hash", hash);
        params.put("id", id);
        DBparam.update(QUERY_UPDATE, params);
    }

    private AverageProduction getAverageProductionById(Integer id) {

        final String QUERY_SELECT = "select id, " +
                "       hash, " +
                "       planting_date, " +
                "       harveting_date, " +
                "       seed, " +
                "       location, " +
                "       medium, " +
                "       temperature, " +
                "       humidity, " +
                "       pressure, " +
                "       soilHumidity " +
                "from avg_production " +
                "where id = :id;";

        Map<String, Integer> paramMap = new HashMap<>();
        paramMap.put("id", id);

        final AverageProduction averageProductions = DBparam.queryForObject(QUERY_SELECT, paramMap, (rs, i) -> {
            final AverageProduction averageProduction = new AverageProduction();
            final HashMap<String, Double> sensorMap = new HashMap<>();
            sensorMap.put("avg_temperature", rs.getDouble("temperature"));
            sensorMap.put("avg_humidity", rs.getDouble("humidity"));
            sensorMap.put("avg_pressure", rs.getDouble("pressure"));
            sensorMap.put("avg_soilHumidity", rs.getDouble("soilHumidity"));
            final ParamProduction param = new ParamProduction();

            param.setPlanting_date(rs.getLong("planting_date"));
            param.setHarveting_date(rs.getLong("harveting_date"));
            param.setLocation(rs.getString("location"));
            param.setMedium(rs.getString("medium"));
            averageProduction.setSensors(sensorMap);
            averageProduction.setParameters(param);
            averageProduction.setId(id);
            return averageProduction;
        });

        return averageProductions;
    }

    private AverageProduction getAvgSensors(ParamProduction param) {
        final String QUERY_AVG = "select CAST(avg(tt.temperature) AS DECIMAL(10, 2))  as avg_temperature, " +
                "       CAST(avg(tt.humidity) AS DECIMAL(10, 2))     as avg_humidity, " +
                "       CAST(avg(tt.pressure) AS DECIMAL(10, 2))     as avg_pressure, " +
                "       CAST(avg(tt.soilHumidity) AS DECIMAL(10, 2)) as avg_soilHumidity " +
                "from (select json_extract(message, '$.timestamp') * 1                          as 'timestamp', " +
                "             json_extract(message, '$.iot2tangle[1].data[0].Temperature') * 1  as 'temperature', " +
                "             json_extract(message, '$.iot2tangle[1].data[1].Humidity') * 1     as 'humidity', " +
                "             json_extract(message, '$.iot2tangle[1].data[2].Pressure') * 1     as 'pressure', " +
                "             json_extract(message, '$.iot2tangle[2].data[0].SoilHumidity') * 1 as 'soilHumidity' " +
                "      from messages " +
                "     ) tt " +
                "where tt.timestamp >= :date_start " +
                "  and tt.timestamp <= :date_end;";


        Map<String, Long> paramMap = new HashMap<>();
        paramMap.put("date_start", param.getPlanting_date());
        paramMap.put("date_end", param.getHarveting_date());

        final AverageProduction averageProductions = DBparam.queryForObject(QUERY_AVG, paramMap, (rs, i) -> {

            final AverageProduction averageProduction = new AverageProduction();
            averageProduction.setParameters(param);
            final HashMap<String, Double> sensorMap = new HashMap<>();

            sensorMap.put("avg_temperature", rs.getDouble("avg_temperature"));
            sensorMap.put("avg_humidity", rs.getDouble("avg_humidity"));
            sensorMap.put("avg_pressure", rs.getDouble("avg_pressure"));
            sensorMap.put("avg_soilHumidity", rs.getDouble("avg_soilHumidity"));
            averageProduction.setSensors(sensorMap);
            return averageProduction;
        });
        return averageProductions;
    }

    private int InsertAvgProduction(AverageProduction averageProductions) {
        final String SQL_INSERT = "insert into avg_production(planting_date, harveting_date, seed, location, medium, temperature, humidity, pressure, " +
                "                           soilHumidity) " +
                "values (?, ?, ?, ?, ?, ?, ?, ?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection
                    .prepareStatement(SQL_INSERT,  Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, averageProductions.getParameters().getPlanting_date());
            ps.setLong(2, averageProductions.getParameters().getHarveting_date());
            ps.setString(3, averageProductions.getParameters().getSeed());
            ps.setString(4, averageProductions.getParameters().getLocation());
            ps.setString(5, averageProductions.getParameters().getMedium());
            ps.setDouble(6, averageProductions.getSensors().get("avg_temperature"));
            ps.setDouble(7, averageProductions.getSensors().get("avg_humidity"));
            ps.setDouble(8, averageProductions.getSensors().get("avg_pressure"));
            ps.setDouble(9, averageProductions.getSensors().get("avg_soilHumidity"));
            return ps;
        }, keyHolder);

        Number key = keyHolder.getKey();
        System.out.println(key.longValue());
        return (int) key.longValue();
    }

}
