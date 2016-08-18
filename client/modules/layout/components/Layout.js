import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import AppCanvas from 'material-ui/internal/AppCanvas';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


export default class AppLayout extends Component {

  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme, { userAgent: 'all' })}>
        <AppCanvas>
        <header>
          <AppBar title="My AppBar" />
        </header>
        <div className="container">
          {this.props.children}
        </div>
        </AppCanvas>
      </MuiThemeProvider>
    );
  }
}

export default connect((state) => state)(AppLayout);
