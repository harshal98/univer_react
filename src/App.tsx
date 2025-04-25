import { useEffect, useRef } from "react";
import "./index.css";
import {
  createUniver,
  defaultTheme,
  IWorkbookData,
  LocaleType,
  merge,
} from "@univerjs/presets";
import {
  FWorkbook,
  UniverSheetsCorePreset,
} from "@univerjs/presets/preset-sheets-core";
import UniverPresetSheetsCoreEnUS from "@univerjs/presets/preset-sheets-core/locales/en-US";

import "@univerjs/presets/lib/styles/preset-sheets-core.css";
import { UniverSheetsFilterPreset } from "@univerjs/presets/preset-sheets-filter";
import UniverPresetSheetsFilterEnUS from "@univerjs/presets/preset-sheets-filter/locales/en-US";

export default function App(props: {
  data: Partial<IWorkbookData>;
  ref: React.Dispatch<React.SetStateAction<FWorkbook>>;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { univerAPI } = createUniver({
      locale: LocaleType.EN_US,
      locales: {
        [LocaleType.EN_US]: merge({}, UniverPresetSheetsCoreEnUS),
        UniverPresetSheetsFilterEnUS,
      },
      theme: defaultTheme,
      presets: [
        UniverSheetsCorePreset({
          container: containerRef.current as HTMLElement,
        }),
        UniverSheetsFilterPreset(),
      ],
    });
    if (props.data) props.ref(univerAPI.createWorkbook(props.data));

    return () => {
      univerAPI.dispose();
    };
  }, []);

  return <div style={{ width: "100vw", height: "100vh" }} ref={containerRef} />;
}
