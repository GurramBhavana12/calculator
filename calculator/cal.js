let output=document.getElementById("input")

function show(num){
    output.value= output.value+num 
}
function cal( ){
    try{
    output.value=eval(output.value);
    }
    catch{
        output.value="error"
    }
}
function clr(){
    output.value=""
}
function del(){
    output.value=output.value.slice(0,-1)
}