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
    image: string;
    price_per_day: number;
    status: string;
    images: ICarImage[];
}

export interface ICarList {
    cars: ICar[];
}