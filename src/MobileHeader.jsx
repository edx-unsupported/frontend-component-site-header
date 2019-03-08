import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo } from './Logo';

// Assets
import { ReactComponent as MenuIcon } from './assets/menu.svg';

class MobileHeader extends React.Component {
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
          <a key={`${type}-${content}`} className="nav-link" href={href}>
            {content}
          </a>
        );
      }

      return (
        <Menu key={`${type}-${content}`} tag="div" className="nav-item">
          <MenuTrigger tag="button" className="nav-link text-left btn-link d-inline-flex align-items-center">
            {content}
          </MenuTrigger>
          <MenuContent className="position-static pin-left pin-right py-2">
            {submenuContent}
          </MenuContent>
        </Menu>
      );
    });
  }

  renderUserMenuItems() {
    const { userMenu } = this.props;

    return userMenu.map(({ type, href, content }) => (
      <li className="nav-item" key={`${type}-${content}`}>
        <a className="nav-link" href={href}>{content}</a>
      </li>
    ));
  }

  renderLoggedOutItems() {
    const { loggedOutItems } = this.props;

    return loggedOutItems.map(({ type, href, content }, i, arr) => (
      <li className="nav-item px-3 my-2" key={`${type}-${content}`}>
        <a
          className={classNames(
            'btn btn-block',
            {
              'btn-outline-primary': i < arr.length - 1,
              'btn-primary': i === arr.length - 1,
            },
          )}
          href={href}
        >
          {content}
        </a>
      </li>
    ));
  }

  render() {
    const {
      logo,
      logoAltText,
      logoDestination,
      loggedIn,
      avatar,
      username,
      stickyOnMobile,
    } = this.props;

    const logoProps = { src: logo, alt: logoAltText, href: logoDestination };

    return (
      <header
        aria-label="Main"
        className={classNames(
          'site-header-mobile d-flex justify-content-between align-items-center shadow',
          {
            'sticky-top': stickyOnMobile,
          },
        )}
      >
        <div className="w-100">
          <Menu className="position-static">
            <MenuTrigger tag="button" className="icon-button" aria-label="Main Menu" title="Main Menu">
              <MenuIcon role="img" aria-hidden focusable="false" width="1.5rem" height="1.5rem" />
            </MenuTrigger>
            <MenuContent
              tag="nav"
              aria-label="Main"
              className="nav flex-column pin-left pin-right border-top shadow py-2"
            >
              {this.renderMainMenu()}
            </MenuContent>
          </Menu>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <LinkedLogo className="logo" {...logoProps} itemType="http://schema.org/Organization" />
        </div>
        <div className="w-100 d-flex justify-content-end align-items-center">
          <Menu tag="nav" aria-label="Account" className="position-static">
            <MenuTrigger tag="button" className="icon-button" aria-label="Account Menu" title="Account Menu">
              <Avatar size="1.5rem" src={avatar} alt={username} />
            </MenuTrigger>
            <MenuContent tag="ul" className="nav flex-column pin-left pin-right border-top shadow py-2">
              {loggedIn ? this.renderUserMenuItems() : this.renderLoggedOutItems()}
            </MenuContent>
          </Menu>
        </div>
      </header>
    );
  }
}

MobileHeader.propTypes = {
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
  stickyOnMobile: PropTypes.bool,
};

MobileHeader.defaultProps = {
  mainMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false,
  stickyOnMobile: true,
};

export default MobileHeader;
