import { useLocation } from "react-router-dom";

export interface Row {
  type: string;
  value: string;
}

export const usePDFPage = () => {
  const location = useLocation();
  const rows = new URLSearchParams(location.search).get("rows");
  return { rows: rows ? (JSON.parse(rows) as Row[]) : [] };
};
