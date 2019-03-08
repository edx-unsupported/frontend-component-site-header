import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo } from './Logo';

// Assets
const caret = (
  <svg width="16px" height="16px" viewBox="0 0 16 16" className="ml-1 mr-n1">
    <path d="M7,4 L7,8 L11,8 L11,10 L5,10 L5,4 L7,4 Z" fill="currentColor" transform="translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) " />
  </svg>
);


class DesktopHeader extends React.Component {
  constructor(props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  renderMainMenu() {
    const { mainMenu } = this.props;

    // Nodes are accepted as a prop
    if (!Array.isArray(mainMenu)) return mainMenu;

    return mainMenu.map((menuItem) => {
      const {
        type,
        href,
        content,
        submenuContent,
      } = menuItem;

      if (type === 'item') {
        return (
          <a key={`${type}-${content}`} className="nav-link" href={href}>{content}</a>
        );
      }

      return (
        <Menu key={`${type}-${content}`} tag="div" className="nav-item" respondToPointerEvents>
          <MenuTrigger tag="a" className="nav-link d-inline-flex align-items-center" href={href}>
            {content} {caret}
          </MenuTrigger>
          <MenuContent className="pin-left pin-right shadow py-2">
            {submenuContent}
          </MenuContent>
        </Menu>
      );
    });
  }

  renderUserMenu() {
    const { userMenu, avatar, username } = this.props;

    return (
      <Menu tag="ul" className="mb-0">
        <MenuTrigger
          tag="button"
          aria-label="Account Menu"
          className="btn btn-light d-inline-flex align-items-center pl-2 pr-3"
        >
          <Avatar size="1.5em" src={avatar} alt="" className="mr-2" />
          {username} {caret}
        </MenuTrigger>
        <MenuContent className="dropdown-menu show dropdown-menu-right pin-right shadow py-2">
          {userMenu.map(({ type, href, content }) => (
            <li className={`dropdown-${type}`} key={`${type}-${content}`}>
              <a href={href}>{content}</a>
            </li>
          ))}
        </MenuContent>
      </Menu>
    );
  }

  renderLoggedOutItems() {
    const { loggedOutItems } = this.props;

    return loggedOutItems.map((item, i, arr) => (
      <a
        key={`${item.type}-${item.content}`}
        className={classNames(
          'btn mr-2',
          {
            'btn-outline-primary': i < arr.length - 1,
            'btn-primary': i === arr.length - 1,
          },
        )}
        href={item.href}
      >
        {item.content}
      </a>
    ));
  }

  render() {
    const {
      logo,
      logoAltText,
      logoDestination,
      loggedIn,
    } = this.props;

    const logoProps = { src: logo, alt: logoAltText, href: logoDestination };

    return (
      <header className="site-header-desktop">
        <div className="container-fluid">
          <div className="nav-container position-relative d-flex align-items-center">
            <LinkedLogo className="logo mr-2" {...logoProps} />
            <div className="d-flex flex-grow-1 flex-column-reverse">
              <nav aria-label="Main" className="nav main-nav">{this.renderMainMenu()}</nav>
              <nav
                aria-label="Secondary"
                className="nav secondary-menu-container mb-3 mt-3 align-self-end align-items-center"
              >
                {loggedIn ? this.renderUserMenu() : this.renderLoggedOutItems()}
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

DesktopHeader.propTypes = {
  mainMenu: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),

  userMenu: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string,
  })),
  loggedOutItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string,
  })),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  loggedIn: PropTypes.bool,
};

DesktopHeader.defaultProps = {
  mainMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false,
};

export default DesktopHeader;
