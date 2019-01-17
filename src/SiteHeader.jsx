import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Hyperlink,
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
import Avatar, { AvatarButton } from './Avatar';
import { Row, Col, Container } from './Layout';

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
        <Container fluid>
          <Row className="flex-nowrap">
            <Col className="site-header-col d-flex align-items-center position-static">
              {this.props.menuItems ? (
                <Menu
                  className="site-header-menu"
                  {...MENU_TYPES.OverlayPanel}
                  triggerClassName="btn"
                  triggerContent={<FontAwesomeIcon icon="bars" />}
                >
                  {this.renderSlidingPanelMenu()}
                </Menu>
              ) : null}
            </Col>
            <Col className="site-header-col d-flex justify-content-center align-items-center flex-shrink-0">
              <Hyperlink
                className="header-logo"
                content={<img src={this.props.logo} alt={this.props.logoAltText} />}
                destination={this.props.logoDestination}
              />
            </Col>
            <Col className="site-header-col d-flex justify-content-end align-items-center position-static">
              {this.props.accountMenu ? (
                <Menu
                  className="site-header-menu"
                  trigger={<AvatarButton className="btn btn-outline-primary" url={this.props.accountMenu.avatar}>username</AvatarButton>}
                >
                  {this.props.accountMenu.menuContent}
                </Menu>
              ) : null}
            </Col>
          </Row>
        </Container>
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
        <div className="nav menus-container flex-column">
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
        </div>
      </div>
    );
  }

  renderDesktopNav() {
    return (
      <header className="site-header desktop">
        <Container fluid>
          <div className="nav-container d-flex align-items-center">
            <div className="brand">
              {this.renderLogo()}
            </div>
            <div className="d-flex flex-grow-1 flex-column-reverse">
              <div className="nav primary-menu-container">
                {
                  this.props.menuItems ? this.renderNav(this.props.menuItems, {
                    menuClassName: 'primary-menu',
                    triggerClassName: 'nav-link',
                    respondToPointerEvents: true,
                  }, {
                    className: 'nav-link',
                  }) : null
                }
              </div>
              <div className="nav secondary-menu-container mb-3 mt-3 align-self-end align-items-start">
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
        </Container>
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
  accountMenu: PropTypes.shape({
    menuContent: PropTypes.node,
    avatar: PropTypes.string,
    username: PropTypes.string,
  }),
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
