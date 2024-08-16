document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const sessionElement = document.getElementById("session");
    const toggleButton = document.getElementById("toggle-btn");

    let is24HourFormat = false;

    function updateTime() {
        const now = new Date(); 
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let session = "";
        if (!is24HourFormat) {
            session = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; 
        }

        
        dateElement.textContent = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        dayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
        sessionElement.textContent = session;
    }

    toggleButton.addEventListener("click", function () {
        is24HourFormat = !is24HourFormat;
        toggleButton.textContent = is24HourFormat ? "24-hr" : "12-hr";
        sessionElement.classList.toggle("hidden", is24HourFormat);
    });

    setInterval(updateTime, 1000);
    updateTime();
});
