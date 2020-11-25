#ifndef _CONFIG_H
#define _CONFIG_H

/* ----- CONFIG FILE ----- */

/* Device */
const char *id_name = "ESP32-HTTP";

/* Network Configuration */
const char *ssid_WiFi = "Andes";
const char *pass_WiFi = "Erreconerre123!";

/* HTTP Endpoint Configuration */
const char *address = "10.0.9.9/messages"; /* Endpoint address (HTTP), must NOT include 'http://xxx' or 'tcp://xxx' */
int port = 3002;

/* Enable Sensors */
bool isEnable_TemperatureIntern = true;
bool isEnable_TemperatureExtern = true; /*                     true: Enable  --  false: Disable                            */
bool isEnable_Humidity = true;          /* If the sensor is disabled the data about it will not be displayed in the Tangle */
bool isEnable_Pressure = true;
bool isEnable_Acoustic = true;
bool isEnable_Light = true;
bool isEnable_Accelerometer_X = true;
bool isEnable_Accelerometer_Y = true;
bool isEnable_Accelerometer_Z = true;
bool isEnable_Gyroscope_X = true;
bool isEnable_Gyroscope_Y = true;
bool isEnable_Gyroscope_Z = true;
bool isEnable_sen0193 = true;
bool isEnable_WaterPump = true;

/* Interval of time */
long interval = 30; /* Time in seconds between */

#endif
