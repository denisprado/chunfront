export const Types = {
  GET_REQUEST: "albumFiles/GET_REQUEST",
  GET_SUCCESS: "albumFiles/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function albumFiles(state = INITIAL_STATE, action) {
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
  getAlbumFilesRequest: (id, initialId) => ({
    type: Types.GET_REQUEST,
    payload: { id, initialId },
  }),
  getAlbumFilesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
