"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Stack,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const HERO_ORANGE = "#F2AE41";
const LEAD_CAPTURE_API_URL = "https://crm-leads-service.pointofconnect.com/api/leads/webapi/07bf1e31-6348-4c7a-bfc4-827e22176716";

export default function LeadCaptureFormDialog({ open, onClose, formType }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setName("");
      setPhone("");
      setStudentClass("");
      setEmail("");
      setIsSubmitting(false);
      setSubmitError("");
    }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && phone && studentClass && email) {
      try {
        setIsSubmitting(true);
        setSubmitError("");
        const response = await fetch(LEAD_CAPTURE_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "name": name,
            "phone-number": phone,
            "current-class-": studentClass,
            "email-address": email,
            "source": "CLAT PG"
          }),
        });

        if (!response.ok) {
          throw new Error(`Lead API failed with status ${response.status}`);
        }

        setSubmitted(true);
      } catch (error) {
        console.error("Failed to submit lead form:", error);
        setSubmitError(
          "Something went wrong while submitting. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      disableScrollLock={false}
      aria-labelledby="lead-form-title"
      slotProps={{
        backdrop: {
          sx: {
            bgcolor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
          },
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: { xs: "24px", sm: "28px" },
          overflow: "visible",
          boxShadow: "0 32px 64px rgba(0,0,0,0.25)",
          position: "relative",
          maxHeight: "90vh",
          margin: { xs: "16px", sm: "32px" },
          width: { xs: "calc(100% - 32px)", sm: "500px" },
        },
      }}
      sx={{
        zIndex: 1300,
        "& .MuiDialog-container": {
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <DialogContent
        sx={{
          px: { xs: 3, sm: 4 },
          pb: 4,
          pt: 1,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {submitted ? (
          <Stack
            spacing={3}
            sx={{ py: 4, textAlign: "center", alignItems: "center" }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "#4de71f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <DoneAllOutlinedIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Box>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: 24,
                color: "#0A0915",
              }}
            >
              Thank You! 🎉
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: 15,
                color: "#475569",
                lineHeight: 1.6,
              }}
            >
              Your registration is confirmed.
            </Typography>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                alignSelf: "center",
                mt: 2,
                bgcolor: HERO_ORANGE,
                color: "#fff",
                fontFamily: "inherit",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "40px",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "#e09d2e",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Close
            </Button>
          </Stack>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <DialogTitle
              id="lead-form-title"
              sx={{
                position: "relative",
                px: 0,
                pt: 3.5,
                pb: 1.5,
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: 1.3,
                color: "#0A0915",
                letterSpacing: "-0.02em",
                textAlign: "center",
                whiteSpace: { xs: "normal", sm: "nowrap" },
              }}
            >
              Enroll Now for CLAT PG 2027 Mock Test

              <IconButton
                onClick={onClose}
                aria-label="Close form"
                sx={{
                  position: "absolute",
                  right: { xs: -10, sm: -6 },
                  top: 18,
                  color: "#000",
                  bgcolor: "#f1f5f9",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: HERO_ORANGE,
                    color: "#fff",
                    transform: "rotate(90deg)",
                  },
                  width: 36,
                  height: 36,
                }}
              >
                <CloseIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </DialogTitle>

            <TextField
              required
              label="Full name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              fullWidth
              placeholder="e.g., Rahul Sharma"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#ffffff",
                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`,
                  },
                },
              }}
            />

            <TextField
              required
              type="tel"
              label="Mobile number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              fullWidth
              placeholder="10-digit mobile number"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#ffffff",
                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`,
                  },
                },
              }}
            />

            <FormControl
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#ffffff",
                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`,
                  },
                },
              }}
            >
              <InputLabel sx={{ fontFamily: "inherit" }}>
                Current Academic Year
              </InputLabel>
              <Select
                value={studentClass}
                label="Current Academic Year"
                onChange={(e) => setStudentClass(e.target.value)}
                MenuProps={{
                  disableScrollLock: true,
                  PaperProps: {
                    sx: {
                      zIndex: 1400,
                      borderRadius: "12px",
                      marginTop: "4px",
                      maxHeight: "300px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    },
                  },
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                }}
              >
                <MenuItem value="Final Year Law Student">Final Year Law Student</MenuItem>
                <MenuItem value="Law Graduate">Law Graduate</MenuItem>
                <MenuItem value="Working Professional">Working Professional</MenuItem>
              </Select>
            </FormControl>

            <TextField
              required
              type="email"
              label="Email address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              fullWidth
              placeholder="e.g., rahul@example.com"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#ffffff",
                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`,
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              disableElevation
              id="pop_up_submit"
              disabled={isSubmitting}
              sx={{
                mt: 1,
                bgcolor: "#0b0b0b",
                color: "#ffffff",
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: 16,
                width: "80%",
                textTransform: "none",
                mx: "auto",
                borderRadius: "40px",
                py: 1.5,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: HERO_ORANGE,
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(224, 157, 46, 0.25)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
                "&.Mui-disabled": {
                  bgcolor: "#e2e8f0",
                  color: "#94a3b8",
                },
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit →"}
            </Button>
            {submitError ? (
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: 13,
                  color: "#b91c1c",
                  textAlign: "center",
                }}
              >
                {submitError}
              </Typography>
            ) : null}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}