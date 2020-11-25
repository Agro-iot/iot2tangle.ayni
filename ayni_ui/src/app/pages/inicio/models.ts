export interface Parameters {
    planting_date: number;
    harveting_date: number;
    seed?: string;
    location?: string;
    medium?: string;
}

export interface Sensors {
    avg_soilHumidity: number;
    avg_humidity: number;
    avg_temperature: number;
    avg_pressure: number;
}

export interface PlanProduction {
    id: number;
    parameters: Parameters;
    sensors: Sensors;
}