"use client";
import { useCsvData } from "@/context/CsvDataContext";
import CsvUploader from "@/components/CsvUploader";
import CsvList from "@/components/CsvList";
import { Container } from "@mui/material";

export default function Home() {
  const { csvData } = useCsvData();

  return (
    <Container>
      {csvData.length === 0 ? (
        <CsvUploader />
      ) : (
        <CsvList data={csvData} />
      )}
    </Container>
  );
}
