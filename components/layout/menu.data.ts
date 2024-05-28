export interface IMenuItem{
    name: string
    url: string
}

export const MENU_DATA: IMenuItem[] = [
    {
        name: 'menu-home-button',
        url: '/',
    },
    {
        name: 'menu-blog-button',
        url: '/blog',
    },
    {
        name: 'menu-contact-button',
        url: '/contact',
    },
]