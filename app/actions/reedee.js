export function fetchSubcriptionList() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_SUBSCRIPTION_LIST'
    })
  }
}
