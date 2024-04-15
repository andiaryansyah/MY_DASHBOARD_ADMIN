import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function transactionsData(
  avatar: string,
  name: string,
  status: string,
  date: string,
  amount: number
) {
  return { avatar, name, status, date, amount };
}

const rows = [
  transactionsData("/noavatar.png", "John Doe", "Pending", "24-10-2003", 3200),
  transactionsData("/noavatar.png", "Gapoor", "Cancelled", "24-10-2003", 3200),
  transactionsData("/noavatar.png", "Gassing", "Pending", "24-10-2003", 3200),
  transactionsData("/noavatar.png", "Garfield", "Success", "24-10-2003", 3200),
  transactionsData("/noavatar.png", "Terry", "Pending", "24-10-2003", 3200),
];

const Transactions = () => {
  return (
    <Box
      sx={{ backgroundColor: "var(--bgSoft)", p: "20px", borderRadius: "10px" }}
    >
      <Stack sx={{ mb: "20px", fontWeight: 200, color: "var(--textSoft)" }}>
        Latest Transactions
      </Stack>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow sx={{ color: "white" }}>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>Status</TableCell>
            <TableCell sx={{ color: "white" }}>Date</TableCell>
            <TableCell sx={{ color: "white" }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
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
                  {row.name}
                </Box>
              </TableCell>
              <TableCell>
                <Stack
                  sx={{
                    color: "white",
                    p: "5px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    width: "max-content",
                    backgroundColor:
                      row.status === "Pending"
                        ? "#f7cb7375"
                        : row.status === "Cancelled"
                        ? "#f7737375"
                        : "#afd6ee75",
                  }}
                >
                  {row.status}
                </Stack>
              </TableCell>
              <TableCell sx={{ color: "white" }}>{row.date}</TableCell>
              <TableCell sx={{ color: "white" }}>${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Transactions;
