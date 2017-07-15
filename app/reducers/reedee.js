
export default function reedee(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SUBSCRIPTION_LIST':
      return {
        ...state,
        type: 'FETCH_SUBSCRIPTION_LIST'
      }
    default:
      return state
  }
}
