export interface MenuItemsTypes {
  href: string;
  label: {
    [a:string]:string
  };
  id: number;
  sub: MenuItemsTypes[] | [];
}
