//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {
  const num = number
    .replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, "")
    .replace(/\s+/g, "");

  if (num.length < 10) throw new Error("Incorrect number of digits");
  if (num.length > 11) throw new Error("More than 11 digits");

  if (num.length == 11)
    if (num.charAt(0) != "1") throw new Error("11 digits must start with 1");
    else return num.substring(1);

  return num;
};

// throw new Error('Remove this statement and implement this function');
