import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Glass from '../../assets/img/glass.svg';
import { navigation, userProfile } from '../../data.json';
import config from "./config.js";
import "./Navbar.css";
import { Link, NavLink } from "react-router";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

const Navbar = () => {
  return (
    <Disclosure as="nav">
      <div className="nav-wrapper">
        <div className="mb-btn">
          {/* Mobile menu button*/}
          <DisclosureButton>
            <span>Open main menu</span>
            <Bars3Icon aria-hidden="true" />
            <XMarkIcon aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div className="logo-wrapper">
          <Link 
            to={config.logoLorem.href}
            className="link-item"
          >
            <span>Lorem</span>
            <img
              alt={config.logoLorem.alt}
              src={config.logoLorem.src}
            
            />
          </Link>
        </div>

        <div className="links-wrapper">
          {navigation?.map((item: any, i: any) => (
            <div key={`item-${i}`}>
              {!item.children ? 
                (
                  <NavLink
                    to={item.href}
                    className="link-item"
                  >
                    {item.name}
                  </NavLink>
                ) 
                : (
                  <Menu key={`c-${i}`} as="div" className="submenu">
                    <div>
                      <MenuButton className="menubtn">
                        {item.name}
                        <ChevronDownIcon aria-hidden="true" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="submenu-items"
                    >
                        {item.children?.map((c: any) => {
                          return (
                            <div key={c.id}>
                              <MenuItem>
                                <NavLink
                                  to={`category/${c.category}`}
                                  className="link-item"
                                >
                                  {c.product}
                                </NavLink>
                              </MenuItem>
                            </div>
                          )
                        }
                      )}
                    </MenuItems>
                  </Menu>
                )
              }
            </div>
          ))}
        </div>
 
        <div className="nav-right">
          <div>
            <div className="search">
              <button
                type="button"
              >
                <span>Search</span>
                {<img src={Glass} alt="" />}
              </button>
            </div>

            <div className="modal-search">
              <form id="search-form">
                <input type="search" placeholder="Search for..." id="nav-search" required /> {/* value="" onChange="" */} 
                <button type="submit">Search</button>
              </form>
            </div>
          </div>

          {/* Profile dropdown */}
          {userProfile?.map((u: any) => (
            <Menu as="div" key={`user-${u.id}`} className="profile-menu">
              <MenuButton>
                <span>Open user menu</span>
                <img
                  alt={`${u.alt} ${u.name}`}
                  src={u.src}
                
                />
              </MenuButton>
              <MenuItems
                transition
              >
                <MenuItem>
                  <h3>
                    {u.name}
                  </h3>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <DisclosurePanel className="mb-nav">
        {navigation.map((item: any, i: any) => {
          return (
            <div key={item.name}>
              {!item.children ? 
                (
                  <NavLink
                    to={item.href}
                    className="link-item"
                  >
                    {item.name}
                  </NavLink>
                ) :
                (
                  <Menu key={`c-${i}`} as="div">
                    <MenuButton className="submenu link-item">
                      {item.name}
                      <ChevronDownIcon aria-hidden="true" />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="submenu-group"
                    >
                      {item.children?.map((c: any) => {
                        return (
                          <div key={c.id}>
                            <NavLink
                              to={`category/${c.category}`}
                              className="link-item"
                            >
                              {c.product}
                            </NavLink>
                          </div>
                        )
                      })}
                    </MenuItems>
                  </Menu>
                )
              }
            </div>
          )
        })}
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar;