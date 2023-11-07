import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Alert, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/components.css";
import { DeleteForeverOutlined } from "@mui/icons-material";

export default function Historial() {
  const navigate = useNavigate();
  const quotations = useSelector((state) => state.data.quotations);
  const [cotizaciones, setCotizaciones] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "fechaDeCotizacion",
      headerName: "Fecha de cotización",
      width: 170,
    },
    { field: "property", headerName: "Propiedad", width: 120 },
    { field: "location", headerName: "Ubicación", width: 120 },
    {
      field: "meters",
      headerName: "Metros cuadrados",
      type: "number",
      width: 150,
    },
    {
      field: "polizaMensual",
      headerName: "Póliza mensual($)",
      sortable: false,
      width: 150,
    },
    {
      field: "eliminar",
      headerName: "Eliminar",
      width: 70,
      renderCell: (params) => (
        <DeleteForeverOutlined onClick={() => handleDelete(params.row.id)} />
      ),
    },
  ];
  const handleDelete = (cotizacionId) => {
    setLoading(true);

    setTimeout(() => {
      const cotizacionesFiltradas = cotizaciones.filter(
        (cotizacion) => cotizacion.id !== cotizacionId
      );
      setCotizaciones(cotizacionesFiltradas);
      localStorage.setItem(
        "cotizaciones",
        JSON.stringify(cotizacionesFiltradas)
      );
      setLoading(false);

      setIsAlert(true);

      setTimeout(() => {
        setIsAlert(false);
      }, 3000);
    }, 1000);
  };

  useEffect(() => {
    const cotizacionesGuardadas =
      JSON.parse(localStorage.getItem("cotizaciones")) || [];
    setCotizaciones(cotizacionesGuardadas);
  }, []);

  const handleBack = () => {
    navigate("/");
    location.reload();
  };

  console.log("cotizaciones", quotations);

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <Typography variant="h3" marginBottom={"30px"} align="center">
          Historial de cotizaciones
        </Typography>
        <DataGrid
          rows={cotizaciones}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      {isAlert && (
        <Alert severity="info" className="alert" sx={{ marginTop: "33px" }}>
          Se borro la cotización.
        </Alert>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "120px",
          marginBottom: "50px",
        }}
      >
        <Button variant="contained" onClick={handleBack} className="buttonBack">
          Volver
        </Button>
      </Box>
    </>
  );
}