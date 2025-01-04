"use client";
import { Button, Box, Typography } from "@mui/material";
import Papa from "papaparse";
import { useCsvData } from "@/context/CsvDataContext";

const CsvUploader = () => {
  const { setCsvData } = useCsvData();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => setCsvData(results.data),
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h6">Upload a CSV File</Typography>
      <Button variant="contained" component="label" sx={{ mt: 2 }}>
        Upload CSV
        <input type="file" hidden accept=".csv" onChange={handleFileUpload} />
      </Button>
    </Box>
  );
};

export default CsvUploader;
