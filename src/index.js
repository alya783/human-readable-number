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
		18: 'eighteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty', 
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
        
   if(Object.keys(numbers).includes(String(number))){
        return numbers[number];
    } else if(number >= 14 && number <= 19){
    	let keyNum = number % 10;
    	return numbers[keyNum] + 'teen';
    } else if(number >= 20 && number <= 99){
    	let ost = number % 10;
        let decimalPart = number - ost;
        return numbers[decimalPart] + " " + numbers[ost];   
    } else if(number >= 100 && number <= 999){
        let hundredPart;
        if(number % 100 === 0){
      	    hundredPart = number / 100;
            return numbers[hundredPart] + " hundred";
        } else{
      	    let ost2 = number % 100;
      	    hundredPart = (number - ost2) / 100;
      	    return numbers[hundredPart] + " hundred " + toReadable(ost2);
        }
    	
    } else{
        console.error(`This case ${number} is not included`);
    }
}
