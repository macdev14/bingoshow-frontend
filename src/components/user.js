import api from "./api";
import React, { useEffect, useState } from 'react';
import { Box,Container, TextField, Typography, Grid, Button } from '@mui/material';
import { useNavigate} from 'react-router-dom';
export default function User(){
    let navigate = useNavigate();
    const [userId, setUserId] = useState(0)
    const [name, setName] = useState('')
    function createUser(){
        // console.log(data.data);
        if (name){
        return api.post('api/usuario/',{'nome':name}).then(function (data){
          console.log('TABLE: ')
          console.log(data.data);
          setUserId(data.data.id)
          localStorage.setItem("usuario",data.data.id);
          navigate('/bingo')
        } ).catch((e)=>{console.log(e)})


    } 
}

    

    return(

<Container maxWidth="sm"> 

<Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}> 
    <Grid item xs={4}  justifyContent="center" alignItems="center">
    
   
    </Grid>
</Grid>

<Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}> 
    <Grid item xs={4}  justifyContent="center" alignItems="center">
    <Typography variant="h1">The Bingo Show</Typography>
    
     <TextField id="outlined-basic" label="Nome" variant="outlined" onChange={(e)=>( setName(e.target.value))}  />
     &nbsp;{"\n"}
     <Typography display="block"> 
     <Button variant="contained" onClick={createUser} >Jogar</Button>
     &nbsp;{"\n"}
    
     </Typography>
     &nbsp;{"\n"}
     <Typography display="block">
    
     <Button variant="contained" onClick={()=>(navigate('/config'))} >Configurações</Button> </Typography>
    </Grid>
</Grid>


</Container>
    )
}