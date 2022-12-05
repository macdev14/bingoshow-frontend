import { Box, Dialog,DialogTitle, 
    List,ListItem, ListItemText, Avatar,ListItemAvatar, 
    Grid, Modal, Person,
    Paper, Table, TableContainer, TableCell, 
    TableHead, TableRow, TableBody, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import Item from './item';
import { useNavigate} from 'react-router-dom';
export default function Config(){
    let navigate = useNavigate();
    return(
        <> 
        <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}>
      
             </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}> 
    <Grid item xs={4}  justifyContent="center" alignItems="center">

    <Item style={{ backgroundColor:'#4040ff', color:'#FFF' }} onClick={()=>(navigate('/'))}>
          <Typography variant="h4" >
          Voltar  </Typography> 
          
            </Item>
            &nbsp;{"\n"}
    <Item style={{ backgroundColor:'#4040ff', color:'#FFF' }} onClick={()=>(navigate('/config/help'))}>
          <Typography variant="h3" >
          Como Jogar?  </Typography> 
          
            </Item>
            &nbsp;{"\n"}
    <Item style={{ backgroundColor:'#4040ff', color:'#FFF' }} onClick={()=>(navigate('/config/category'))}>
          <Typography variant="h3" >
          Categoria(s)  </Typography> 
            </Item>
    </Grid>
</Grid>
</>
    )
}