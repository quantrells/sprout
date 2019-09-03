const initialState = {
    step: 1
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'NEXT_STEP':
   return {
    step: state.step + 1
   }
  default:
   return state
 }
}
