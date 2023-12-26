import React, {Dispatch} from 'react';
import {createContext, useReducer} from 'react';
import {
  ActionBarState,
  ActionBarActions,
  ActionBarActionType,
  initialActionBarState,
  SetActionBarPoint,
} from './types';
export function actionBarReducer(
  store: ActionBarState,
  action: ActionBarActions,
): ActionBarState {
  switch (action.type) {
    case ActionBarActionType.SetPlayerPoint:
      return {...store, snapPoint: action.snapPoint};
    default:
      return store;
  }
}
export const ActionBarContext = createContext<{
  store: ActionBarState;
  dispatch: Dispatch<ActionBarActions>;
}>({
  store: initialActionBarState,
  dispatch: () => undefined,
});
const ActionBarProvider = (props: any) => {
  const [store, dispatch] = useReducer(actionBarReducer, initialActionBarState);
  return (
    <ActionBarContext.Provider value={{store, dispatch}}>
      {props.children}
    </ActionBarContext.Provider>
  );
};

export const setActionBarPoint = (index: 1 | 0): SetActionBarPoint => {
  return {
    type: ActionBarActionType.SetPlayerPoint,
    snapPoint: index,
  };
};
export default ActionBarProvider;
