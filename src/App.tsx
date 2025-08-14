import { HashRouter, Route, Routes } from "react-router-dom";
import { PDFPage } from "./pdfPage";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PDFPage />} />
        <Route path="/:id" element={<PDFPage />} />
      </Routes>
    </HashRouter>
  );
};
