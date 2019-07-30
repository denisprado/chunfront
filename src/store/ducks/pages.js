export const Types = {
  GET_REQUEST: "pages/GET_REQUEST",
  GET_SUCCESS: "pages/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function pages(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPagesRequest: () => ({ type: Types.GET_REQUEST }),
  getPagesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
