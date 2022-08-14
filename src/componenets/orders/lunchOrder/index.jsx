/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
  Grid,
  CardContent,
  TablePagination
} from "@mui/material";
import { Container } from "@mui/system";
import Loader from "../../../common/loader/loader";
import CustomTableCell from "../../../common/tableCell/tableCell";
import Pagination from "../../../common/pagination/pagination";
import axios from "axios";
import Nav from "../../nav";
import { useSelector } from "react-redux";

function TablePaginationActions(props) {
  return <Pagination props={props} />;
}

const LunchOrder = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(0);
  const [products, setProducts] = useState([]);
  const type = useSelector((state) => state?.lunchType?.data);
  const getUsers = async (type) => {
    axios
      .get(`https://lu-meal-stage.herokuapp.com/api/admin/get-available-orders/lunch`)
      .then((res) => {
        const products = res.data.payload.data;
        setProducts(products);
        console.log(products);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Nav />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Grid
            sx={{
              mt: "5vh",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;"
            }}>
            <CardContent>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "91%"
                }}>
                <Typography variant="h4" ml="2vh">
                  Orders
                </Typography>
              </Grid>
              <Divider sx={{ mt: "4vh" }} />

              {products.length ? (
                <TableContainer>
                  <Table size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <CustomTableCell name="Name" isHeader />
                        <CustomTableCell name="Descrition" isHeader />
                        <CustomTableCell name="Roti Quantity" isHeader />
                        <CustomTableCell name="Amount Paid" isHeader />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : products
                      ).map((product) => {
                        return (
                          <TableRow
                            key={product.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 }
                            }}>
                            <CustomTableCell name={product.employeeName} />
                            <CustomTableCell name={product.teaVolume} />
                            <CustomTableCell name={product.sugerQuantity} />
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    <TableRow>
                      {products.length >= 10 && (
                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                          count={products.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: {
                              "aria-label": "rows per page"
                            },
                            native: true
                          }}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActions}
                        />
                      )}
                    </TableRow>
                  </Table>
                </TableContainer>
              ) : (
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "24px"
                  }}>
                  Nothing To Show
                </Typography>
              )}
            </CardContent>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default LunchOrder;
