import { MenuItem } from "../menuitem/component";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((menuItem) => (
        <li>
          <MenuItem menuItem={menuItem} />
        </li>
      ))}
    </ul>
  );
};