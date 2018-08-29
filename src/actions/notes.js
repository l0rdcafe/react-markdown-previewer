export const SAVE_NOTE = "SAVE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const CHANGE_NOTE = "CHANGE_NOTE";
export const NEW_NOTE = "NEW_NOTE";
export const PICK_NOTE = "PICK_NOTE";
export const CLOSE_NOTE = "CLOSE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const UNDO_NOTE = "UNDO_NOTE";

export function saveNote(note, i) {
  return {
    type: SAVE_NOTE,
    note,
    i
  };
}

export function deleteNote(i) {
  return {
    type: DELETE_NOTE,
    i
  };
}

export function changeNote(value) {
  return {
    type: CHANGE_NOTE,
    value
  };
}

export function newNote() {
  return {
    type: NEW_NOTE
  };
}

export function pickNote(value, i) {
  return {
    type: PICK_NOTE,
    value,
    i
  };
}

export function closeNote(value) {
  return {
    type: CLOSE_NOTE,
    value
  };
}

export function editNote(value, i) {
  return {
    type: EDIT_NOTE,
    value,
    i
  };
}

export function undoNote(init) {
  return {
    type: UNDO_NOTE,
    init
  };
}
