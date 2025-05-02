import dayjs from "dayjs";
import React from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/km";

dayjs.extend(customParseFormat);

export default function CustomParseFormat() {
  // const date = "04/01/2025 9:15:45 am";
  const date = "02-28-2222 9:12:19 pm";
  const formats = [
    "DD/MM/YYYY h:mm:ss a",
    "MM-DD-YYYY h:mm:ss a",
    "DD-MM-YYYY",
  ];
  const parsed = dayjs(date, formats, true);
  const result = parsed.format("DD-MM-YYYY h:mm:ss A");
  console.log("result", result);

  return (
    <>
      <p>Input date: {date}</p>
      <p>Formated date: {result}</p>
    </>
  );
}
