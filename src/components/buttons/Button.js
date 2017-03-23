import React, {Component, PropTypes} from 'react';

class FlatButton extends Component {

  propTypes = {
    /**
     * The label of the buttopn.
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
