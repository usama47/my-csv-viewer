"use client";
import { useCsvData } from "@/context/CsvDataContext";
import { useRouter } from "next/navigation";
import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";

const DynamicDetailPage = ({ name }) => {
  const { csvData } = useCsvData();
  const router = useRouter();

  // Decode the name from the URL
  const decodedName = decodeURIComponent(name);

  if (!csvData) {
    router.push("/");
    return null;
  }

  // Find the person using a case-insensitive comparison
  const person = csvData.find((entry) => {
    const fullName = `${entry["First name"] || ""} ${entry["Last name"] || ""}`.trim();
    return fullName.toLowerCase() === decodedName.toLowerCase();
  });

  if (!person) {
    return <Typography variant="h5" align="center">No details found for {decodedName}!</Typography>;
  }

  const fullName = `${person["First name"]} ${person["Last name"]}`;
  const whatsappLink = person["Whatsapp no:"]
    ? `https://wa.me/${person["Whatsapp no:"].replace(/[^0-9]/g, "")}`
    : null;
  const linkedInLink = person["Linkedin Profile"];
  const portfolioLink = person["Upload Portfolio"];

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 4 }}>
      <Card variant="outlined" sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            {fullName}
          </Typography>

          {/* Contact Information */}
          <Stack spacing={2} my={2}>
            <Box>
              <Typography variant="h6">📧 Email</Typography>
              <Button
                variant="contained"
                color="primary"
                href={`mailto:${person.Email}`}
              >
                Send Email
              </Button>
            </Box>

            {whatsappLink && (
              <Box>
                <Typography variant="h6">📱 WhatsApp</Typography>
                <Button
                  variant="contained"
                  color="success"
                  href={whatsappLink}
                  target="_blank"
                >
                  Chat on WhatsApp
                </Button>
              </Box>
            )}

            {linkedInLink && (
              <Box>
                <Typography variant="h6">🔗 LinkedIn</Typography>
                <Button
                  variant="contained"
                  color="info"
                  href={linkedInLink}
                  target="_blank"
                >
                  View LinkedIn Profile
                </Button>
              </Box>
            )}

            {portfolioLink && (
              <Box>
                <Typography variant="h6">📁 Portfolio</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  href={portfolioLink}
                  target="_blank"
                >
                  View Portfolio
                </Button>
              </Box>
            )}
          </Stack>

          {/* Education and Occupation */}
          <Box my={3}>
            <Typography variant="h5" gutterBottom>🎓 Education</Typography>
            <Typography variant="body1">{person.Education}</Typography>
            <Typography variant="body2" color="textSecondary">
              University: {person["University:"]}
            </Typography>
          </Box>

          <Box my={3}>
            <Typography variant="h5" gutterBottom>💼 Occupation</Typography>
            <Typography variant="body1">
              {person["Current Occupation"] || "Not Provided"}
            </Typography>
            {person["If working, Designation:"] && (
              <Typography variant="body2" color="textSecondary">
                Designation: {person["If working, Designation:"]}
              </Typography>
            )}
          </Box>

          {/* Experience */}
          <Box my={3}>
            <Typography variant="h5" gutterBottom>📝 Experience</Typography>
            <Typography variant="body1">{person["Describe your experience:"]}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DynamicDetailPage;
