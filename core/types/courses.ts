export interface ICourseCharacteristic {
    name: string;
    value: string;
}

export interface IBlog {
    text: string;
    _id: string;
    bigImage: string;
}

export interface ICourseModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ICourseCharacteristic[];
    advantages: string;
    initialRating: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    html: string;
    blog: IBlog;
    companyId: string;
    clicks: number;
    reviews: any[];
    reviewCount: number;
    reviewAvg?: any;
}
