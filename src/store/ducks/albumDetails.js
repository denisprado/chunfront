export const Types = {
  GET_REQUEST: "albumDetails/GET_REQUEST",
  GET_SUCCESS: "albumDetails/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function albumDetails(state = INITIAL_STATE, action) {
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
  getAlbumDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getAlbumDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
