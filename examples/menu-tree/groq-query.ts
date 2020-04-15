export type MenuItemType = {
  _key: string;
  _type: string;
  as: string;
  href: string;
  name: string;
  slug: string;
  children?: Array<MenuItemType>;
};

export type MenuType = {
  title: string;
  slug: string;
  children: Array<MenuItemType>;
};

export const menus = ({ locale }) => /* groq */ `
*[_type == "menu" && locale == "${locale}"]{
  title,
  "slug": slug.current,
  "children": children[]{
    _type == "menuItem" => {
      _key,
  		_type,
      "name": page -> name,
      "slug": slug.current,
      "slug": page -> slug.current,
      "as": "/" + page -> locale + "/" + page -> slug.current,
      "href": "/" + page -> _type + "?locale=" + page -> locale + "&slug=" + page -> slug.current,
    },
    _type == "menuBranch" => {
      ...,
      _key,
      _type,
      name,
      "slug": menuItem -> slug.current,
      !defined(menuItem) => {
        "slug": children[0].page -> slug.current,
        "as": "/" + children[0].page -> locale + "/" + children[0].page -> slug.current,
        "href": "/" + children[0].page -> _type + "?locale=" + children[0].page -> locale + "&slug=" + children[0].page -> slug.current,
      },
      defined(menuItem) => {
        "slug": menuItem -> slug.current,
        "as": "/" + menuItem -> locale + "/" + menuItem -> slug.current,
        "href": "/" + menuItem -> _type + "?locale=" + menuItem -> locale + "&slug=" + menuItem -> slug.current,
      },  
      "children": children[] {
        _key,
    		"_type": "menuItem",
        "name": page -> name,
        "slug": page -> slug.current,
        "as": "/" + page -> locale + "/" + page -> slug.current,
        "href": "/" + page -> _type + "?locale=" + page -> locale + "&slug=" + page -> slug.current,
      }
    }
  }
}
`;

