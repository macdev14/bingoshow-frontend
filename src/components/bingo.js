import React, { useEffect, useState } from 'react';
import api from "./api";
import 'bootstrap/dist/css/bootstrap.min.css';

import generateBingo from './random';
import { Box, Dialog,DialogTitle, 
  List,ListItem, ListItemText, Avatar,ListItemAvatar, 
  Grid, Modal, Person,
  Paper, Table, TableContainer, TableCell, 
  TableHead, TableRow, TableBody, Typography } from '@mui/material';
import Pergunta from './pergunta';
import Peca from './peca';
import Item from './item';
import { useNavigate } from 'react-router-dom';

export default function Bingo(){
    let navigate = useNavigate()
    const [showPergunta, setShowPergunta] = useState(false);
    const [status, setStatus] = useState('');
    const [bingoBall, setBingoBall] = useState(generateBingo());
    const [bingoTable, setbingoTable] = useState(0);
    const [bingoTableString, setbingoTableString] = useState(0);
    const [score, setScore] = useState(0)
    const [exists, setExists] = useState(false)
 
    const bingo_head = {
      marginRight:'100px',
      marginLeft: '100px',
  };

    const c = {
        marginTop: '100px'
    };

    const bola = {
      marginTop: '100px'
    }

    




function getUserid(){
  const user = localStorage.getItem("usuario") ? localStorage.getItem("usuario") : 1 ;
  return user
}

    useEffect( 
      () =>{

      async function getTable(){
        // console.log(data.data);
        return api.post('api/gerartabela/',{'usuario':getUserid()}).then(function (data){
          console.log('TABLE: ')
          console.log(data.data);
          setbingoTableString(data.data)
          setbingoTable(data.data.split(" "))
        } ).catch((e)=>{console.log(e)})
       }
      if (bingoTableString){
        console.log('existee')
        console.log(bingoTableString)
        return
      }else{
        getTable();
      }


      
        
    }
    ,[])

   

   


    return(
<> 

<Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}> 

    <Grid item xs={4}  justifyContent="center" alignItems="center">
      <Item style={{ backgroundColor:'#6497BF', color:'#FFF', marginTop:30 }} ><Typography variant="h2"> {bingoBall} </Typography> </Item>
      &nbsp;{'\n'}

      { !exists ? 
      <Item  style={{ backgroundColor:'#97BF64', color:'#FFF', marginTop:10, marginBottom:10 }}  onClick={()=>( setBingoBall(generateBingo()))}>
        <Typography variant="h5">
        Rodar
        </Typography>
        </Item>
        : ''
        }
      &nbsp;{'\n'}
    </Grid>

    
    <Grid item xs={1}  justifyContent="center" alignItems="center">
    <Item style={{ backgroundColor:'#000', color:'#FFF' }} >Pontuação: {score}</Item>
    &nbsp;{'\n'}
      <Item style={{ backgroundColor:'#FF0000', color:'#FFF' }} onClick= { ()=>{localStorage.clear();  return navigate('/')}   } >Sair</Item>
    
    </Grid>
</Grid>
   
<Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160} > 
<Grid item xs={4}  justifyContent="center" alignItems="center">
   {showPergunta ? <Pergunta setStatus={setStatus} setShowPergunta={setShowPergunta}/> :  <Item onClick={()=>( setBingoBall(generateBingo()))}>
    <Typography>
    Rodar
    </Typography> 
    
    </Item>}
  </Grid>
<Grid item md={4} mdOffset={2} >
 
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 500 }} aria-label="spanning table">
        <TableHead>
         
          <TableRow>
            <TableCell> <Typography variant="h3">B</Typography> </TableCell>
            <TableCell>  <Typography variant="h3">I</Typography> </TableCell>
            <TableCell> <Typography variant="h3">N</Typography> </TableCell>
            <TableCell> <Typography variant="h3">G</Typography> </TableCell>
            <TableCell> <Typography variant="h3">O</Typography> </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
         { bingoTable ? (
          <> 
            <TableRow>
              <TableCell><Peca value={bingoTable[0]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'B'} /></TableCell>
              <TableCell><Peca value={bingoTable[1]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'I'} /></TableCell>
              <TableCell><Peca value={bingoTable[2]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'N'}/> </TableCell>
              <TableCell><Peca value={bingoTable[3]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[4]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'O'}/></TableCell>
             

            </TableRow>
            <TableRow>
              <TableCell><Peca value={bingoTable[5]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[6]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[7]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[8]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[9]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'O'}/></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><Peca value={bingoTable[10]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[11]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[12]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[13]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[14]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'O'}/></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><Peca value={bingoTable[15]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[16]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[17]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[18]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[19]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'O'}/></TableCell>
             

            </TableRow>

            <TableRow>
              <TableCell><Peca value={bingoTable[20]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[21]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[22]} bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[23]}  bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[24]}  bingo={bingoBall} setBingoBall={setBingoBall}setExists={setExists}setScore={setScore} score={score} mod={status} setStatus={setStatus} setShowPergunta={setShowPergunta} col={'O'}/></TableCell>
             

            </TableRow> </> ) : (<>
            
            
              <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
             

            </TableRow> 
            </>)
        }
         
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

  




    </Grid>

    </>
    )
}

