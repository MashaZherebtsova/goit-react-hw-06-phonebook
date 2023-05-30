import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer} from 'redux-persist';

const state = {
  contacts: [],
  filter: '',
};

export const stateSlice = createSlice({
  name: 'state',
  initialState: state,
  reducers: {
    addNameContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteNameContact(state, action) {
      state.contacts = state.contacts.filter(
        name => name.id !== action.payload
      );
    },
    changeFilterContact(state, action) {
      state.filter = action.payload;
    },
  },
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
};
export const stateReducer = persistReducer(persistConfig, stateSlice.reducer);
export const { addNameContact, deleteNameContact, changeFilterContact } = stateSlice.actions;