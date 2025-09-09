export type ChangeYAction = { type: 'CHANGE_Y'; payload: number }

export const ChangeY = (value: number): ChangeYAction => ({
  type: 'CHANGE_Y',
  payload: value,
})
