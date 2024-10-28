const fruit = ["apple","banana","cherry"]

fruit.forEach(f => console.log(f));

function print(item){
    console.log(item);
}

fruit.forEach(print);

[999,444,222].forEach(n=>console.log(n));

["apple","banana","cherry"].forEach((f,i,a) => console.log(i,f,a));

[11,14,16,25].forEach((n,i,a)=> i ? console.log(n - a[i-1]) : 0);