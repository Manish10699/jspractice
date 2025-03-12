//numbergame
// let winningNumber=13
// let userGuess=+ prompt("enter a number between 1 and 100")//get user input
// console.log(userGuess ,typeof userGuess)//display user input and its data type
// if(userGuess===winningNumber)
// {
//     console.log("U WON!!:)")
// }
// else if(userGuess>winningNumber)
//     {
//         console.log("TOO HIGH!!")
//         }
//         else
//         {
//             console.log("TOO LOW!!")
//             }


//temprature
// let temperature=+ prompt("enter the temparature");
// if(temperature<0)
// {
//     console.log("its freezing");
// }
// else if(temperature<10)
//     {
//         console.log("its cold");
//         }
//         else if(temperature<20)
//             {
//                 console.log("its mild");
//                 }
//                 else if(temperature<30)
//                     {
//                         console.log("its warm");

//                     }
//                     else
//                     {
//                         console.log("its hot");
//                     }

// let weekDays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// let day=+prompt("enter a number between 1 and 6");
// if(day>6)
//     console.log("invalid entry");
// else
// {
//     console.log(weekDays[day-1]);
// }

for(let i=0;i<10;i++)
{
    if(i===6|| i===3)
    {
        continue;
    }
    console.log(i);
}