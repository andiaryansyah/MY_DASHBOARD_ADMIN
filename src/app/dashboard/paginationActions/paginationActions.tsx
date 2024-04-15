import { Box, IconButton, useTheme } from "@mui/material";
import React from "react";
import {
  MdFirstPage,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdLastPage,
} from "react-icons/md";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

const PaginationActions = (props: TablePaginationActionsProps) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        sx={{ color: "var(--text)" }}
      >
        {theme.direction === "rtl" ? <MdLastPage /> : <MdFirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{ color: "var(--text)" }}
      >
        {theme.direction === "rtl" ? (
          <MdKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{ color: "var(--text)" }}
      >
        {theme.direction === "rtl" ? (
          <MdKeyboardArrowLeft />
        ) : (
          <MdKeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        sx={{ color: "var(--text)" }}
      >
        {theme.direction === "rtl" ? <MdFirstPage /> : <MdLastPage />}
      </IconButton>
    </Box>
  );
};

export default PaginationActions;
