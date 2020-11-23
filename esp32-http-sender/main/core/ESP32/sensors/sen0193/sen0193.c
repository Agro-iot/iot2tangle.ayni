#include "sen0193.h"
#include "driver/gpio.h"
#include "driver/adc.h"
#include "esp_log.h"
#include "math.h"

#define MOISTURE_ADC_CH ADC1_CHANNEL_7
#define TAG "SEN0193"

char buffer[100];
char *s;

bool check_sen0193()
{
    return true;
}

void init_sen0193(bool _ft)
{
    if (_ft)
    {
        ESP_ERROR_CHECK(adc1_config_width(ADC_WIDTH_BIT_12));                         // High resolution
        ESP_ERROR_CHECK(adc1_config_channel_atten(MOISTURE_ADC_CH, ADC_ATTEN_DB_11)); // 0 - 3.6 V - as +2.65V was observed on a pin
    }
}

void print_sen0193()
{
    if (check_sen0193())
        printf("sen0193 : OK");
    else
        printf("sen0193 : Not detected ");
}

char *get_sen0193()
{
    int moisture = adc1_get_raw(MOISTURE_ADC_CH);
    double temp = (2000.0 - round(2851.0 * moisture / 4095.0)) * 0.08; //Round  is used to keep only 3 decimal places
    if (temp >= 97)
    {
        temp = 100;
    }
    s = " ";
    sprintf(buffer, "%.2f", temp);
    s = buffer;
    return s;
}
