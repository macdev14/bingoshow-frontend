import { Box, Dialog,DialogTitle, 
    List,ListItem, ListItemText, Avatar,ListItemAvatar, 
    Grid, Modal, Person,
    Paper, Table, TableContainer, TableCell, 
    TableHead, TableRow, TableBody, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import Item from './item';
import { useNavigate} from 'react-router-dom';
import api from './api';
export default function Categoria(){

    const [categorias, setCategorias] = useState('')

    useEffect(()=>{

        async function getCategorias(){
          return api.get('api/categoria/').then((data)=>{   
            return setCategorias(data.data)
              
             
          }).catch((e)=>(console.log(e)))
        }
        
        if (categorias){
            console.log(categorias)

        }
        else{ getCategorias()}
      },[])


    let navigate = useNavigate();
    return(
        <> 
        <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}>
                
                
                <Item>
                    <Typography variant="h3">Categorias</Typography>
                </Item>
&nbsp;{'\n'}
</Grid>


        <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}> 
    <Grid item xs={4}  justifyContent="center" alignItems="center">



{ categorias ?
(categorias.map((data, index) =>{ 
     
        return(
            <>
         <Item key={data.id} style={{ backgroundColor:'#4040ff', color:'#FFF' }} onClick={()=>{localStorage.setItem('categoria', data.id ); alert(data.nome+' definido como categoria.');return navigate('/') }}>
          <Typography variant="h4" >
          {data.nome} </Typography> 
          
            </Item>
           &nbsp;{'\n'}
            </>
      )})
) : 
     (
        <Item style={{ backgroundColor:'#4040ff', color:'#FFF' }}>
          <Typography variant="h4" >
          Carregando... </Typography> 
          
            </Item>
     )
     
     }

    </Grid>
</Grid>
<Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}>
                <Item>
                    <Typography variant="h3">Voltar</Typography>
                </Item>
             </Grid>
</>
    )
}