export const SAVE_NOTE = "SAVE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const NEW_NOTE = "NEW_NOTE";

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

export function addNote(note) {
  return {
    type: NEW_NOTE,
    note
  };
}
