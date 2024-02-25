import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  authUserList: [
    {username: 'admin', password: 'admin1234'},
    {username: 'guest', password: 'guest1234'},
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // set user data from google login
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setAuthUserList: (state, action) => {
      state.authUserList = action.payload;
    },
  },
});

export const {setUserData, setAuthUserList} = userSlice.actions;

export const getUserData = state => state.user.userData;
export const getAuthUsersList = state => state.user.authUserList;

export default userSlice.reducer;
