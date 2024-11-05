import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { quizApiSlice } from "./serverState/quizApi";
import { announcementApiSlice } from "./serverState/announcementApi";
import tipsReducer from "./clientState/tipsSlice";
const rootReducer = combineReducers({
  tips: tipsReducer,
  [quizApiSlice.reducerPath]: quizApiSlice.reducer,
  [announcementApiSlice.reducerPath]: announcementApiSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(quizApiSlice.middleware)
      .concat(announcementApiSlice.middleware),
});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
