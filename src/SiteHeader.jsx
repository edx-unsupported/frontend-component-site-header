import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ExtraSmall, Small, Medium, Large, ExtraLarge } from '@edx/paragon';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo } from './Logo';

// Assets
import menuIcon from './assets/menu.svg';

const caret = (
  <svg width="16px" height="16px" viewBox="0 0 16 16" className="ml-1 mr-n1">
    <path d="M7,4 L7,8 L11,8 L11,10 L5,10 L5,4 L7,4 Z" fill="currentColor" transform="translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) " />
  </svg>
);


class SiteHeader extends React.Component {
  constructor(props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  renderDesktopNav() {
    const mainNavItems = ((menuItems) => {
      // Nodes are accepted as a prop
      if (!Array.isArray(menuItems)) return menuItems;

      return menuItems.map((menuItem) => {
        const {
          type,
          href,
          content,
          submenuContent,
        } = menuItem;

        if (type === 'item') {
          return (
            <li key={`${type}-${content}`} className="nav-item">
              <a className="nav-link" href={href}>{content}</a>
            </li>
          );
        }

        return (
          <Menu key={`${type}-${content}`} tag="li" className="nav-item" respondToPointerEvents>
            <MenuTrigger tag="a" className="nav-link d-inline-flex align-items-center" href={href}>
              {content} {caret}
            </MenuTrigger>
            <MenuContent className="pin-left pin-right shadow py-2">
              {submenuContent}
            </MenuContent>
          </Menu>
        );
      });
    })(this.props.mainMenu);

    const userMenuNav = (menuItems => (
      <Menu>
        <MenuTrigger tag="button" className="btn btn-light d-inline-flex align-items-center pl-2 pr-3">
          <Avatar size="1.5em" src={this.props.avatar} className="mr-2" /> {this.props.username} {caret}
        </MenuTrigger>
        <MenuContent className="dropdown-menu show dropdown-menu-right pin-right shadow py-2">
          {menuItems.map(({ type, href, content }) => (
            <li className={`dropdown-${type}`} key={`${type}-${content}`}>
              <a href={href}>{content}</a>
            </li>
          ))}
        </MenuContent>
      </Menu>
    ))(this.props.userMenu);

    const loggedOutItems = ((items => items.map((item, i, arr) => (
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
    ))))(this.props.loggedOutItems);

    return (
      <header className="site-header-desktop">
        <div className="container-fluid">
          <div className="nav-container position-relative d-flex align-items-center">
            <LinkedLogo
              className="logo mr-2"
              src={this.props.logo}
              alt={this.props.logoAltText}
              href={this.props.logoDestination}
            />
            <div className="d-flex flex-grow-1 flex-column-reverse">
              <ul className="nav main-nav">
                {mainNavItems}
              </ul>
              <div className="nav secondary-menu-container mb-3 mt-3 align-self-end align-items-center">
                {/*
                  <div className="mr-4">
                    <input
                      placeholder="Search"
                      type="search"
                      className="form-control
                      search-input"
                    />
                  </div>
                */}
                {this.props.loggedIn ? userMenuNav : loggedOutItems}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  renderMobileNav() {
    const mainNavItems = ((menuItems) => {
      // Nodes are accepted as a prop
      if (!Array.isArray(menuItems)) return menuItems;

      return menuItems.map((menuItem) => {
        const {
          type,
          href,
          content,
          submenuContent,
        } = menuItem;

        if (type === 'item') {
          return (
            <li key={`${type}-${content}`} className="nav-item">
              <a className="nav-link" href={href}>{content}</a>
            </li>
          );
        }

        return (
          <Menu key={`${type}-${content}`} tag="li" className="nav-item">
            <MenuTrigger tag="a" className="nav-link d-inline-flex align-items-center" href={href}>
              {content}
            </MenuTrigger>
            <MenuContent className="position-static pin-left pin-right py-2">
              {submenuContent}
            </MenuContent>
          </Menu>
        );
      });
    })(this.props.mainMenu);

    const userNavItems = (menuItems => menuItems.map(({ type, href, content }) => (
      <li className="nav-item" key={`${type}-${content}`}>
        <a className="nav-link" href={href}>{content}</a>
      </li>
    )))(this.props.userMenu);

    const loggedOutItems = (items => items.map(({ type, href, content }, i, arr) => (
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
    )))(this.props.loggedOutItems);


    return (
      <div className="site-header-mobile d-flex justify-content-between align-items-center shadow sticky-top">
        <div className="w-100">
          <Menu className="position-static">
            <MenuTrigger tag="button" className="icon-button">
              <img src={menuIcon} alt="Menu" />
            </MenuTrigger>
            <MenuContent tag="ul" className="nav flex-column pin-left pin-right border-top shadow py-2">
              {mainNavItems}
            </MenuContent>
          </Menu>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <LinkedLogo
            className="logo"
            src={this.props.logo}
            alt={this.props.logoAltText}
            href={this.props.logoDestination}
          />
        </div>
        <div className="w-100 d-flex justify-content-end align-items-center">
          <Menu className="position-static">
            <MenuTrigger tag="button" className="icon-button">
              <Avatar size="1.5rem" src={this.props.avatar} />
            </MenuTrigger>
            <MenuContent tag="ul" className="nav flex-column pin-left pin-right border-top shadow py-2">
              {this.props.loggedIn ? userNavItems : loggedOutItems}
            </MenuContent>
          </Menu>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <ExtraSmall>{this.renderMobileNav()}</ExtraSmall>
        <Small>{this.renderMobileNav()}</Small>
        <Medium>{this.renderDesktopNav()}</Medium>
        <Large>{this.renderDesktopNav()}</Large>
        <ExtraLarge>{this.renderDesktopNav()}</ExtraLarge>
      </div>
    );
  }
}

SiteHeader.propTypes = {
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

SiteHeader.defaultProps = {
  mainMenu: null,
  userMenu: null,
  loggedOutItems: null,
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false,
};

export default SiteHeader;
