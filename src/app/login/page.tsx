"use client";
import { Box, Button, FormLabel, Grid, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

type InitialValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const userSchema = Yup.object().shape({
    email: Yup.string().required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      let variables = {
        email: values.email,
        password: values.password,
      };

      console.log("result submit : ", variables);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: "50px",
          borderRadius: "10px",
          width: "500px",
          height: "500px",
          backgroundColor: "var(--bgSoft)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ fontWeight: "bold", fontSize: "40px" }}>Login</Stack>
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Stack spacing={3} sx={{ pl: 2, pr: 6, py: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    InputLabelProps={{
                      style: {
                        color: "var(--text)",
                      },
                    }}
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
                  <TextField
                    id="password"
                    label="Password"
                    InputLabelProps={{
                      style: {
                        color: "var(--text)",
                      },
                    }}
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
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Box>
  );
};

export default LoginPage;
