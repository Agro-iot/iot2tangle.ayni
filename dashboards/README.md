# Using Hornet's Grafana and Keepy to build a Sensor Dashboard

1. First set up a connection to [Keepy DB](https://github.com/iot2tangle/Keepy). This option is under Settings > Data Sources

![image](https://user-images.githubusercontent.com/51343893/100308710-43776580-2f66-11eb-9f80-f84a177a8ca0.png)

2. Create a new Dashboard and add a new pannel to it. 
3. Select Keepy as your Data source for the new Panel.
4. Use the query editor to adjust the SQL sentence.
5. You can adjust the following queries to build new panels for your sensors. Keep in mind the JSON Structure. Here some usefull tools:
* [JSON Parser](https://jsonformatter.org/json-parser)
* [JSON Intro](https://www.w3schools.com/js/js_json_intro.asp)


## Soil Humidity
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
## Air Humidity
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
## Temperatue
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
## Water Pump Status
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
## Preassure
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
The Dashboards will look as follow:

![Hornet Grafana Sensor Dashboard](https://user-images.githubusercontent.com/51343893/100385381-a9540380-2fdf-11eb-9202-0956b0fdfb78.png)
