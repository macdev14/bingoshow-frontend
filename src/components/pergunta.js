import { Box, Dialog,DialogTitle, 
    List,ListItem, ListItemText, Avatar,ListItemAvatar, 
    Grid, Modal, Person,
    Paper, Table, TableContainer, TableCell, 
    TableHead, TableRow, TableBody, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import api from "./api";

 const Pergunta = ({setShowPergunta, setStatus})=>{
   
   
    const [pergunta, setPergunta] = useState('');
    const [respostaCorreta, setRespostaCorreta] = useState('');
    const [respostaIncorreta, setRespostaIncorreta] = useState([]);
    const [options,setOptions] = useState([])
 

    function getCategoriaId(){
        const id = localStorage.getItem("categoria") ? localStorage.getItem("categoria") : '' ;
        return id
    }


    useEffect(()=>{

      async function getPergunta(){
        return api.get('api/pergunta/?search='+getCategoriaId() ).then((data)=>{
            console.log(data.data)
            const randomIndex = Math.round(Math.random() * data.data[0].resposta_incorreta.length); 
            let c = data.data[0].resposta_correta
            let d = data.data[0].resposta_incorreta
            c['id'] = d.length+1
            c['correta']=true
            d.splice(randomIndex ,0, c)
            setOptions(d)
            console.log('opcoes')
            console.log(options)
            setRespostaIncorreta(data.data[0].resposta_incorreta)
           
            setRespostaCorreta(data.data[0].resposta_correta)
            setPergunta(data.data[0].enunciado)
            console.log(data.data[0]['resposta_correta'])
        }).catch((e)=>(console.log(e)))
      }
      getPergunta()
    },[])

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    return(
    
<Box >
  <Typography id="modal-modal-title" variant="h6" component="h2">
   {pergunta}
  </Typography>
  <Typography id="modal-modal-description" >
 
    {/* <DialogTitle>Set backup account</DialogTitle> */}
    <List >
      {options.map((data, index) =>{ 
        let letter = ''
        if (index == 0) letter = 'A';
        if (index == 1) letter = 'B';
        if (index == 2) letter = 'C';
        if (index == 3) letter = 'D';
        console.log(data)
        return(
        <ListItem button key={data.id} onClick={ ()=>{
            console.log('clicked')
            if (data.hasOwnProperty('correta')){
                console.log('correct')
                setStatus('correto')
            }else{
                console.log('incorreto')
                setStatus('incorreto')
            }
        } } >
          <ListItemAvatar>
          <Typography>{letter}</Typography>
          </ListItemAvatar>
          <ListItemText primary={data.enunciado} />
        </ListItem>
      )})
    }

    

      {/* <ListItem autoFocus button >
        <ListItemAvatar>
          <Typography>D</Typography>
        </ListItemAvatar>
        <ListItemText primary={respostaCorreta.enunciado  } />
      
    */}
   
    </List>

  </Typography>
</Box>

    )
  }

export default Pergunta;