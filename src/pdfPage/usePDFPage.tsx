import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export interface Row {
  type: string;
  value: string;
}

export const usePDFPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const rows = params.get("rows");
  // const { id } = useParams();
  // const [snapshot, setSnapshot] = useState<Snapshot>();

  useEffect(() => {
    fetchSnapshot("b1CuqOWKEYir19gGOcrP");
  }, []);

  const fetchSnapshot = async (id: string) => {
    const docRef = doc(db, "snapshots", id);

    console.log((await getDoc(docRef)).data());

    // setSnapshot((await getDoc(docRef)).data() as Snapshot);
  };

  // const xAxisData = params.get("xAxisData")?.split(",") || [];
  // const data = params.get("data")?.split(",") || [];
  // return {
  //   rows: [
  //     {
  //       type: "barchart",
  //       value: JSON.stringify({
  //         height: 600,
  //         xAxis: [{ data: xAxisData }],
  //         series: [{ data, label: "Series 1" }]
  //       })
  //     }
  //   ]

  return { rows: rows ? (JSON.parse(rows) as Row[]) : [] };
};
