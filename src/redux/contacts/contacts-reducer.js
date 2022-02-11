import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import contactsList from "../../contacts.json";

const items = createReducer(contactsList, {
  [actions.addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [...state, payload],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
