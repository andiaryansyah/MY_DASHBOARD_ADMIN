"use client";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
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
const AddUser = () => {
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
      username: "",
      email: "",
      password: "",
      phone: "",
      admin: false,
      active: false,
      address: "",
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
    <Box
      sx={{
        backgroundColor: "var(--bgSoft)",
        // p: 4,
        borderRadius: "10px",
        mt: "20px",
      }}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Stack spacing={3} sx={{ pl: 2, pr: 6, py: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Username"
                  InputLabelProps={{
                    style: {
                      color: "var(--text)",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  fullWidth
                  {...getFieldProps("username")}
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Email"
                  InputLabelProps={{
                    style: {
                      color: "var(--text)",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  fullWidth
                  type="email"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Password"
                  InputLabelProps={{
                    style: {
                      color: "var(--text)",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  type="password"
                  fullWidth
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Phone"
                  InputLabelProps={{
                    style: {
                      color: "var(--text)",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  fullWidth
                  {...getFieldProps("phone")}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="admin-label" sx={{ color: "white" }}>
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
              <Grid item xs={6}>
                <InputLabel id="active-label" sx={{ color: "white" }}>
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
                <TextField
                  InputLabelProps={{
                    style: {
                      color: "var(--text)",
                    },
                  }}
                  label="Address"
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  multiline
                  rows={4}
                  fullWidth
                  {...getFieldProps("address")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  // loading={isSubmitting}
                  type="submit"
                  fullWidth
                  sx={{
                    p: 2,
                    backgroundColor: "teal",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#26A69A",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      </FormikProvider>
    </Box>
  );
};

export default AddUser;
