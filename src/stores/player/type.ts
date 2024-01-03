export interface PlayerState {
  snapPoint: number /* tắt = -1  mở = 0  thu nhỏ = 1  */;
  paused: boolean;
}

export const initialPlayerState: PlayerState = {
  snapPoint: -1,
  paused: true,
};
export enum ActionType {
  SetPlayerStatus,
  SetPlayerPoint,
}

export interface SetPlayerStatus {
  type: ActionType.SetPlayerStatus;
  paused: boolean;
}
export interface SetPlayerPoint {
  type: ActionType.SetPlayerPoint;
  snapPoint: number;
}

export type PlayerActions = SetPlayerStatus | SetPlayerPoint;
