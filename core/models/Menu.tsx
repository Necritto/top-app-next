import {FirstLevelMenu} from '@/core/types/menu';
import {PagesCategory} from '@/core/types/page';
import CoursesSvg from '@/assets/images/icons/courses.svg';
import BooksSvg from '@/assets/images/icons/books.svg';
import ServicesSvg from '@/assets/images/icons/services.svg';
import ProductsSvg from '@/assets/images/icons/products.svg';

const firstLevelMenu: FirstLevelMenu[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <CoursesSvg />,
        id: PagesCategory.Courses,
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <ServicesSvg />,
        id: PagesCategory.Services,
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <BooksSvg />,
        id: PagesCategory.Books,
    },
    {
        route: 'products',
        name: 'Товары',
        icon: <ProductsSvg />,
        id: PagesCategory.Products,
    },
];

export {firstLevelMenu};
