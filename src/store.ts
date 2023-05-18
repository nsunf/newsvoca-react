import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import translaterReducer from "./features/translaterSlice";

export const store = configureStore({
  reducer: {
    translater: translaterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const uesAppSelector: TypedUseSelectorHook<RootState> = useSelector;