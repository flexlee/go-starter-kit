import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { blue500 } from 'material-ui/styles/colors';
import AppCanvas from 'material-ui/internal/AppCanvas';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    textColor: blue500,
  },
  appBar: {
    height: 50,
  },
  userAgent: 'all',
});

export default class AppLayout extends Component {

  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
