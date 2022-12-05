import { Box, Dialog,DialogTitle, 
    List,ListItem, ListItemText, Avatar,ListItemAvatar, 
    Grid, Modal, Person,
    Paper, Table, TableContainer, TableCell, 
    TableHead, TableRow, TableBody, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import Item from './item';
import { useNavigate} from 'react-router-dom';
export default function Help(){
    let navigate = useNavigate();
    return(
        <> 
        <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}>
        <Item style={{ backgroundColor:'#FF0000', color:'#FFF' }} onClick={()=>(navigate('/config'))}>
          <Typography variant="h3" >
           Voltar  </Typography> 
            </Item>
             </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}> 
    <Grid item xs={4}  justifyContent="center" alignItems="center">
      <Item>
        <Typography variant="h2">
        <Typography display="block" variant="h5"> 
         Após sair no sorteio um número que você possua na sua tabela de bingo, você deverá responder corretamente a pergunta da vez.
         </Typography>
         &nbsp;{"\n"}
        <Typography display="block" variant="h5">
Caso acerte, o número será marcado.</Typography>&nbsp;{"\n"}
<Typography display="block" variant="h5">
Caso erre, o número será marcado com               
      e não valerá mais para fechar uma quina (cinco        
      casas em fileira ou diagonal) e ganhar o jogo.</Typography>&nbsp;{"\n"}
      <Typography display="block" variant="h5">
Para ganhar o jogo, complete uma quina antes de ficar sem números para marcar
</Typography>
        </Typography>
      </Item>
     
    </Grid>
</Grid>
</>
    )
}