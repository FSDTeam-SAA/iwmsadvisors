export interface INavLink {
  order: number;
  label: string;
  href: string;
}

export interface ICtaButton {
  label: string;
  href: string;
}

export interface INavbar {
  _id: string;
  logo: string;
  navLinks: INavLink[];
  ctaButton: ICtaButton;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface INavbarResponse {
  status: boolean;
  message: string;
  data: INavbar;
}
