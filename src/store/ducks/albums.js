export const Types = {
  GET_REQUEST: "albums/GET_REQUEST",
  GET_SUCCESS: "albums/GET_SUCCESS",
  SELECT_ALBUM: "albums/SELECT_ALBUM",
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  selected: null
};

export default function albums(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.SELECT_ALBUM:
      return { ...state, selected: action.payload.id };
    default:
      return state;
  }
}

export const Creators = {
  getAlbumsRequest: () => ({ type: Types.GET_REQUEST }),
  getAlbumsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  selectAlbum: id => ({ type: Types.SELECT_ALBUM, payload: { id } }),
};
