import { usePDFPage } from "./usePDFPage";
import { BarChart } from "@mui/x-charts";

export const PDFPage = () => {
  const { snapshot } = usePDFPage();
  return (
    <>
      <div>
        {snapshot?.rows.map((row, i) => {
          if (row.type === "barchart") {
            return <BarChart skipAnimation key={`pdf-${i}`} {...JSON.parse(row.value)} barLabel="value" />;
          } else {
            return <div key={`pdf-${i}`}>{row.value}</div>;
          }
        })}
      </div>
    </>
  );
};
