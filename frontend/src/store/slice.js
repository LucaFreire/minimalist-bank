import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    balance: 0,
    document: '',
    name: '',
    email: ''
  },
  reducers: {
    setUserData: (state, action) => {
      const { balance, document, name, email } = action.payload;
      state.balance = balance !== undefined ? balance : state.balance;
      state.document = document !== undefined ? document : state.document;
      state.name = name !== undefined ? name : state.name;
      state.email = email !== undefined ? email : state.email;
    },
    verifySession: () => {
      let token = sessionStorage.getItem('token')
      if(token == null)
        return false;
      return true;
    }
  }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
