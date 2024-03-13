import DarkThemeToggle from '@/components/ui/darkTheme/DarkThemeToggle.vue';

interface MenuItem {
    type: 'title' | 'toggle' | 'link' | 'external';
    text?: string;
    to?: string;
    component?: any;
    href?: string;
}

const menuItems: MenuItem[] = [
    {type: 'title', text: 'Cedric Florentin'},
    {type: 'toggle', component: DarkThemeToggle},
    {type: 'link', text: 'Digital // Others', to: '/digital-others'},
    {type: 'link', text: 'Analog // Commercial', to: '/analog-commercial'},
    {type: 'link', text: 'Digital // Commercial', to: '/digital-commercial'},
    {
        type: 'external',
        text: 'Instagram',
        href: 'https://www.instagram.com/cedriccamera/',
    },
    {type: 'link', text: 'About', to: '/about'},
];

export default menuItems;
