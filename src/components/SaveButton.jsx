import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch, useSelector } from "react-redux";
import { saveQuotation } from "../redux/dataSlice";

export default function SaveButton() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const dispatch = useDispatch();

  const propertySelected = useSelector((state) => state.data.property);
  const locationSelected = useSelector((state) => state.data.location);
  const meters = useSelector((state) => state.data.meters);

  const costoM2 = 35.86;

  const final =
    propertySelected.factor * meters * locationSelected.factor * costoM2;

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("es-AR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const quotationData = {
    //math.random() con numeros enteros,
    id: Math.floor(Math.random() * 1000),
    fechaDeCotizacion: formattedDate,
    property: propertySelected.tipo,
    location: locationSelected.tipo,
    meters: meters,
    polizaMensual: "$" + final.toFixed(2),
  };

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        console.log("lalalal", quotationData);
        /*dispatch(
          saveQuotation(quotationData)); */

        const cotizaciones =
          JSON.parse(localStorage.getItem("cotizaciones")) || [];
        cotizaciones.push(quotationData);
        localStorage.setItem("cotizaciones", JSON.stringify(cotizaciones));

        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: "relative" }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Guardar cotización
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}