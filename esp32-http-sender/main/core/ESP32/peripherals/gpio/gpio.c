#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdbool.h>
#include "gpio.h"

#include "freertos/FreeRTOS.h"
#include "driver/gpio.h"

#define GREEN_LED 2
#define RED_LED 15
#define WATERPUMP 4

void init_WaterPump()
{
    gpio_pad_select_gpio(WATERPUMP);
	gpio_set_direction(WATERPUMP, GPIO_MODE_INPUT_OUTPUT);
}

void set_WaterPump(int mode)
{
    gpio_set_level(WATERPUMP, mode);
}
int get_WaterPump()
{
    return gpio_get_level(WATERPUMP);
}

void init_LEDs()
{
    gpio_pad_select_gpio(GREEN_LED);
    gpio_set_direction(GREEN_LED, GPIO_MODE_OUTPUT);

    gpio_pad_select_gpio(RED_LED);
    gpio_set_direction(RED_LED, GPIO_MODE_OUTPUT);
}

void led_GPIO(int led, int mode)
{
    if (led == 0)
        gpio_set_level(GREEN_LED, mode);
    else
        gpio_set_level(RED_LED, mode);
}

bool read_GPIO(int pin)
{
    // Must be inicializated first
    if (gpio_get_level(pin))
        return true;
    else
        return false;
}
