// actions/authActions.ts
interface userData{}
export const login = (userData:userData) => ({
    type: 'LOGIN',
    payload: userData,
  });

  