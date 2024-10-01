/*
connectToDB(); // 3 seconds 
fetchData(); // 2 seconds 
useData(); // 0.5 seconds
*/

// snychronous code
// console.log('CONNECTION');
// console.log('FETCH DATA');
// console.log('USE DATA');

// We usually do not deal with these kind of tasks 
setTimeout(() => {
    console.log('CONNECTION');
    setTimeout(() => {
      console.log('FETCH DATA');
      setTimeout(() => {
        console.log('USE DATA');
      }, 500);
    }, 2000);
  }, 3000);
  
  
  // We have methods below to be used instead