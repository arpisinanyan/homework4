

//2
const triangleStars = function(num1){
    while(num1 > 0){
    let num12 = num1;
      let line = '';
      while(num12 > 0){
  
        line = line + 'o ';
        num12 = num12 - 1;      
    }
    console.log(line)
    num1 = num1 -1;
    }
  }

//3
 const array = function(multArray) {
  	const mult1Array = multArray[0];
    const mult2Array = multArray[1];
    let singleArray = [];
    let i1 = 0;
    let i2 = 0;
    while (mult1Array.length > singleArray.length) {
      singleArray[i1] = mult1Array[i1];
      i1 = i1+1;
    }
    
    while (mult1Array.length + mult2Array.length > singleArray.length) {
      singleArray[i2+i1] = mult2Array[i2];
      i2 = i2+1;
    }
    
    return singleArray
  }

//4
  const findMinMax = function(arr, argument) {
   	let i=0;
      	let value = arr[0];
    if (argument === true){
      	while (i < arr.length){
        	if (arr[i] > value){
          		value = arr[i];
       		 } 
          i = i+1;
        }
    }
    else if (argument === false) {
		while (i < arr.length){
        if (arr[i] < value){
        	value = arr[i]
        	} 
        i = i+1;
      	}
    }
    	return value;
}

//5
const forEach = function (array5, func) {
  	let i = 0;
    while (i < array5.length){
    	func(array5[i]);
    	i = i + 1;
    }
  }

//6
const sum = function (array6){
  	let i = 0;
  	let s = 0;
  	while (i < array6.length){
    	s = s + array6[i];
    	i = i + 1;
    }
    return s;
  }

//7
const reverse = function(str6){
  	let i = str6.length-1;
    let rev = '';
    while (i >= 0){
      rev = rev + str6[i];
	  i = i - 1;    	
    }
    return rev
  }

//8
 const checkerboard = function(num){
  	let line = '';
    let linelength = 0;
    while(linelength < num){
    	line = line + 'o ';
        linelength = linelength + 1;
    }
    while(linelength > 0){
      if (linelength % 2) {
      	console.log(' ' + line)
      } else{
      console.log(line)
      }
      linelength = linelength - 1;
    }
  }

