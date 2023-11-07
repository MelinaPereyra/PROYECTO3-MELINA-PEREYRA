import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useState, useEffect } from "react";
import Calculator from "./Calculator";
import { useDispatch, useSelector } from "react-redux";
import { changeProperty } from "../redux/dataSlice";
import "../components/components.css";

export default function Property() {
  const [propertyList, setProperty] = useState([]);
  const url = "https://653831aaa543859d1bb14d53.mockapi.io/propiedades";
  const [selectedProperty, setSelectedProperty] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios(url).then((res) => setProperty(res.data));
  }, []);

  const propiedades = propertyList.map((propiedad) => (
    <option key={propiedad.id} value={propiedad.id}>
      {propiedad.name}
    </option>
  ));

  const handleChange = (event) => {
    dispatch(
      changeProperty({
        property: event.target.value,
      })
    );
  };

  const property = useSelector((state) => state.data.property.tipo);

  console.log("casas", propertyList);
  console.log("propiedadSeleccionada", property);

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
          label="Selecciona el tipo de propiedad
          "
          value={property}
          onChange={handleChange}
          defaultValue="EUR"
          error={property === ""}
          className="label"
          
        >
          {propertyList.map((casa, index) => (
            <MenuItem key={index} value={casa}>
              {casa.tipo}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}