export const initState = {
  pageYOffset: 0
}

function mainReducer(state = initState, action){
  switch(action.type) {
      case 'CHANGE_Y':
          return {
              ...state,
              pageYOffset: action.payload
          }
      default:
          return state
  }
}

export default mainReducer