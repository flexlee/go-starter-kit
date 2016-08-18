import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { usage, todo } from './styles';
import RaisedButton from 'material-ui/RadioButton';
// import actions from '../actions';


export default class Usage extends Component {
  // /*eslint-disable */
  // static onEnter({store, nextState, replaceState, callback}) {
  //   fetch('/api/v1/conf').then((r) => {
  //     return r.json();
  //   }).then((conf) => {
  //     store.dispatch(actions.showConfig(conf));
  //     console.warn('Faked connection latency! Please, take a look ---> `server/api.go:22`');
  //     callback();
  //   });
  // }
  // /*eslint-enable */

  static propTypes = {
    cleanConfigClick: PropTypes.func,
    loadConfigClick: PropTypes.func,
    config: PropTypes.object,
  };

  render() {
    const style = {
      margin: 12,
    };

    // console.log(this.props);
    return (
      <div className={usage}>
        <Helmet title="Usage" />
        <h2>Usage:</h2>
          <RaisedButton
            type="button"
            label="Load Config"
            style={style}
            onClick={this.props.loadConfigClick}
            primary
          />
          <RaisedButton
            type="button"
            label="Clean Config"
            style={style}
            onClick={this.props.cleanConfigClick}
            secondary
          />
          <pre className={todo}>
            config:
            {JSON.stringify(this.props.config, null, 2)}
          </pre>
        <br />
        go <IndexLink to="/">home</IndexLink>
      </div>
    );
  }

}

// export default connect(store => ({ config: store.showConfig }))(Usage);
