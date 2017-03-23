import React, {Component, PropTypes} from 'react';

/**
 * The is the standard button of the Commerzbank
 */
class Button extends Component {

  propTypes = {
    /**
     * The label of the button.
     */
    label: PropTypes.string,
    /**
     * The children of the button.
     */
    children: PropTypes.node
  };

  defaultProps = {

  };

  render() {
    return (<input type="button" className="button-primary">{children}</input>);
  }

};
