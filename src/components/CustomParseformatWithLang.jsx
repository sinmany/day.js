import dayjs from "dayjs";
import React from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/km";

dayjs.extend(customParseFormat);

export default function CustomParseformatWithLang() {
  // const date = "04/01/2025 9:15:45 am";
  const date = "2018 មករា 15";
  // const date = dayjs("2018 Enero 15", "YYYY MMMM DD", "es");
  const formats = ["DD/MM/YYYY h:mm:ss a", "MM-DD-YYYY", "YYYY MMMM DD"];
  const parsed = dayjs(date, formats, "km", true);
  const result = parsed.format("DD MMMM YYYY h:mm A");

  const test = dayjs("1970 មករា 04", "YYYY MMMM DD", "km", true).isValid(); // false or true
  console.log("test", test);

  return (
    <>
      <p>Input date: {date}</p>
      <p>Formated date: {result}</p>
    </>
  );
}
