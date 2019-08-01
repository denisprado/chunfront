export const Types = {
  GET_REQUEST: "contactForm/GET_REQUEST",
  GET_SUCCESS: "contactForm/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function contactForm(state = INITIAL_STATE, action) {
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
  getContactFormRequest: (data) => ({
    type: Types.GET_REQUEST,
    payload: { data }
  }),
  getContactFormSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
