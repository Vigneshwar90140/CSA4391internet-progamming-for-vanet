document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    const output = document.getElementById('output');
    output.textContent = `Reservation Details:
    From: ${from}
    To: ${to}
    Date: ${date}`;
});
