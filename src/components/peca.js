import { Box, Dialog,DialogTitle, 
    List,ListItem, ListItemText, Avatar,ListItemAvatar, 
    Grid, Modal, Person,
    Paper, Table, TableContainer, TableCell, 
    TableHead, TableRow, TableBody, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import api from "./api";
import generateBingo from './random';

const Peca = ({value, bingo, col, mod ,setShowPergunta, setScore, score, setStatus, setExists, setBingoBall})=>{
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(true);
    const style = {
      r:{
      "&:hover": {
        backgroundColor: '#000',
      },
      
    },
    backgroundColor: '#FFF'
    };

   


    console.log('coluna '+col);
    const p = col+''+value;
    
    console.log('BINGO BALL')
    console.log(p)
    console.log('BINGO IN')
    console.log(bingo)
      if (''+p==''+bingo && active){
        setShowPergunta(true);
        console.log('ativo '+ active);
        setExists(true);
        if (mod=='correto' && active){
                style['backgroundColor'] = '#97BF64';
                setExists(false);
                setActive(false);
                setShowPergunta(false);
                alert('Acertou!!');
                
                setScore(score+10);
                setStatus('');
               
               

        }
        else if(mod=='incorreto' && active){ 
                style['backgroundColor'] = '#D8031C';
                setExists(false);
                setActive(false);
                setShowPergunta(false)
                alert('Errou!!');
                
                setScore((score-5 ? score > 0: 0));
                setStatus('');
             
              
        }

       
          return(
            <> 
            <Box sx={{ color: 'primary.main' }} style={style} onclick={()=>(setOpen(true))}>
          <Typography variant="h3">   {value.replace(/\D/g, "")}  </Typography> 
            </Box>
          
            </>
          )
      }else{
       

        return(
          <Box sx={{ color: 'text.primary' }} style={style} >
             <Typography variant="h3" style={style}> 
            {value.replace(/\D/g, "")}
            </Typography> 
            </Box>  
            
        )
      }
  }

  export default Peca;