import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PDFPage } from "./pages/pdfPage";

// dummy

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PDFPage />} />
        <Route path="/:snapshotId" element={<PDFPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
