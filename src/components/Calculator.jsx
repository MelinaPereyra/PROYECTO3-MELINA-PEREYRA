import { Alert, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaveButton from "./SaveButton";
import "../components/components.css";

export default function Calculator() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [isAlert, setIsAlert] = useState(false);

  const propertySelected = useSelector((state) => state.data.property.factor);
  console.log("propiedadSeleccionada", propertySelected);

  const locationSelected = useSelector((state) => state.data.location.factor);

  const meters = useSelector((state) => state.data.meters);
  console.log("metros", meters);

  const costoM2 = 35.86;

  const final = propertySelected * meters * locationSelected * costoM2;

  const totalFinal = total.toFixed(2);

  const handleCalculate = () => {
    setLoading(true);

    setTimeout(() => {
      setTotal(final);

      setLoading(false);

      setTimeout(() => {
        setIsAlert(true);
      }, 2000);

      setIsAlert(false);
    }, 3000);
  };


  const quotarionInitial = useSelector((state) => state.data.quotations);
  console.log("cotizacionesInicia", quotarionInitial);

  console.log("cotizaciones", localStorage.getItem("cotizaciones"));

  const isDisable =
    propertySelected === undefined ||
    locationSelected === undefined ||
    meters <= 19;

  return (
    <div className="calculator">
      <Button
        variant="contained"
        onClick={handleCalculate}
        className="cotizar"
        disabled={isDisable}
      >
        Cotizar
      </Button>

      {isAlert && (
        <Alert severity="success" className="alert" sx={{ marginTop: "20px" }}>
          Cotización realizada con éxito
        </Alert>
      )}

      <Typography variant="h5" component="div" gutterBottom>
        {" "}
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            <Typography variant="h5" margin={"16px"}>
              Precio estimado: ${totalFinal}
            </Typography>
            {isAlert && <SaveButton />}
          </div>
        )}
      </Typography>
    </div>
  );
}