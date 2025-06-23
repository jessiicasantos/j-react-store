import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import "./Dropdown.css";

export default function Dropdown() {
  return (
    <Menu as="div" className="dropdown">
      <div>
        <MenuButton className="options">
          Options
          <ChevronDownIcon aria-hidden="true" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="menuItems"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  )
}