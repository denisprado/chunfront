export const Types = {
  GET_REQUEST: "albums/GET_REQUEST",
  GET_SUCCESS: "albums/GET_SUCCESS",
  CLOSE_ALBUMS: "albumFiles/CLOSE_ALBUMS",
  OPEN_ALBUMS: "albumFiles/OPEN_ALBUMS",
};

const INITIAL_STATE = {
  data: [],
  open: false,
  loading: false
};

export default function albums(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.CLOSE_ALBUMS:
      return {
        ...state, open: false
      }
    case Types.OPEN_ALBUMS:
      return {
        ...state, open: true,
      }
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
  closeAlbumFiles: () => ({
    type: Types.CLOSE_ALBUMS,
  }),
  openAlbumFiles: () => ({
    type: Types.OPEN_ALBUMS,
  })
};
