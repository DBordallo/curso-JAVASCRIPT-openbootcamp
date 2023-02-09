

const num = 6
var series = new Array(num); 

series.fill;  
series[0] = 1; 
series[1] = 1;  


let i = 2;  
while(i < num) {

    series[i] = series[i-1] + series[i-2];  
    i++;  
}

console.log(series); 

