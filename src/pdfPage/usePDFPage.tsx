import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export interface Row {
  type: string;
  value: string;
}

export interface Snapshot {
  id?: string;
  timestamp: number;
  rows: Row[];
}

export const usePDFPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const rows = params.get("rows");
  const id = params.get("id");
  const { snapshotId } = useParams<{ snapshotId: string }>();

  const [snapshot, setSnapshot] = useState<Snapshot>();

  console.log(id, snapshotId);

  useEffect(() => {
    if (id) {
      fetchSnapshot(id);
    }
  }, [id]);

  useEffect(() => {
    if (snapshotId) {
      fetchSnapshot(snapshotId);
    }
  }, [snapshotId]);

  const fetchSnapshot = async (id: string) => {
    const docRef = doc(db, "snapshots", id);
    setSnapshot((await getDoc(docRef)).data() as Snapshot);
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

  return { snapshot };
};
