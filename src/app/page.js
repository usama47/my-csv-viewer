"use client";
import { useState } from "react";
import { Container } from "@mui/material";
import CsvUploader from "@/components/CsvUploader";
import CsvList from "@/components/CsvList";

export default function Home() {
  const [csvData, setCsvData] = useState([]);

  return (
    <Container>
      <CsvUploader onFileUpload={setCsvData} />
      {csvData.length > 0 && <CsvList data={csvData} />}
    </Container>
  );
}
