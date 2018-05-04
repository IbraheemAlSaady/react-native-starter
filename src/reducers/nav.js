import RootNav from 'routes';

const initialState =
    RootNav.router.getStateForAction(RootNav.router.getActionForPathAndParams('Splash'));

export default function navReducer(state = initialState, action) {
  const nextState = RootNav.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
