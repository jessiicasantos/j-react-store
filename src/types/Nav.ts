export interface NavItem {
    id: number;
    href: string;
    name: string;
    children?: NavItem[];
    category?: string;
    product?: string;
}