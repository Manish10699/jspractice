const val='value1';

function myapp(){
    
    function func(){
    // {   const val='value2222';
        console.log("sonu sharingaa :"+val);
    }
    func();
    console.log(val)
}
myapp();

function myapp1(callback){
console.log("callback block")
callback();
}
myapp1(myapp)