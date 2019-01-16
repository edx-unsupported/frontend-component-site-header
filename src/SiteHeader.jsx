import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Hyperlink,
  SearchField,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
} from '@edx/paragon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faChevronDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Menu, { MENU_TYPES } from './Menu';
import Avatar from './Avatar';

library.add(faBars, faSearch, faChevronDown, faUserCircle);


class SiteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelSubmenuOpen: false,
    };
  }

  renderMobileNav() {
    return (
      <header className="site-header mobile">
        <div className="container-fluid">
          <div className="row flex-nowrap">

            <div className="site-header-col d-flex align-items-center">
              <Menu
                className="site-header-menu"
                {...MENU_TYPES.OverlayPanel}
                triggerClassName="btn"
                triggerContent={<FontAwesomeIcon icon="bars" />}
              >
                {this.renderSlidingPanelMenu()}
              </Menu>
            </div>

            <div className="brand site-header-col d-flex justify-content-center align-items-center">
              {this.renderLogo()}
            </div>

            <div className="secondary-menu-container site-header-col d-flex justify-content-end align-items-center">
              <Menu
                className="site-header-menu"
                triggerClassName="btn"
                triggerContent={<FontAwesomeIcon icon="search" />}
              >
                <SearchField />
              </Menu>

              {this.props.accountMenu ? (
                <Menu
                  className="site-header-menu"
                  triggerClassName="btn"
                  triggerContent={<Avatar url={this.props.accountMenu.avatar} />}
                >
                  {this.props.accountMenu.menuContent}
                </Menu>
              ) : null}
            </div>

          </div>
        </div>
      </header>
    );
  }

  renderSlidingPanelMenu() {
    return (
      <div
        className={classNames('slide-panel-menu', {
          'panel-submenu-open': this.state.panelSubmenuOpen,
        })}
      >
        <nav className="nav flex-column menus-container">
          {
            this.props.menuItems.map((item) => {
              if (item.submenu) {
                return (
                  <Menu
                    key={`menu-${item.name}`}
                    className="sliding-menu"
                    triggerClassName="nav-link"
                    triggerContent={<span>{item.content} ›</span>}
                    triggerDestination={item.destination}
                    onOpen={() => { this.setState({ panelSubmenuOpen: true }); }}
                    onClose={() => { this.setState({ panelSubmenuOpen: false }); }}
                    closeButton={<button className="nav-link" type="button">‹ <span>Close</span></button>}
                    transitionTimeout={400}
                    closeOnDocumentClick={false}
                  >
                    {item.submenu}
                  </Menu>
                );
              }

              return (
                <Hyperlink className="nav-link" key={`link-${item.name}`} {...item} />
              );
            }, this)
          }
        </nav>
      </div>
    );
  }

  renderDesktopNav() {
    return (
      <header className="site-header desktop">
        <div className="container-fluid">
          <div className="nav-container d-flex align-items-end">

            <div className="brand">
              {this.renderLogo()}
            </div>

            <div className="flex-grow-1 d-flex flex-column-reverse">

              <div className="nav primary-menu-container">
                {
                  this.renderNav(this.props.menuItems, {
                    menuClassName: 'primary-menu',
                    triggerClassName: 'nav-link',
                    respondToPointerEvents: true,
                  }, {
                    className: 'nav-link',
                  })
                }
              </div>

              <div className="nav align-self-end secondary-menu-container align-items-start mb-4 mt-3">
                {this.props.accountMenu ? (
                  <Menu
                    className="account-menu"
                    triggerClassName="btn ml-sm-2 btn-light account-menu-trigger"
                    triggerContent={
                      <span className="d-flex align-items-center">
                        <Avatar url={this.props.accountMenu.avatar} />
                        <span className="ml-2 mr-2">{this.props.accountMenu.username}</span>
                        <FontAwesomeIcon icon="chevron-down" />
                      </span>
                    }
                  >
                    {this.props.accountMenu.menuContent}
                  </Menu>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  renderNav(navItems, menuOptions, linkOptions) {
    return navItems.map((item) => {
      if (item.submenu) {
        return (
          <Menu
            key={`menu-${item.name}`}
            className={menuOptions.className}
            triggerClassName={classNames(menuOptions.triggerClassName, item.triggerClassName)}
            triggerContent={<span>{item.content} <FontAwesomeIcon icon="chevron-down" /></span>}
            triggerDestination={item.destination}
            respondToPointerEvents={menuOptions.respondToPointerEvents}
          >
            {item.submenu}
          </Menu>
        );
      }

      return (
        <Hyperlink
          key={`link-${item.name}`}
          className={classNames(linkOptions.className, item.triggerClassName)}
          {...item}
        />
      );
    }, this);
  }

  renderLogo() {
    return (
      <Hyperlink
        className="header-logo"
        content={<img src={this.props.logo} alt={this.props.logoAltText} />}
        destination={this.props.logoDestination}
      />
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
  menuItems: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  accountMenu: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
};

SiteHeader.defaultProps = {
  menuItems: null,
  accountMenu: null,
  logo: null,
  logoAltText: null,
  logoDestination: null,
};

export default SiteHeader;
