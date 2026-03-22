const initialState = '';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};