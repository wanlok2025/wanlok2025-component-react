import { useLocation } from "react-router-dom";

export interface Row {
  type: string;
  value: string;
}

export const usePDFPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const rows = params.get("rows");
  // const height = params.get("height");
  const xAxisData = params.get("xAxisData")?.split(",") || [];
  const data = params.get("data")?.split(",") || [];
  return {
    rows: [
      {
        type: "barchart",
        value: JSON.stringify({
          height: 600,
          xAxis: [{ data: xAxisData }],
          series: [{ data, label: "Series 1" }]
        })
      }
    ]
  };
};
