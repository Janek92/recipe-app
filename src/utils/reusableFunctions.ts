export function checkIfIsLiked(name: string, array: string[]) {
  if (array.includes(name)) {
    return true;
  } else {
    return false;
  }
}
