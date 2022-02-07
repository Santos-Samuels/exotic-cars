export interface ICarImage {
    id: number;
    url: string;
    color: string;
}

export interface ICar {
    id: number;
    beand: string;
    brand_logo: string;
    model: string;
    price_per_day: number;
    images: ICarImage[];
}

export interface ICarList {
    cars: ICar[];
}