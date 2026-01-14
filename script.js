function updateClock() {
    const now = new Date();
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the rotation angles for each hand
     const hoursDeg = (hours % 12) * 30 + (minutes / 60) * 30;
     const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
     const secondsDeg = seconds * 6;
   

    // Apply the rotation to the hands
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
