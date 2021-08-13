module.exports = function toReadable (number) {
const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        15: 'fifteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty', 
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
        
    for(var k in numbers){
        if(+k === number){
           return numbers[k];
        } else if(number > 13 && number < 20){
            let numArr = number.toString().split('');
            if(+k === +numArr[1]){
				if(numbers[k].charAt(numbers[k].length - 1) === 't'){
					return numbers[k] + 'een';
				}
               return numbers[k] + 'teen';
            }
        } else if(number > 20 && number < 100){
            let numArr2 = [];
            while(number > 0){
                for(let i = 1; number > 0; i *= 10){
                    let n = (number % 10) * i;
                    numArr2.unshift(n);
                    number = parseInt(number / 10);
                }
            }
			
			let first = ' ';
			let second = ' ';

			for (var k in numbers){

				if((+k === numArr2[0]) && (numArr2[0] % 10 === 0) && numArr2[1] === 0){
					return numbers[k];
            	}
				
				if( +k === numArr2[0]){
					first = numbers[k];
            	}

				if( +k === numArr2[1]){
					second = numbers[k];
            	}
			}
            
			return (first + " " + second);	
	
    } else if(number >= 100 && number < 1000){
		let separateNum = number.toString().split('');  
        let numArr3 = [separateNum[0], separateNum[1] + separateNum[2]];	
		if(+k === +numArr3[0] && (number % 100 === 0)){
            return numbers[k] + ' hundred';
        } else if(number % 100 !== 0){
		
		let fir = ' ';
		let sec = ' ';

		if (+numArr3[1] < 20){
		for (var k in numbers){
			if( +k === +numArr3[0]){
				fir = numbers[k] + ' hundred ';
        	}

			if( +k === +numArr3[1]){
				sec = numbers[k];
            }else{
				let arr = (+numArr3[1]).toString().split('');
				if(+k === +arr[1]){
				if(numbers[k].charAt(numbers[k].length - 1) === 't'){
				   sec = numbers[k] + 'een';
				}
               	   sec = numbers[k] + 'teen';
            	}
			}	
       	 }	
			return fir + '' + sec;
		}
        
        let integer = +numArr3[1];
        let arr1 = [];
        while(integer > 0){
        for(let j = 1; integer > 0; j *= 10){
                let p = (integer % 10) * j;
                arr1.unshift(p);
                integer = parseInt(integer / 10);
            }
        }
					
        let int1 = '';
        let int2 = '';
                    
        for (var k in numbers){
						
			if(+k === arr1[0]){
                int1 = numbers[k];
            }

			if(arr1[1] === 0) continue;
						
            if(+k === arr1[1]){
                int2 = numbers[k];
            } 			
		}
				
        sec = int1 + " " + int2;
            
		return (fir +" "+ sec);
	  }
	}
  }
}
