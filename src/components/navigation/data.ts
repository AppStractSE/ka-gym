export interface NavItem {
  href: string;
  label: string;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  href: string;
  label: string;
}

export const navigation: NavItem[] = [
  {
    href: "/trana",
    label: "Träna",
  },
  {
    href: "/prislista",
    label: "Prislista",
  },
  {
    href: "/vart-gym",
    label: "Vårt gym",
  },
];
