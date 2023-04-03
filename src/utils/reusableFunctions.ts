export function checkIfIsLiked(name: string, array: string[]) {
  if (array.includes(name)) {
    return true;
  } else {
    return false;
  }
}

interface Variants {
  initial: { transform: string };
  animate: { transform: string };
  exit: { transform: string };
  transition: { duration: number };
}

export const slideInOut: Variants = {
  initial: { transform: "translateX(-100%)" },
  animate: { transform: "translateX(0)" },
  exit: { transform: "translateX(100%)" },
  transition: { duration: 0.3 },
};

// interface Variants {
//   initial: { "transform-origin": string; transform: string };
//   animate: { transform: string };
//   exit: { "transform-origin": string; transform: string };
//   transition: { duration: number };
// }

// export const scaleInOut: Variants = {
//   initial: { "transform-origin": "left", transform: "scaleX(0)" },
//   animate: { transform: "scaleX(1)" },
//   exit: { "transform-origin": "right", transform: "scaleX(0)" },
//   transition: { duration: 0.3 },
// };
