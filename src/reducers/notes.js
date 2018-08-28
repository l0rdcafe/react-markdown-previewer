import { SAVE_NOTE, DELETE_NOTE } from "../actions/notes";
import placeholder from "../misc";

const defaultState = [placeholder, `# 2nd Markdown _File_`];

export default function notes(state = defaultState, action) {
  switch (action.type) {
    case SAVE_NOTE:
      return [...state.slice(0, action.i), action.note, ...state.slice(action.i + 1)];
    case DELETE_NOTE:
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}
