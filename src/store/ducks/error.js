export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

const INITIAL_STATE = {
  visible: false,
  message: null,
  ok: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message, ok: action.payload.ok };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export const Creators = {
  setError: (message, ok) => ({ type: Types.SET, payload: { message, ok } }),
  hideError: () => ({ type: Types.HIDE }),
};
