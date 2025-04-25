import React, { use, useEffect, useRef, useState } from "react";
import App from "./App";
import {
  FWorkbook,
  UniverSheetsCorePreset,
} from "@univerjs/presets/preset-sheets-core";
import { DEFAULT_WORKBOOK_DATA } from "./Data";
import { ICellData, IWorkbookData } from "@univerjs/presets";

export default function Test() {
  const [first, setfirst] = useState(true);
  const [WorkBook, setWorkBook] = useState<FWorkbook>({} as FWorkbook);
  const [WorkBookData, setWorkBookData] = useState<Partial<IWorkbookData>>(
    DEFAULT_WORKBOOK_DATA
  );
  function InsertData() {
    const values = [
      ["Hello", "World!"],
      ["Hello", "Univer!"],
    ];

    const activeWorkbook = WorkBook;
    if (!activeWorkbook) throw new Error("activeWorkbook is not defined");
    const activeSheet = activeWorkbook.getActiveSheet();
    if (!activeSheet) throw new Error("activeSheet is not defined");

    const range = activeSheet.getRange(0, 0, values.length, values[0].length);
    if (!range) throw new Error("range is not defined");

    /**
     * @see https://univer.ai/typedoc/@univerjs/facade/classes/FRange#setValues
     */
    range.setValues(values);
  }
  return (
    <>
      <button
        onClick={() => {
          setfirst((r) => !r);
          setWorkBookData({});
          setfirst((r) => !r);

          //WorkBook.dispose();
          //console.log(WorkBook?.save());
        }}
      >
        Exit Workbook
      </button>
      <button onClick={InsertData}>Insert Data</button>
      {first && <App data={WorkBookData} ref={setWorkBook}></App>}
    </>
  );
}
