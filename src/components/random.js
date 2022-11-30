// declare all characters
const characters ='BINGO';

export default function generateBingo() {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < 1; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result = result+ Math.floor(Math.random()*70)+1
//    console.log('random')
//    console.log(''+result)
    return ''+result;
}
