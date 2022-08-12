import React, { useState } from "react";
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
  TablePagination,
} from "@mui/material";
import { Container } from "@mui/system";
import Header from "../../header/index";
import Loader from "../../../common/loader/loader";
import CustomTableCell from "../../../common/tableCell/tableCell";
import Pagination from "../../../common/pagination/pagination";
import { useSelector } from "react-redux";

function TablePaginationActions(props) {
  return <Pagination props={props} />;
}

const LunchOrder = () => {
  const data = useSelector((state) => state.lunch.data);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Grid
            sx={{
              mt: "5vh",
              boxShadow:
                "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;",
            }}
          >
            <CardContent>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "91%",
                }}
              >
                <Typography variant="h4" ml="2vh">
                  Orders
                </Typography>
              </Grid>
              <Divider sx={{ mt: "4vh" }} />

              {data.length ? (
                <TableContainer>
                  <Table size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <CustomTableCell name="Name" isHeader />
                        <CustomTableCell name="Description" isHeader />
                        <CustomTableCell name="Roti" isHeader />
                        <CustomTableCell name="Amount" isHeader />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? data.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : data
                      ).map((product) => {
                        return (
                          <TableRow
                            key={product.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <CustomTableCell name={product.userName} />
                            <CustomTableCell name={product.description} />
                            <CustomTableCell name={product.roti} />
                            <CustomTableCell name={product.amount} />
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    <TableRow>
                      {data.length >= 10 && (
                        <TablePagination
                          rowsPerPageOptions={[
                            5,
                            10,
                            25,
                            { label: "All", value: -1 },
                          ]}
                          count={data.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: {
                              "aria-label": "rows per page",
                            },
                            native: true,
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
                    fontSize: "24px",
                  }}
                >
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
