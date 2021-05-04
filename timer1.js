const args = process.argv.slice(2);
if(args.length >= 1){
  for(const arg of args) {
     if( arg < 0 && parseInt(arg)){
     console.log("print correct number")
  } else {
    setTimeout(() => {
  //  process.stdout.write('\x07');
      process.stdout.write('beep');
  }, Number(arg) * 1000);
  }
 }
}


//No numbers are provided: Easy. It should just not beep at all and end
// immediately since no beeps should get scheduled.
// } else if(args.length === 0){
//   setTimeout(() => {
//     //  process.stdout.write('\x07');
//       process.stdout.write();
//     }, Number(arg) * 1000);
// }

// //An input is a negative number: Ignore/skip any numbers that are negative.
// // We can't schedule anything in the past.

// //An input is not a number: Ignore/skip these as well, 
// //instead of attempting to call setTimeout with a non-number.