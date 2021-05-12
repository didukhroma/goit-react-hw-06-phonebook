import { createReducer } from '@reduxjs/toolkit';
import actions from './filter-actions';

const INITIAL_STATE = '';

const filterReducer = createReducer(INITIAL_STATE, {
  [actions.changeFilter]: (_, { payload }) => payload,
});
export default filterReducer;
