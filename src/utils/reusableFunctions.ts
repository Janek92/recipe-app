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
  transition: { duration: 0.17 },
};

// interface Variants {
//   initial: { "transform-origin": string; transform: string };
//   animate: { transform: string };
//   exit: { "transform-origin": string; transform: string };
//   transition: { duration: number };
// }

// export const slideInOut: Variants = {
//   initial: { "transform-origin": "50% 50%", transform: "scale(0)" },
//   animate: { transform: "scale(1)" },
//   exit: { "transform-origin": "50% 50%", transform: "scale(0)" },
//   transition: { duration: 0.2 },
// };
