import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "../redux/dataSlice";

export default function Location() {
  const [locationList, setLocation] = useState([]);
  const url = "https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones";

  const dispatch = useDispatch();

  useEffect(() => {
    axios(url).then((res) => setLocation(res.data));
  }, []);

  const ubicaciones = locationList.map((ubicacion) => (
    <option key={ubicacion.id} value={ubicacion.id}>
      {ubicacion.tipo}
    </option>
  ));

  const handleChangeLocation = (event) => {
    dispatch(
      changeLocation({
        location: event.target.value,
      })
    );
  };
  const location = useSelector((state) => state.data.location.tipo);
  console.log("ubicaciones", locationList);

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
          select
          label="Selecciona su ubicación:
    "
          value={location}
          onChange={handleChangeLocation}
          defaultValue="EUR"
        >
          {locationList.map((ubicacion, index) => (
            <MenuItem key={index} value={ubicacion}>
              {ubicacion.tipo}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}