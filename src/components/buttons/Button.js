import React, {Component, PropTypes} from 'react';

/**
 * The is the standard button of the Commerzbank
 */
class Button extends Component {

  render() {
    return (
      <input type="button" className="button-primary">{children}</input>
    );
  }

};

Button.propTypes = {
  /**
   * The label of the button.
   */
  label: PropTypes.string,
  /**
   * The children of the button.
   */
  children: PropTypes.node
};

Button.defaultProps = {

};

export default Button;
