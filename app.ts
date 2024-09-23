window.onload = () => {
    const clockElement = document.getElementById('clock') as HTMLDivElement;
    const toggleButton = document.getElementById('toggleFormat') as HTMLButtonElement;
    let is24HourFormat = true;

    function updateClock() {
        const now = new Date();
        let timeString = is24HourFormat ? now.toTimeString().substring(0, 8) : now.toLocaleTimeString();
        clockElement.textContent = timeString;
    }

    toggleButton.addEventListener('click', () => {
        is24HourFormat = !is24HourFormat;
        updateClock(); // Update clock immediately upon toggling
    });

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the time immediately
}
