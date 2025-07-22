import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ChevronDownIcon from '../../assets/img/chevron-down-icon.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import userIcon from '../../assets/img/user-icon.svg';
import { navigation } from '../../data.json';
import config from "./config";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../Login/AuthContext.js';
import { useNotification } from '../NotificationContext/NotificationContext.js';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { setNotification } = useNotification();

  const logoutAndNotify = () => {
    logout();
    setNotification({ message: "You've been signed out", type: "error" });
  } 

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
            <svg width="59" height="38" viewBox="0 0 59 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7204 0.398132C17.2432 0.398132 21.7204 4.87529 21.7204 10.3981V27.8981C21.7204 28.3584 22.0935 28.7315 22.5537 28.7315C23.0139 28.7315 23.387 28.3584 23.387 27.8981V10.3981C23.387 4.87528 27.8642 0.398132 33.387 0.398132H46.7204C53.1637 0.398132 58.387 5.62148 58.387 12.0648V16.2445C58.387 19.0514 57.3754 21.7649 55.5371 23.8861L44.1146 37.0648H30.8822L47.9801 17.3366L48.0729 17.2194C48.2767 16.9367 48.387 16.5955 48.387 16.2445V12.0648C48.387 11.1443 47.6409 10.3981 46.7204 10.3981H35.0537V9.5648C35.0537 9.10456 34.6806 8.73147 34.2204 8.73147C33.7601 8.73147 33.387 9.10456 33.387 9.5648V27.0648C33.387 32.5876 28.9099 37.0648 23.387 37.0648H21.7204C16.1975 37.0648 11.7204 32.5876 11.7204 27.0648V9.5648C11.7204 9.10456 11.3473 8.73147 10.887 8.73147C10.4268 8.73147 10.0537 9.10456 10.0537 9.5648V37.0648H0.0537109V10.3981C0.0537109 4.87528 4.53086 0.398132 10.0537 0.398132H11.7204Z" fill="#FC5800"></path>
            </svg>
            {/* <img
              alt={config.logoLorem.alt}
              src={config.logoLorem.src}
            
            /> */}
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
                        <img src={ChevronDownIcon} alt="Chevron Down Icon" className="chevronDownIcon" />
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
            {/* <div className="search">
              <button
                type="button"
              >
                <span>Search</span>
                {<img src={Glass} alt="" />}
              </button>
            </div> */}

            <div className="modal-search">
              <form id="search-form">
                <input type="search" placeholder="Search for..." id="nav-search" required /> {/* value="" onChange="" */} 
                <button type="submit">Search</button>
              </form>
            </div>
          </div>

          {/* Profile dropdown */}
          {user ? (
            <Menu as="div" key={`user-${user.id}`}  className="profile-menu">
              <MenuButton>
                <span>Open user menu</span>
                  <img
                    alt={`${user.alt} ${user.name}`}
                    src={user.src}
                  />
              </MenuButton>
              <MenuItems
                transition
              >
                <MenuItem>
                  <h3>
                    Olá, {user.name}!
                  </h3>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={logoutAndNotify}
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            ) : (
              <Link to="/login" className="login-icon">
                <img src={userIcon} alt="User icon" width={30} height={30} />
              </Link>
            )}
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
                      <img src={ChevronDownIcon} alt="Chevron Down Icon" className="chevronDownIcon" />
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