export interface ILink {
    name: string;
    class: string;
    routerLink?: string;
}

export const guestLinks: ILink[] = [
    {
        name: 'Home',
        class: 'nav-item nav-link',
        routerLink: ''
    },
    // {
    //     name: 'Login',
    //     class: 'nav-item nav-link',
    //     routerLink: '/login'
    // }
];


export const companyLinks: ILink[] = [
    {
        name: 'Home',
        class: 'nav-item nav-link',
        routerLink: ''
    },
    {
        name: 'Company lines',
        class: 'nav-item nav-link',
        routerLink: '/lines',
    },
    {
        name: 'Profile',
        class: 'nav-item nav-link',
        routerLink: '/profile',
    },// add logouts
];

export const travelerLinks: ILink[] = [
    {
        name: 'Home',
        class: 'nav-item nav-link',
        routerLink: ''
    },
    {
        name: 'Explore routes',
        class: 'nav-item nav-link',
        routerLink: '/search',
    },
    {
        name: 'My tickets',
        class: 'nav-item nav-link',
        routerLink: '/tickets',
    },
    {
        name: 'Profile',
        class: 'nav-item nav-link',
        routerLink: '/profile',
    },// add logouts
];
