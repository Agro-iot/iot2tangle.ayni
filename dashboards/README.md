# Using Hornet's Grafana and Keepy to build a Sensor Dashboard

1. First set up a connection to [Keepy DB](https://github.com/iot2tangle/Keepy). This option is under Settings > Data Sources
![Keepy Data Source](https://user-images.githubusercontent.com/51343893/100308710-43776580-2f66-11eb-9f80-f84a177a8ca0.png)

2. Create a Sensor Dashboard by going to manage and clicking New Dashboard. Then, add your first pannel to it. 
![New Dashboard](https://user-images.githubusercontent.com/51343893/100419181-498e4480-3041-11eb-99ca-d9c6b3cd39f5.png)

3. Select Keepy as your Data source for the new Panel.
![Query Editor](https://user-images.githubusercontent.com/51343893/100419370-a8ec5480-3041-11eb-96ac-6b5f639ae466.png)

4. Use the query editor to create the SQL sentence.
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
The Sensor Dashboards will look as follow:

![Sensor Dashboard](https://user-images.githubusercontent.com/51343893/100407670-46d22600-3026-11eb-8f33-5f853eecdba2.png)
