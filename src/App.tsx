import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PDFPage } from "./pdfPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PDFPage />} />
        <Route path="/:snapshotId" element={<PDFPage />} />
      </Routes>
    </BrowserRouter>
  );
};
