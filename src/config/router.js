/* @flow */

import {StackNavigator} from 'react-navigation';
import Home from '../components/home';

export const MainStack = StackNavigator({
  Home: {
    screen: Home
  }
});

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (state && type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName)
    ? null
    : getStateForAction(action, state);
};

MainStack.router.getStateForAction = navigateOnce(MainStack.router.getStateForAction);
