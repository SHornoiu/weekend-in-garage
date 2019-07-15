var intvl = undefined;

function startCount() {
    const countdown = document.querySelector('.countdown');
    //var launchDate = new Date('May 16, 2019 00:00').getTime();

    var launchDate = new Date().getTime();
    launchDate = launchDate + 182000;
    //console.log('Starting counter at: ' + launchDate);

    if (intvl !== undefined)
        clearInterval(intvl);
    // Update every second
    intvl = setInterval(() => {
        // Get todays date and time (ms)
        const now = new Date().getTime();

        //Distance from now to the launch date
        const distance = launchDate - now;

        // Time calculation
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //Dispaly results
        //<div>${days}<span>Days</span></div>
        //<div>${hours}<span>Hours</span></div>
        countdown.innerHTML = `
        
            <div>${hours}<span>Hours</span></div>
            <div>${mins}<span>Minutes</span></div>
            <div>${seconds}<span>Seconds</span></div>
        `;

        // If launch date passed
        if (distance < 0) {
            // Stop countdown
            countdown.style.color = '#17a2b8';
            countdown.innerHTML = 'Finish';
        }
    }, 1000);
}