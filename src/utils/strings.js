/**
 * Capitalize the first letter of a string
 * @param {string} str The string to capitalize
 * @returns {string} The capitalized string
 */
export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
}
