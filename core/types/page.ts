export enum PagesCategory {
    Courses,
    Services,
    Books,
    Products,
}

export interface IHhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
    _id: string;
}

export interface IBlogData {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    views: number;
    _id: string;
}

export interface IQaData {
    question: string;
    answer: string;
}

export interface ISravnikusData {
    metaTitle: string;
    metaDescription: string;
    seoText: string;
    qas: IQaData[];
    _id: string;
}

export interface IQa2Data {
    question: string;
    answer: string;
}

export interface ILearningclubData {
    metaTitle: string;
    metaDescription: string;
    seoText: string;
    qas: IQa2Data[];
    _id: string;
}

export interface IPageModel {
    _id: string;
    tags: string[];
    firstCategory: PagesCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    advantages: any[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    hh: IHhData;
    qas: any[];
    addresses: any[];
    categoryOn: string;
    blog: IBlogData;
    sravnikus: ISravnikusData;
    learningclub: ILearningclubData;
}
