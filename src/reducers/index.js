import { combineReducers } from "redux";
import undoable from "redux-undo";
import notes from "./notes";

export default combineReducers({
  notes: undoable(notes)
});
