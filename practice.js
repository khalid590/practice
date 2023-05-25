
var n = parseInt(prompt("Enter the value: "))
var sum = 0;
var series = " ";

for(var i = 1; i <=n; i++ ){
    sum = sum + i**2;
    series = series + (i**2).toString();
if(i == n){
    continue;
}
    series = series + " + ";
}
console.log(`${series} = ${sum}`)
