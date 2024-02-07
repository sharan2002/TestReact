// reducers/authReducer.ts

const initialState = {
  isAuthenticated: false,
  user: null,
};

interface Action {
  type: string;
  payload?: any; 
}

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    
    default:
      return state;
  }
};

export default authReducer;
