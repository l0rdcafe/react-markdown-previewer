import {
  SAVE_NOTE,
  DELETE_NOTE,
  CHANGE_NOTE,
  NEW_NOTE,
  PICK_NOTE,
  CLOSE_NOTE,
  EDIT_NOTE,
  UNDO_NOTE
} from "../actions/notes";
import placeholder from "../misc";

const defaultState = {
  notes: [placeholder, `# 2nd Markdown _File_`],
  editEnabled: false,
  init: true,
  isSaved: false,
  currFile: placeholder,
  currIdx: 0
};

export default function notes(state = defaultState, action) {
  switch (action.type) {
    case SAVE_NOTE:
      return {
        ...state,
        notes: [...state.notes.slice(0, action.i), action.note, ...state.notes.slice(action.i + 1)],
        isSaved: true,
        init: false
      };
    case DELETE_NOTE:
      return { ...state, notes: [...state.notes.slice(0, action.i), ...state.notes.slice(action.i + 1)], init: false };
    case CHANGE_NOTE:
      return {
        ...state,
        currFile: action.value,
        isSaved: false
      };
    case NEW_NOTE:
      return {
        ...state,
        currFile: "",
        editEnabled: true,
        currIdx: state.notes.length,
        init: false
      };
    case PICK_NOTE:
      return {
        ...state,
        currFile: action.value,
        currIdx: action.i
      };
    case CLOSE_NOTE:
      return {
        ...state,
        editEnabled: false,
        currFile: action.value
      };
    case EDIT_NOTE:
      return {
        ...state,
        currFile: action.value,
        currIdx: action.i,
        editEnabled: true
      };
    case UNDO_NOTE:
      return {
        ...state,
        init: action.init
      };
    default:
      return state;
  }
}
