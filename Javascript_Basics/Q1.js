function displayDateTime() {
    const now = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
const hours = now.getHours() % 12 || 12; 

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

   
    const meridian = now.getHours() >= 12 ? 'PM' : 'AM';

  
    const currentTime = `${hours} ${meridian} : ${minutes} : ${seconds}`;
    const output = `Today is : ${dayOfWeek}. \nCurrent time is : ${currentTime}`;

   
    console.log(output);
}

displayDateTime();
