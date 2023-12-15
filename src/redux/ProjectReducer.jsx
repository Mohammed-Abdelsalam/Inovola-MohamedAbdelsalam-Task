import { createSlice } from "@reduxjs/toolkit";

import gridData from "../data/GridData";

export const projectSlice = createSlice({
  name: "projects",
  initialState: gridData,
  reducers: {
    AddProject: (state, action) => {
      state.push(action.payload);
    },
    UpdateProject: (state, action) => {
      return state.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
    },
    DeleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

export const { AddProject, DeleteProject, UpdateProject } =
  projectSlice.actions;

export default projectSlice.reducer;
