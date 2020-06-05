import { connect } from "react-redux";
import GroupPicker from "./../pages/GroupPicker";

import { setGroup, updateGirls } from "./../actions/actions";
const mapStateToProps = (state, nextProps) => ({
  girls: state.girls,
  currentGroup: state.group
});

const mapDispatchToProps = {
  setGroup,
  updateGirls
};

const GroupPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupPicker);

export default GroupPickerContainer;
