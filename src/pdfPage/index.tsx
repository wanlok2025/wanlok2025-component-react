import { usePDFPage } from "./usePDFPage";
import { BarChart } from "@mui/x-charts";
import styles from "./pdfPage.module.css";

export const PDFPage = () => {
  const { snapshot } = usePDFPage();
  return (
    <div className={styles.dummy}>
      {snapshot?.rows.map((row, i) => {
        if (row.type === "barchart") {
          return <BarChart skipAnimation key={`pdf-${i}`} {...JSON.parse(row.value)} barLabel="value" />;
        } else {
          return <div key={`pdf-${i}`}>{row.value}</div>;
        }
      })}
    </div>
  );
};
