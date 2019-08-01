export const Types = {
  GET_REQUEST: "albumFiles/GET_REQUEST",
  GET_SUCCESS: "albumFiles/GET_SUCCESS",
  GET_NEXT: "albumFiles/GET_NEXT",
  GET_PREV: "albumFiles/GET_PREV"
};

const INITIAL_STATE = {
  data: [],
  page: 1,
  loading: false
};

export default function albumFiles(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, page: action.payload.page };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_NEXT:
      return { ...state, page: state.page + 1 };
    case Types.GET_PREV:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
}

export const Creators = {
  getAlbumFilesRequest: (id, page) => ({
    type: Types.GET_REQUEST,
    payload: { id, page }
  }),
  getAlbumFilesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  getNextFile: () => ({
    type: Types.GET_NEXT
  }),
  getPrevFile: () => ({
    type: Types.GET_PREV
  })
};
