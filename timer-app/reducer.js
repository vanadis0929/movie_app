//리덕스 불러오는 순서

//import

//actions 변수선언

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//action creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

//reducer
const TIME_DURATION = 1500;

//   리덕스 스토어에 올라갈 내용 (기본state) (카운트여부, 카운팅시간, 카운팅하고있는 시간)
const initialState = {
  isCounting: false,
  counterDuration: 1500,
  elapsedTime: TIME_DURATION
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
      break;
    case RESTART_TIMER:
      return applyRestartTimer(state);
      break;
    case ADD_SECOND:
      return applyAddSecond(state);
      break;
  }
}

//reducer functions
function applyStartTimer(state) {
  return {
    //기본 state를 유지한 채 덮어씀
    ...state,
    isPlaying: true
  };
}

function applyRestartTimer(state) {
  return {
    //기본 state를 유지한 채 덮어씀
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

//export action creators
const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};

//export reducer
export default reducer;
