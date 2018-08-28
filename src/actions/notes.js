export const SAVE_NOTE = "SAVE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

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
