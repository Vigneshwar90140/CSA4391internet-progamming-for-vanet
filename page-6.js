document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const train = document.getElementById('train').value;
    const date = document.getElementById('date').value;
    const payment = document.getElementById('payment').value;

    // Validate form data (optional step, for enhanced user experience)
    if (!name || !email || !train || !date || !payment) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a reservation object
    const reservation = {
        name: name,
        email: email,
        train: train,
        date: date,
        payment: payment
    };

    // Simulate payment submission
    console.log('Submitting payment with the following details:', reservation);

    // Show success message (could also redirect or update the UI)
    alert('Payment submitted successfully!');
});
