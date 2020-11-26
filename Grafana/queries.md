# Soil Humidity
```
SELECT tt.id as time_sec,tt.metric,
       CAST(tt.value AS DECIMAL(10,2)) as value
FROM (SELECT
  CONVERT((json_extract(message,'$.timestamp')), UNSIGNED INTEGER ) as id,
 (json_extract(message,'$.iot2tangle[2].data[0].SoilHumidity')) as value,
  "Percentage" as metric
FROM messages) tt
WHERE tt.id > 1605812340
ORDER BY tt.id ASC
```
# Air Humidity
```
SELECT tt.id as time_sec,tt.metric,
       CAST(tt.value AS DECIMAL(10,2)) as value
FROM (SELECT
  CONVERT((json_extract(message,'$.timestamp')), UNSIGNED INTEGER ) as id,
 (json_extract(message,'$.iot2tangle[1].data[1].Humidity')) as value,
  "Percentage" as metric
FROM messages) tt
WHERE tt.id > 1605193200
ORDER BY tt.id ASC
```
# Temperatue
```
SELECT tt.id as time_sec,tt.metric,
       CAST(tt.value AS DECIMAL(10,2)) as value
FROM (SELECT
  CONVERT((json_extract(message,'$.timestamp')), UNSIGNED INTEGER ) as id,
 (json_extract(message,'$.iot2tangle[1].data[0].Temperature')) as value,
  "Celcius" as metric
FROM messages) tt
WHERE tt.id > 1605193200
ORDER BY tt.id ASC
```
# Water Pump Status
```
SELECT tt.id as time_sec,tt.metric,
       CAST(tt.value AS DECIMAL(10,2)) as value
FROM (SELECT
  CONVERT((json_extract(message,'$.timestamp')), UNSIGNED INTEGER ) as id,
 (json_extract(message,'$.iot2tangle[3].data[0].WaterPump')) as value,
  "Status" as metric
FROM messages) tt
WHERE tt.id > 1606330740
ORDER BY tt.id ASC
```
# Preassure
```
SELECT tt.id as time_sec,tt.metric,
       CAST(tt.value AS DECIMAL(10,2)) as value
FROM (SELECT
  CONVERT((json_extract(message,'$.timestamp')), UNSIGNED INTEGER ) as id,
 (json_extract(message,'$.iot2tangle[1].data[2].Pressure')) as value,
  "Psi" as metric
FROM messages) tt
WHERE tt.id > 1605193200
ORDER BY tt.id ASC
```
