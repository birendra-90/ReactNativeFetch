/* @flow */

import {PEOPLE_LIST_REQUEST, PEOPLE_LIST_SUCCESS, PEOPLE_LIST_FAILED} from '../config/redux-events';

export function getPeopleList() {
  return (dispatch) => {
    dispatch(peopleListRequest());
    fetch('https://randomuser.me/api/?results=50', {method: 'GET'}).then((response) => response.json()).then((responseJson) => dispatch(peopleListSuccess(responseJson))).catch(error => dispatch(peopleListFailed(error)));
  }
}

function peopleListRequest() {
  return {type: PEOPLE_LIST_REQUEST};
}

function peopleListSuccess(response) {
  return {type: PEOPLE_LIST_SUCCESS, data: response.results};
}

function peopleListFailed(error) {
  console.log('error', 'Failed to fetch data');
  return {type: PEOPLE_LIST_FAILED};
}
