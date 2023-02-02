// function func(y1,y2,y3){
//     const [x1,[result]]=y3
//     console.log(result)
// }
// const MyArray = [rock,paper ,scicor,lizard,spock]
// func

function* gen1 (){

    console.log(yield 1);
    console.log(yield 2);
    console.log(yield 3);
}

const iterator = gen1()

console.log(iterator.next('a'.value))
console.log(iterator.next('b'.value))
console.log(iterator.next('c'.value))