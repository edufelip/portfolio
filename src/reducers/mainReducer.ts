export type State = {
  pageYOffset: number
}

export const initState: State = {
  pageYOffset: 0,
}

type Actions = { type: 'CHANGE_Y'; payload: number } | { type: string; payload?: unknown }

function mainReducer(state: State = initState, action: Actions): State {
  switch (action.type) {
    case 'CHANGE_Y':
      return {
        ...state,
        pageYOffset: action.payload as number,
      }
    default:
      return state
  }
}

export default mainReducer
