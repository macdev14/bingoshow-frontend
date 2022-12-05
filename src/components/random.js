// declare all characters
const characters ='BINGO';


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

export default function generateBingo() {

   

    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < 1; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('r '+ result)
    let start;
    let end;
    switch(result){
        case "B":
            start = 1;
            end = 15;
            break;
        case "I":
            start = 15;
            end = 30;
            break;
        case "N":
            start = 31;
            end = 45;
            break;
        case "G":
            start = 46;
            end = 60;
            break;
        case "O":
            start = 61;
            end = 75;
            break;



    }

    let r = getRndInteger(start, end);
    result = result+r;
//    console.log('random')
//    console.log(''+result)
    return ''+result;
}
