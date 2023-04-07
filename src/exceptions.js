export class MyExceptions extends Error {

}

export const callme = (name) => {
  if (name === "Rara") {
    throw new MyExceptions("Upss her my girlfriend");
  } else {
    return "OK!";
  }
};
