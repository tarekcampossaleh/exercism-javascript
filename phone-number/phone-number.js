export const clean = (number) => {
  const num = number.replace(/[&/\\+().*{}-\s]/g, "");

  if (num.length < 10) throw new Error("Incorrect number of digits");
  if (num.length > 11) throw new Error("More than 11 digits");

  if (num.length == 11)
    if (num.charAt(0) != "1") throw new Error("11 digits must start with 1");
    else return hasValidDigits(num.substring(1));

  return hasValidDigits(num);
};

const hasValidDigits = (num) => {
  if (/[A-Za-z]/.test(num)) throw new Error("Letters not permitted");

  if (/[#,$~%.'":?<>]/.test(num)) throw new Error("Punctuations not permitted");

  if (num.charAt(0) == "0") throw new Error("Area code cannot start with zero");
  if (num.charAt(0) == "1") throw new Error("Area code cannot start with one");

  if (num.charAt(3) == "0")
    throw new Error("Exchange code cannot start with zero");
  if (num.charAt(3) == "1")
    throw new Error("Exchange code cannot start with one");

  return num;
};
