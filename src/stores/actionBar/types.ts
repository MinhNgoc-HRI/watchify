export interface ActionBarState {
  snapPoint: 0 | 1 /*  mở = 1  tắt = 0  */;
}

export const initialActionBarState: ActionBarState = {
  snapPoint: 1,
};
export enum ActionBarActionType {
  SetPlayerStatus,
  SetPlayerPoint,
}

export interface SetActionBarPoint {
  type: ActionBarActionType.SetPlayerPoint;
  snapPoint: 1 | 0;
}

export type ActionBarActions = SetActionBarPoint;
