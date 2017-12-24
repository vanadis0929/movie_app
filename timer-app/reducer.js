//리덕스 불러오는 순서

//* import

//* actions 변수선언

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//* action creators

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

//* reducer
const TIMER_DURATION = 1500;

//   리덕스 스토어에 올라갈 내용 (기본state) (카운트여부, 카운팅시간, 카운팅하고있는 시간)
const initialState = {
  isPlaying: false,
  counterDuration: 1500,
  elapsedTime: TIMER_DURATION
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}

//* reducer functions
function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyRestartTimer(state, action) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state, action) {
  const { elapsedTime } = state;
  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } 
  else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

//* export action creators
const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreators };

//* export reducer
export default reducer;
