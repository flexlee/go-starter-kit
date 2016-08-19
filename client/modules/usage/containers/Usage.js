import { connect } from 'react-redux';
import Usage from '../components/Usage.js';
import actions from '../actions';

const {
  loadConfigClick,
  cleanConfigClick,
  loadRandomClick,
} = actions;


const mapStateToProps = (state) => ({
  config: state.showConfig,
});

const UsageContainer = connect(
  mapStateToProps,
  {
    loadConfigClick,
    cleanConfigClick,
    loadRandomClick,
  },
)(Usage);

export default UsageContainer;
