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
  title: string;
  stock: number;
  price: number;
  description: string;
  category: string;
  color: string;
  size: number;
  createdAt?: Date;
};
const AddProduct = () => {
  const productSchema = Yup.object().shape({
    title: Yup.string().required("Title cannot be empty"),
    price: Yup.string().required("Price cannot be empty"),
    stock: Yup.string().required("Stock cannot be empty"),
    color: Yup.string().required("Color cannot be empty"),
    size: Yup.string().required("Size cannot be empty"),
    description: Yup.string(),
  });

  const [category, setCategory] = React.useState("");

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const formik = useFormik<InitialValues>({
    initialValues: {
      title: "",
      price: 0,
      stock: 0,
      color: "",
      category: "",
      size: 0,
      description: "",
    },
    validationSchema: productSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      let variables = {
        title: values.title,
        price: values.price,
        stock: values.stock,
        color: values.color,
        category: category,
        size: values.size,
        description: values.description,
        createdAt: new Date(),
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
                <InputLabel id="active-label" sx={{ color: "white", mb: 1 }}>
                  Title
                </InputLabel>
                <TextField
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
                  placeholder="Enter a product name"
                  fullWidth
                  {...getFieldProps("title")}
                  error={Boolean(touched.title && errors.title)}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="active-label" sx={{ color: "white", mb: 1 }}>
                  Category
                </InputLabel>
                <Select
                  fullWidth
                  value={category}
                  onChange={handleChangeCategory}
                  sx={{ color: "white", backgroundColor: "#151c2c" }}
                >
                  <MenuItem value={"kitchen"}>Kitchen</MenuItem>
                  <MenuItem value={"phone"}>Phone</MenuItem>
                  <MenuItem value={"computer"}>Computer</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="active-label" sx={{ color: "white", mb: 1 }}>
                  Price
                </InputLabel>
                <TextField
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
                  placeholder="Input price"
                  fullWidth
                  type="number"
                  {...getFieldProps("price")}
                  error={Boolean(touched.price && errors.price)}
                  helperText={touched.price && errors.price}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="active-label" sx={{ color: "white", mb: 1 }}>
                  Stock
                </InputLabel>
                <TextField
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
                  type="number"
                  placeholder="Input stock"
                  fullWidth
                  {...getFieldProps("stock")}
                  error={Boolean(touched.stock && errors.stock)}
                  helperText={touched.stock && errors.stock}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="active-label" sx={{ color: "white", mb: 1 }}>
                  Color
                </InputLabel>
                <TextField
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
                  placeholder="Input color"
                  fullWidth
                  {...getFieldProps("color")}
                  error={Boolean(touched.color && errors.color)}
                  helperText={touched.color && errors.color}
                />
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="active-label" sx={{ color: "white", mb: 1 }}>
                  Size
                </InputLabel>
                <TextField
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
                  type="number"
                  placeholder="Input size"
                  fullWidth
                  {...getFieldProps("size")}
                  error={Boolean(touched.size && errors.size)}
                  helperText={touched.size && errors.size}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="active-label" sx={{ color: "white", mb: 1 }}>
                  Description
                </InputLabel>
                <TextField
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
                  placeholder="Input description"
                  multiline
                  rows={8}
                  fullWidth
                  {...getFieldProps("description")}
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

export default AddProduct;
