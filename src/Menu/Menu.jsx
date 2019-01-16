import React from 'react';
import classNames from 'classnames';
import { Hyperlink } from '@edx/paragon';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.state = {
      expanded: false,
    };

    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }


  // Lifecycle Events

  componentDidMount() {
    // document.addEventListener('click', this.onDocumentClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick, true);

    // Call onClose callback when unmounting and open
    if (this.state.expanded && this.props.onClose) {
      this.props.onClose();
    }
  }


  // Event handlers

  onDocumentClick(e) {
    if (!this.props.closeOnDocumentClick) return;

    if (this.menu && (e.target === this.menu.current || this.menu.current.contains(e.target))) return;

    this.close();
  }

  onTriggerClick(e) {
    if (this.state.expanded && this.props.triggerDestination) {
      return; // do nothing. let the browser follow the link
    }

    e.preventDefault();

    this.toggle();
  }

  onCloseClick() {
    this.getFocusableElements()[0].focus();
    this.close();
  }

  onKeyDown(e) {
    if (!this.state.expanded) return;
    switch (e.key) {
      case 'Escape': {
        e.preventDefault();
        e.stopPropagation();
        this.getFocusableElements()[0].focus();
        this.close();
        break;
      }
      case 'Enter': {
        // Using focusable elements instead of a ref to the trigger
        // because Hyperlink and Button can handle refs as functional compoenents
        if (document.activeElement === this.getFocusableElements()[0]) {
          e.preventDefault();
          this.toggle();
        }
        break;
      }
      case 'Tab': {
        // Trap focus
        const focusableElements = Array.from(this.getFocusableElements());
        const indexOfActiveElement = focusableElements.indexOf(document.activeElement);

        if (indexOfActiveElement === focusableElements.length - 1 && !e.shiftKey) {
          // last. cycle forward
          e.preventDefault();
          focusableElements[0].focus();
        }

        if (indexOfActiveElement === 0 && e.shiftKey) {
          // first. cycle backward
          e.preventDefault();
          focusableElements[focusableElements.length - 1].focus();
        }
        break;
      }
      default:
    }
  }

  onMouseEnter() {
    if (!this.props.respondToPointerEvents) return;

    this.open();
  }

  onMouseLeave() {
    if (!this.props.respondToPointerEvents) return;

    this.close();
  }


  // Internal functions

  getFocusableElements() {
    return this.menu.current.querySelectorAll('button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])');
  }

  open() {
    if (this.props.onOpen) this.props.onOpen();

    this.setState({
      expanded: true,
    });

    document.addEventListener('click', this.onDocumentClick, true);
  }

  close() {
    if (this.props.onClose) this.props.onClose();

    this.setState({
      expanded: false,
    });

    document.addEventListener('click', this.onDocumentClick, true);
  }

  toggle() {
    if (this.state.expanded) {
      this.close();
    } else {
      this.open();
    }
  }

  render() {
    const triggerContent = this.state.expanded && this.props.triggerExpandedContent ?
      this.props.triggerExpandedContent :
      this.props.triggerContent;

    const triggerProps = {
      className: classNames('menu-trigger', {
        expanded: this.state.expanded,
        active: this.state.expanded, // bootstrap class
      }, this.props.triggerClassName),
      onClick: this.onTriggerClick,
    };

    const hyperlinkTriggerProps = {
      content: triggerContent,
      destination: this.props.triggerDestination,
    };

    return (
      <div
        className={classNames('menu', this.props.className, this.props.typeClassName, {
          expanded: this.state.expanded,
        })}
        ref={this.menu}
        onKeyDown={this.onKeyDown}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {
          this.props.triggerDestination ?
            <Hyperlink {...hyperlinkTriggerProps} {...triggerProps} /> :
            <button type="button" {...triggerProps}>{triggerContent}</button>
        }

        <CSSTransition
          in={this.state.expanded}
          timeout={this.props.transitionTimeout}
          classNames={this.props.transitionClassName}
          unmountOnExit
        >
          <div className="menu-content">
            {this.props.closeButton ? React.cloneElement(this.props.closeButton, {
              onClick: this.onCloseClick,
            }) : null}
            <div className="menu-content-container">
              {this.props.children}
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}


Menu.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  closeOnDocumentClick: PropTypes.bool,
  triggerDestination: PropTypes.string,
  respondToPointerEvents: PropTypes.bool,
  triggerContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  triggerExpandedContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  triggerClassName: PropTypes.string,
  className: PropTypes.string,
  transitionTimeout: PropTypes.number,
  transitionClassName: PropTypes.string,
  typeClassName: PropTypes.string,
  closeButton: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};


const MENU_TYPES = {
  default: {
    typeClassName: null,
    transitionTimeout: 0,
    transitionClassName: 'menu-content',
  },
  OverlayPanel: {
    typeClassName: 'overlay-panel-menu',
    transitionTimeout: 400,
    transitionClassName: 'overlay-panel',
    closeButton: <button className="overlay-close"><span>✕</span></button>,
  },
};


Menu.defaultProps = {
  className: null,
  closeButton: null,
  triggerDestination: null,
  respondToPointerEvents: false,
  closeOnDocumentClick: true,
  ...MENU_TYPES.default,
};


export default Menu;
export { MENU_TYPES };
