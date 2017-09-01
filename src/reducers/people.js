/* @flow */

import {PEOPLE_LIST_REQUEST, PEOPLE_LIST_SUCCESS, PEOPLE_LIST_FAILED} from '../config/redux-events';

const initialState = {
  requestingPeopleList: false,
  peopleList: []
};

export default function people(state = initialState, action = {}) {
  console.log('ACTION', action.type);
  switch (action.type) {

    case PEOPLE_LIST_REQUEST:
      return {
        ...state,
        requestingPeopleList: true
      };
    case PEOPLE_LIST_SUCCESS:
      return {
        ...state,
        requestingPeopleList: false,
        peopleList: action.data
      };
    case PEOPLE_LIST_FAILED:
      return {
        ...state,
        requestingPeopleList: false
      }

    default:
      return state;
  }
}
