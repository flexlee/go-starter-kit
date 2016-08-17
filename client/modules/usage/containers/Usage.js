import { connect } from 'react-redux';
import Usage from '../components/Usage.js';
import actions from '../actions';

const mapStateToProps = (store) => ({
  config: store.showConfig,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(actions.cleanConfig());
  },
  loadConfig: () => {
    fetch('/api/v1/conf').then((r) => {
      return r.json();
    }).then((conf) => {
      dispatch(actions.showConfig(conf));
    });
  },
});

const UsageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Usage);

export default UsageContainer;
