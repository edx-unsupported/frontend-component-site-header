import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Hyperlink, ExtraSmall, Small, Medium, Large, ExtraLarge } from '@edx/paragon';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo } from './Logo';

// Assets
import menuIcon from './assets/menu.svg';
import userMenuIcon from './assets/avatar.svg';
import caret from './assets/caret.svg';


class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDesktopNav() {
    const chevronDown = (
      <svg width="16px" height="16px" viewBox="0 0 16 16" className="ml-1 mr-n1">
        <path d="M7,4 L7,8 L11,8 L11,10 L5,10 L5,4 L7,4 Z" fill="currentColor" transform="translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) "></path>
      </svg>
    );

    const mainNavItems = ((menuItems) => {
      // Nodes are accepted as a prop
      if (!Array.isArray(menuItems)) return menuItems;

      return menuItems.map(({ type, href, content, submenuContent}) => {
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
              {content} {chevronDown}
            </MenuTrigger>
            <MenuContent className="pin-left pin-right shadow py-2">
              {submenuContent}
            </MenuContent>
          </Menu>
        );
      });
    })(this.props.mainMenu);

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
                {/*<div className="mr-4">
                  <input placeholder="Search" type="search" className="form-control search-input" />
                </div>*/}
                <Menu>
                  <MenuTrigger tag="button" className="btn btn-light d-inline-flex align-items-center py-1 pl-1 pr-3">
                    <Avatar src={this.props.avatar} className="mr-2" /> {this.props.username} {chevronDown}
                  </MenuTrigger>
                  <MenuContent className="dropdown-menu show dropdown-menu-right pin-right shadow py-2">
                    {this.props.userMenu.map(({ type, href, content }, i) => (
                      <li className={`dropdown-${type}`} key={`${type}-${i}-${content}`}>
                        <a href={href}>{content}</a>
                      </li>
                    ))}
                  </MenuContent>
                </Menu>
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

      return menuItems.map(({ type, href, content, submenuContent}) => {
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
              {content} {chevronDown}
            </MenuTrigger>
            <MenuContent className="pin-left pin-right shadow py-2">
              {submenuContent}
            </MenuContent>
          </Menu>
        );
      });
    })(this.props.mainMenu);


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
        <div className="w-100 d-flex justify-content-end">
          <Menu className="position-static">
            <MenuTrigger tag="button" className="icon-button">
              <img style={{ opacity: '0.6' }} src={userMenuIcon} alt="User Menu" />
            </MenuTrigger>
            <MenuContent tag="ul" className="nav flex-column pin-left pin-right border-top shadow py-2">
              {this.props.userMenu.map(({ type, href, content }, i) => (
                <li className="nav-item" key={`${type}-${i}-${content}`}>
                  <a className="nav-link" href={href}>{content}</a>
                </li>
              ))}
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
  userMenu: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['item','menu']),
      href: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
};

SiteHeader.defaultProps = {
  mainMenu: null,
  userMenu: null,
  logo: null,
  logoAltText: null,
  logoDestination: null,
};

export default SiteHeader;
