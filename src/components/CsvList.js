"use client";
import { useState } from "react";
import { TextField, List, ListItem, ListItemButton, ListItemText, Paper, Box, Typography } from "@mui/material";
import Link from "next/link";

const CsvList = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Find the "Name" dynamically
  const nameKey = Object.keys(data[0]).find((key) => /name/i.test(key)) || "First name";

  // Combine first and last name into a full name
  const getFullName = (person) => `${person["First name"] || ""} ${person["Last name"] || ""}`.trim();

  // Filtered data based on search query
  const filteredData = data.filter((person) => {
    const fullName = getFullName(person).toLowerCase();
    const email = (person.Email || "").toLowerCase();
    return fullName.includes(searchQuery.toLowerCase()) || email.includes(searchQuery.toLowerCase());
  });

  return (
    <Box mt={4}>
      <Typography variant="h5" align="center" gutterBottom>
        Social Media Volunteers
      </Typography>

      {/* Search Input */}
      <TextField
        fullWidth
        variant="outlined"
        label="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Volunteer List */}
      <Paper>
        {filteredData.length > 0 ? (
          <List>
            {filteredData.map((person, index) => {
              const fullName = getFullName(person);
              return (
                <Link
                  key={index}
                  href={`/${encodeURIComponent(fullName)}?details=${encodeURIComponent(JSON.stringify(person))}`}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={fullName}
                        secondary={person.Email || "Click to view details"}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        ) : (
          <Typography align="center" p={2}>No results found</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default CsvList;
