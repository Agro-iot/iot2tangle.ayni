export type NavigationItem = NavigationLink | NavigationDropdown | NavigationSubheading;

export interface NavigationLink {
    type: 'link';
    route: string | any;
    fragment?: string;
    label: string;
    icon?: string;
    typeIcon?: 'material' | 'image';
    imgUrlIcon?: string;
    routerLinkActive?: { exact: boolean };
    badge?: {
        value: string;
        background: string;
        color: string;
    };
}

export interface NavigationDropdown {
    type: 'dropdown';
    label: string;
    icon?: string;
    typeIcon?: 'material' | 'image';
    imgUrlIcon?: string;
    children: Array<NavigationLink | NavigationDropdown>;
    badge?: {
        value: string;
        background: string;
        color: string;
    };
}

export interface NavigationSubheading {
    type: 'subheading';
    icon?: string;
    typeIcon?: 'material' | 'image';
    imgUrlIcon?: string;
    label: string;
    children: Array<NavigationLink | NavigationDropdown>;
}
