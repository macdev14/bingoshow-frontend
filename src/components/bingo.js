import React, { useEffect, useState } from 'react';
import api from "./api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import generateBingo from './random';
import { Box, Dialog,DialogTitle, 
  List,ListItem, ListItemText, Avatar,ListItemAvatar, 
  Grid, Modal, Person,
  Paper, Table, TableContainer, TableCell, 
  TableHead, TableRow, TableBody, Typography } from '@mui/material';

export default function Bingo(){
    const [showPergunta, setShowPergunta] = useState(false);
    const [bingoBall, setBingoBall] = useState(generateBingo());
    const [bingoTable, setbingoTable] = useState(0);
    const [bingoTableString, setbingoTableString] = useState(0);

 
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

    
//     const TAX_RATE = 0.07;

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }



// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

    const Peca = ({value, bingo, col})=>{
      const [open, setOpen] = useState(false);
      const style = {
        r:{
        "&:hover": {
          backgroundColor: '#000',
        },
      }
      }
      console.log('coluna '+col);
      const p = col+''+value;
      
      console.log('BINGO BALL')
      console.log(p)
      console.log('BINGO IN')
      console.log(bingo)
        if (''+p==''+bingo){
          setShowPergunta(true);
            return(
              <> 
              <Box sx={{ color: 'primary.main' }} style={style} onclick={()=>(setOpen(true))}>
                {value.replace(/\D/g, "")}
              </Box>
            
              </>
            )
        }else{
          return(
            <Box sx={{ color: 'text.primary' }} style={style.r} >{value.replace(/\D/g, "")}</Box>
          )
        }
    }

    const Pergunta = ({open_q})=>{
      const [open, setOpen] = useState(open_q);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [pergunta, setPergunta] = useState('');
      const [respostaCorreta, setRespostaCorreta] = useState('');
      const [respostaIncorreta, setRespostaIncorreta] = useState([]);
 
      useEffect(()=>{

        async function getPergunta(){
          return api.get('api/pergunta/').then((data)=>{
              console.log(data.data)
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
        {respostaIncorreta.map((data, index) =>{ 
          let letter = 'A'
          if (index == 0) letter = 'A';
          if (index == 1) letter = 'B';
          if (index == 2) letter = 'C';
          return(
          <ListItem button key={data.id}>
            <ListItemAvatar>
            <Typography>{letter }</Typography>
            </ListItemAvatar>
            <ListItemText primary={data.enunciado} />
          </ListItem>
        )})
      }

      

        <ListItem autoFocus button >
          <ListItemAvatar>
            <Typography>D</Typography>
          </ListItemAvatar>
          <ListItemText primary={respostaCorreta.enunciado  } />
        </ListItem>
      </List>
  
    </Typography>
  </Box>

      )
    }


    return(
<> 

<Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160}> 
    <Grid item xs={4}  justifyContent="center" alignItems="center">
      <Item>{bingoBall}</Item>
      <Item onClick={()=>( setBingoBall(generateBingo()))}>Rodar</Item>
    </Grid>
</Grid>
   
<Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={160} > 
<Grid item xs={4}  justifyContent="center" alignItems="center">
   {showPergunta ? <Pergunta/> :  <Item onClick={()=>( setBingoBall(generateBingo()))}>Rodar</Item>}
  </Grid>
<Grid item md={4} mdOffset={2} >
 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="spanning table">
        <TableHead>
         
          <TableRow>
            <TableCell>B</TableCell>
            <TableCell>I</TableCell>
            <TableCell>N</TableCell>
            <TableCell>G</TableCell>
            <TableCell>O</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
         { bingoTable ? (
          <> 
            <TableRow>
              <TableCell><Peca value={bingoTable[0]} bingo={bingoBall} col={'B'} /></TableCell>
              <TableCell><Peca value={bingoTable[1]} bingo={bingoBall} col={'I'} /></TableCell>
              <TableCell><Peca value={bingoTable[2]} bingo={bingoBall} col={'N'}/> </TableCell>
              <TableCell><Peca value={bingoTable[3]} bingo={bingoBall} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[4]}bingo={bingoBall} col={'O'}/></TableCell>
             

            </TableRow>
            <TableRow>
              <TableCell><Peca value={bingoTable[5]} bingo={bingoBall} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[6]} bingo={bingoBall} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[7]} bingo={bingoBall} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[8]} bingo={bingoBall} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[9]} bingo={bingoBall} col={'O'}/></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><Peca value={bingoTable[10]} bingo={bingoBall} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[11]} bingo={bingoBall} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[12]} bingo={bingoBall} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[13]} bingo={bingoBall} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[14]} bingo={bingoBall} col={'O'}/></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><Peca value={bingoTable[15]} bingo={bingoBall} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[16]} bingo={bingoBall} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[17]} bingo={bingoBall} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[18]} bingo={bingoBall} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[19]} bingo={bingoBall} col={'O'}/></TableCell>
             

            </TableRow>

            <TableRow>
              <TableCell><Peca value={bingoTable[20]} bingo={bingoBall} col={'B'}/></TableCell>
              <TableCell><Peca value={bingoTable[21]} bingo={bingoBall} col={'I'}/></TableCell>
              <TableCell><Peca value={bingoTable[22]} bingo={bingoBall} col={'N'}/></TableCell>
              <TableCell><Peca value={bingoTable[23]}  bingo={bingoBall} col={'G'}/></TableCell>
              <TableCell><Peca value={bingoTable[24]}  bingo={bingoBall} col={'O'}/></TableCell>
             

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

