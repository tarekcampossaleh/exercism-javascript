//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) =>
    new Date(startDate.getTime() + GIGASECOND);

const GIGASECOND = 1_000_000_000_000;
