import { configureStore } from "@reduxjs/toolkit";

import ProjectReducer from "./ProjectReducer";

export const store = configureStore({
  reducer: {
    Projects: ProjectReducer,
  },
});
