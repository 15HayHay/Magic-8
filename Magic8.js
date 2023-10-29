const prompt = require ('prompt-sync') ()
const userQuestion = prompt('Ask the all knowing magic 8 ball a question: ') 

const number = Math.floor(Math.random()*7)

if (number === 0) {
    console.log('Signs point to yes')
} else if (number === 1){
    console.log('My sources say no')
} else if (number === 2) {
console.log('Reply hazy try again later') 
} else if (number === 3) {
    console.log('Outlook not so good')
} else if (number === 4) {
    console.log('Do not count on it')
} else if (number === 5) {
    console.log('Without a doubt')
} else if (number === 6) {
    console.log('It is decidedly so')
}


