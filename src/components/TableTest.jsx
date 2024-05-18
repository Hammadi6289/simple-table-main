import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { data, columns } from "../data"; //data.jsx contains the sample date

const TableTest = () => {
  // Define table instance using useTable hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFilters, // Hook for filter
      useSortBy // Hook for Sorting
    );

  // Memoize the table rows for performance//
  const tableRows = useMemo(
    () =>
      rows.map((row) => {
        prepareRow(row);
        return (
          <TableRow key={row.id} {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <TableCell key={cell.row.original.empID} {...cell.getCellProps()}>
                {cell.render("Cell")}
              </TableCell>
            ))}
          </TableRow>
        );
      }),
    [prepareRow, rows]
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "cyan" }}>
        Employees Static Database
      </h1>
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, index) => (
              <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      transition: "all 0.3s",
                      cursor: "pointer",
                    }}
                  >
                    {/* Render header */}
                    {column.render("Header")}
                    {/* Render Sort */}
                    <span>{column.isSortedDesc ? "  ▲" : "  ▼"}</span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          {/* Table body */}
          <TableBody {...getTableBodyProps()}>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableTest;
