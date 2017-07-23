// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import reedee from './reedee'

const rootReducer = combineReducers({
  counter,
  reedee,
  router,
});

export default rootReducer;
