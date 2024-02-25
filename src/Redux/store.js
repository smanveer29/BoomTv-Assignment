import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import gameReducer from './reducers/gameReducer';
const combinedReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'reset') {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
