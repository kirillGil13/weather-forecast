import {ICoords} from '@/store/user/types';

export interface IWeatherCurrent {
    coord: ICoords,
    weather: IWeatherCurrentWeather,
    base: string,
    main: IWeatherCurrentMain,
    visibility: number,
    wind: IWeatherCurrentWind,
    clouds: IWeatherCurrentCloudiness,
    dt: number,
    sys: IWeatherCurrentSys,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface IWeatherCurrentWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IWeatherCurrentMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface IWeatherCurrentSys {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
}

export interface IWeatherCurrentCloudiness {
    all: number,
}

export interface IWeatherCurrentWind {
    deg: number,
    speed: number,
}
