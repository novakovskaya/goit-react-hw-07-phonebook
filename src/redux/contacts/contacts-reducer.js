import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {addContact,deleteContact,filterContact} from "./contacts-actions";
import contactsList from "../../contacts.json";

const items = createReducer(contactsList, {
  [addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [...state, payload],

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
