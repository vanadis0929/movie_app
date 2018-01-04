import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from "./presenter";

//리덕스 스토어에서 state를 받아옴 (기본값)
function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = false;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

//액션을 리듀서로 보냄
function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
