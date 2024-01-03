import React, {Dispatch} from 'react';
import {createContext, useReducer} from 'react';
import type {PlayerActions} from './type';
import {
  ActionType,
  initialPlayerState,
  PlayerState,
  SetPlayerPoint,
  SetPlayerStatus,
} from './type';
export function playerReducer(
  store: PlayerState,
  action: PlayerActions,
): PlayerState {
  switch (action.type) {
    case ActionType.SetPlayerPoint:
      return {...store, snapPoint: action.snapPoint};
    case ActionType.SetPlayerStatus:
      return {...store, paused: action.paused};
    default:
      return store;
  }
}
export const PlayerContext = createContext<{
  store: PlayerState;
  dispatch: Dispatch<PlayerActions>;
}>({
  store: initialPlayerState,
  dispatch: () => undefined,
});
const PlayerProvider = (props: any) => {
  const [store, dispatch] = useReducer(playerReducer, initialPlayerState);
  return (
    <PlayerContext.Provider value={{store, dispatch}}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export const setPlayerPoint = (index: number): SetPlayerPoint => {
  return {
    type: ActionType.SetPlayerPoint,
    snapPoint: index,
  };
};
export const setPlayerPaused = (paused: boolean): SetPlayerStatus => {
  return {
    type: ActionType.SetPlayerStatus,
    paused,
  };
};
export default PlayerProvider;
