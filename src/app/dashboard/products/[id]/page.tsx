"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";

type InitialValues = {
  title: string;
  price: number;
  stock: number;
  color: string;
  size: number;
  category: string;
  description: string;
  createdAt?: Date;
};

const ProductDetail = () => {
  const productDetailSchema = Yup.object().shape({
    title: Yup.string().required("Title cannot be empty"),
    price: Yup.string().required("Price cannot be empty"),
    stock: Yup.string().required("Stock cannot be empty"),
    color: Yup.string().required("Color cannot be empty"),
    size: Yup.string().required("Size cannot be empty"),
  });

  const [category, setCategory] = React.useState("phone");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const formik = useFormik<InitialValues>({
    initialValues: {
      title: "Iphone",
      price: 888,
      stock: 100,
      color: "red",
      size: 1,
      description: "Description",
      category: "phone",
    },
    validationSchema: productDetailSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      let variables = {
        title: values.title,
        price: values.price,
        stock: values.stock,
        color: values.color,
        size: values.size,
        description: values.description,
        category: category,
        createdAt: new Date(),
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
        <Stack>Iphone</Stack>
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
                  Title
                </InputLabel>
                <TextField
                  id="title"
                  type="text"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("title")}
                  error={Boolean(touched.title && errors.title)}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Price
                </InputLabel>
                <TextField
                  id="price"
                  type="text"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("price")}
                  error={Boolean(touched.price && errors.price)}
                  helperText={touched.price && errors.price}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Stock
                </InputLabel>
                <TextField
                  id="stock"
                  type="text"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("stock")}
                  error={Boolean(touched.stock && errors.stock)}
                  helperText={touched.stock && errors.stock}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Color
                </InputLabel>
                <TextField
                  id="color"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("color")}
                  error={Boolean(touched.color && errors.color)}
                  helperText={touched.color && errors.color}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Size
                </InputLabel>
                <TextField
                  id="size"
                  placeholder="Jakarta"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "var(--text)",
                      backgroundColor: "#151c2c",
                      border: "none",
                    },
                  }}
                  {...getFieldProps("size")}
                  error={Boolean(touched.size && errors.size)}
                  helperText={touched.size && errors.size}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
                  Category
                </InputLabel>
                <Select
                  fullWidth
                  labelId="select-label"
                  id="select"
                  value={category}
                  onChange={handleChange}
                  sx={{ color: "white", backgroundColor: "#151c2c" }}
                >
                  <MenuItem value={"kitchen"}>Kitchen</MenuItem>
                  <MenuItem value={"phone"}>Phone</MenuItem>
                  <MenuItem value={"computer"}>Computer</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  id="active-label"
                  sx={{ color: "var(--text)", fontSize: "14px", mb: 1 }}
                >
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

export default ProductDetail;
