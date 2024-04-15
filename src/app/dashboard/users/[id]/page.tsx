"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  InputLabel,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";

type InitialValues = {
  username: string;
  email: string;
  password: string;
  phone: string;
  admin: boolean;
  active: boolean;
  address: string;
};

const UserDetail = () => {
  const userSchema = Yup.object().shape({
    username: Yup.string().required("Username cannot be empty"),
    email: Yup.string().required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
    phone: Yup.string().required("Phone cannot be empty"),
    address: Yup.string(),
  });

  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const handleChangeIsAdmin = (event: SelectChangeEvent) => {
    const newValueAdmin = event.target.value === "true";
    setIsAdmin(newValueAdmin);
  };

  const handleChangeIsActive = (event: SelectChangeEvent) => {
    const newValueActive = event.target.value === "true";
    setIsActive(newValueActive);
  };

  const formik = useFormik<InitialValues>({
    initialValues: {
      username: "John Doe",
      email: "johndoe@example.com",
      password: "12345",
      phone: "081222444333",
      admin: false,
      active: false,
      address: "DKI Jakarta, Indonesia",
    },
    validationSchema: userSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      let variables = {
        username: values.username,
        email: values.email,
        password: values.password,
        phone: values.phone,
        admin: isAdmin,
        active: isActive,
        address: values.address,
      };

      console.log("result submit : ", variables);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <Box sx={{ display: "flex", gap: "30px", mt: 2 }}>
      <Box
        sx={{
          backgroundColor: "var(--bgSoft)",
          p: "20px",
          borderRadius: "10px",
          fontWeight: "bold",
          color: "var(--textSoft)",
          height: "max-content",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Image
            src="/noavatar.png"
            alt=""
            width={300}
            height={300}
            style={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />
        </Box>
        <Stack>John Doe</Stack>
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundColor: "var(--bgSoft)",
          p: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Username
                </InputLabel>
                <TextField
                  id="username"
                  type="text"
                  fullWidth
                  placeholder="John Doe"
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("username")}
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Email
                </InputLabel>
                <TextField
                  id="email"
                  placeholder="johndoe@example.com"
                  type="email"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Password
                </InputLabel>
                <TextField
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Phone
                </InputLabel>
                <TextField
                  id="phone"
                  placeholder="081 222 323 xxx"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("phone")}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Address
                </InputLabel>
                <TextField
                  id="address"
                  placeholder="Jakarta"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("address")}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  is Admin?
                </InputLabel>
                <Select
                  fullWidth
                  labelId="admin-label"
                  id="admin-select"
                  value={String(isAdmin)}
                  onChange={handleChangeIsAdmin}
                  sx={{ color: "white", backgroundColor: "#151c2c" }}
                >
                  <MenuItem value={"true"}>Yes</MenuItem>
                  <MenuItem value={"false"}>No</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  is Active?
                </InputLabel>
                <Select
                  fullWidth
                  labelId="active-label"
                  id="active-select"
                  value={String(isActive)}
                  onChange={handleChangeIsActive}
                  sx={{ color: "white", backgroundColor: "#151c2c" }}
                >
                  <MenuItem value={"true"}>Yes</MenuItem>
                  <MenuItem value={"false"}>No</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: "teal",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#26A69A",
                    },
                  }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </Box>
    </Box>
  );
};

export default UserDetail;
