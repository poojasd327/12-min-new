import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const stats = [
  { label: "Founded", value: "2018" },
  { label: "NLU Graduates", value: "50+" },
  { label: "Success Rate", value: "85%" },
  { label: "Students", value: "5000+" },
];

export default function StatisticsSection() {
  return (
    <Box sx={{ mt: 8, pb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index} textAlign="center">
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0c9ffa" }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
