"use client";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Search from "../search/search";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PaginationActions from "../paginationActions/paginationActions";

function productsData(
  avatar: string,
  title: string,
  description: string,
  price: string,
  created_at: string,
  stock: string
) {
  return { avatar, title, description, created_at, price, stock };
}

const rows = [
  productsData(
    "/noavatar.png",
    "Iphone",
    "description",
    "$888",
    "24-10-2003",
    "100"
  ),
];

const ProductsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [textColor, setTextColor] = useState("var(--text)");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        backgroundColor: "var(--bgSoft)",
        p: "20px",
        borderRadius: "10px",
        mt: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Search placeholder="Search for a products..." />
        <Link href="/dashboard/products/addProduct">
          <Button
            sx={{
              p: "10px",
              backgroundColor: "#5d57c9",
              color: "var(--text)",
              border: "none",
              borderRadius: "5px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: " #6a65cd",
              },
            }}
          >
            Add New
          </Button>
        </Link>
      </Box>
      <Table sx={{ width: "100%", border: "none" }}>
        <TableHead>
          <TableRow sx={{ color: "white" }}>
            <TableCell sx={{ color: "white" }}>Title</TableCell>
            <TableCell sx={{ color: "white" }}>Description</TableCell>
            <TableCell sx={{ color: "white" }}>Price</TableCell>
            <TableCell sx={{ color: "white" }}>Created At</TableCell>
            <TableCell sx={{ color: "white" }}>Stock</TableCell>
            <TableCell sx={{ color: "white" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Image
                    src={row.avatar}
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: "cover" }}
                  />
                  {row.title}
                </Box>
              </TableCell>
              <TableCell sx={{ color: "white" }}>{row.description}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.price}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.created_at}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.stock}</TableCell>
              <TableCell sx={{ color: "white" }}>
                <Link href="/dashboard/products/test">
                  <Button
                    sx={{
                      p: "5px 10px",
                      borderRadius: "5px",
                      color: "var(--text)",
                      border: "none",
                      backgroundColor: "teal",
                      fontWeight: "600",
                      "&:hover": {
                        backgroundColor: "#26A69A",
                      },
                    }}
                  >
                    View
                  </Button>
                </Link>
                <Button
                  sx={{
                    ml: 1,
                    p: "5px 10px",
                    borderRadius: "5px",
                    color: "var(--text)",
                    border: "none",
                    backgroundColor: "red",
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "#EF5350",
                    },
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              sx={{
                color: "var(--text)",
              }}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    // style: { color: "green" },
                    "aria-label": "rows per page",
                  },
                  native: true,
                  onSelect: () => setTextColor("var(--text)"),
                  onClick: () => setTextColor("black"),
                  onBlur: () => setTextColor("var(--text)"),
                  sx: {
                    color: textColor,
                  },
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={PaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Box>
  );
};

export default ProductsPage;
