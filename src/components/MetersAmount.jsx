import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { changeMeters } from "../redux/dataSlice";

export default function MetersAmount() {
  const dispatch = useDispatch();
  const [meters, setMeters] = React.useState(0);

  const handleChangeMeters = (event) => {
    dispatch(
      changeMeters({
        meters: event.target.value,
      })
    );
  };

  const metersAmount = useSelector((state) => state.data.meters);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "70ch" },
      }}
      noValidate
      autoComplete="off"
      marginBottom={"20px"}
    >
      <div>
        <TextField
          id="outlined-select-currency"
          label="Ingresa los Metros cuadrados:"
          type="number"
          aria-errormessage="El valor debe ser mayor a 20"
          onChange={handleChangeMeters}
          value={metersAmount}
          error={metersAmount < 20}
          helperText={metersAmount < 20 ? "El valor debe ser mayor a 20" : ""}
        ></TextField>
      </div>
    </Box>
  );
}
