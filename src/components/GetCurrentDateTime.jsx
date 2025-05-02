import dayjs from "dayjs";
import React from "react";

export default function GetCurrentDateTime() {
  const day1 = dayjs();
  const day2 = dayjs(new Date());
  const day3 = dayjs(undefined);
  const day4 = dayjs(null);

  // return cureent data
  console.log("day1:", day1.format()); // 2025-05-02T15:17:34+07:00
  console.log("day2:", day2.format()); // 2025-05-02T15:17:34+07:00
  console.log("day3:", day3.format()); // 2025-05-02T15:17:34+07:00
  // Treat as invalid input
  console.log(day4.$d); // Invalid Date
  return (
    <>
      <p>Approach 1: {day1.format()}</p>
      <p>Approach 2: {day2.format()}</p>
      <p>Approach 3: {day3.format()}</p>
      <p>Approach 4: {day4.format()}</p>
    </>
  );
}
