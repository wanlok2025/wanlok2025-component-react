import { Route, Routes } from "react-router-dom";
import { PDFPage } from "./pdfPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PDFPage />} />
      <Route path="/:id" element={<PDFPage />} />
    </Routes>
  );
};
