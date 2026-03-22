import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: null,
    type: "info", // can be 'error', 'success', 'info'
  },
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || "info";
    },
    hideNotification: (state) => {
      state.message = null;
      state.type = "info";
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export const selectNotification = (state) => state.notification;
export default notificationSlice.reducer;