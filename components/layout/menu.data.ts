export interface IMenuItem{
    name: string
    url: string
}

export const MENU_DATA: IMenuItem[] = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Blog',
        url: '/blog',
    },
    {
        name: 'Contact',
        url: '/contact',
    },
]