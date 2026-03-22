import { configureStore,  combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice";
import notificationReducer from "./notificationSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  notification: notificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
