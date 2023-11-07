import React, { useEffect, useState } from 'react';
import Property from './Property';
import MetersAmount from './MetersAmount';
import Location from './Location';
import Calculator from './Calculator';
import { Typography } from '@mui/material';
import "../components/components.css";

export default function Main() {
 
  return (
    <div className='main'>
      <Typography  className='titulo' variant="h4" component="div" marginBottom={"30px"} gutterBottom>Completa los datos solicitados</Typography>
      <Property  />
      <Location/>
      <MetersAmount />
      <Calculator />
    </div>
  )
}