



let counter = 0;

function grow(c){
    console.log("C is", c);
    const limit = 9;
    if(c > limit){
        return;
    }
    return grow(c + 1);
}

console.log(grow(1));

fruit = ["apple", "bananas", "cherry"]
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log(fruit.pop())

function show(list){
    const one = list.pop();
    if(one !== undefined){
        console.log(one)
        show(list);
    }
}
show(fruit);