import { connect } from 'react-redux';
import React, { Component } from 'react';
import AppCanvas from 'material-ui/internal/AppCanvas';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


export default class AppLayout extends Component {

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
