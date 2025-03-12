//maps
const data= new Map();
data.set('key1','value1');
data.set('key2','value2');
data.set('key3','value3');
data.set('key4','value4');
data.set('key5','value5');
data.set(4,'value2');
console.log(data)
for(let key of data.keys())
    {
    console.log(key);
}

