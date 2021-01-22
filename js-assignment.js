//      Problem 1: Kilometer to Meter

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    } else {
        return 'This is not a valid input';
    }
}
//var outputResult = kilometerToMeter(12);
// console.log(outputResult);






//         Problem 2: Budget Calculator


function budgetCalculator(pencil, eraser, chalk) {

    var pencilCost = pencil * 10;                  // 1 pencil costs 10$
    var eraserCost = eraser * 5;                    // 1 eraser costs 5$
    var chalk = chalk * 50;                        //1 chalk costs 50$
    var totalCost = pencilCost + eraserCost + chalkCost;
    return totalCost;
}
//var totalBudget = budgetCalculator(3, 6, 9);
 // console.log(totalBudget);




//      Problem 3: Hotel Cost



function hotelCost(days) {
    var cost = 0;

   if(days > 0){
    if (days <= 10) {
        cost = days * 50;          // 50$ a day for first 10 days.
        cost = days * 50;
    } else if (days <= 20) {
        var firstCost = 10 * 50;
        var remainingDay = days - 10;
        var secondCost = remainingDay * 30      // 30$ a day after first 10 days to 20 days.
        cost = firstCost + secondCost;
    } else {
        var firstCost = 10 * 50;
        var secondCost = 10 * 30;
        var remainingDay = days - 20;
        var thirdCost = remainingDay * 20;      // 20$ a day after first 20 days.
        cost = firstCost + secondCost + thirdCost;
    }
    return cost;
   }else{
       return 'Please input correct days.'
   }
}
//var totalCost = hotelCost(12);
// console.log(totalCost);




//   Problem 4: Mega friend


var friends = ['Borhan', 'Imran', 'Deep', 'MrRahim', 'HojoborolMia', 'Ashraf', 'Matthew', 'George']
var maxWord = '';
function megaFriend(friends){
  for(var i = 0; i < friends.length; i++){
    if(friends[i].length > maxWord.length){
      maxWord = friends[i] ;        
    }
  } return maxWord;   
} 
//var biggestName = megaFriend(friends);
// console.log(biggestName);
