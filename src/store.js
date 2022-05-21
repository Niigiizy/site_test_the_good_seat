import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/FinalReducer";

export default configureStore({
  reducer: rootReducer
})