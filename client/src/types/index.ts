export type HeaderLink = {
  label: string;
  to: string;
};

export type HeaderProps = {
  title: string;
  links?: HeaderLink[];
};
