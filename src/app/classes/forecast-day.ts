export class ForecastDay {
    cityName: string;
    list: Array<any>;

    constructor({ city, list }) {
        this.cityName = city.name;
        this.list = list.map(({ dt_txt, main }) => ({ date: dt_txt, temp: main.temp, pressure: main.pressure }));
    }
}
