document.getElementById('numTravelers').addEventListener('input', function() {
    const numTravelers = this.value;
    const travelerDetails = document.getElementById('travelerDetails');
    travelerDetails.innerHTML = '';

    for (let i = 0; i < numTravelers; i++) {
        const nameLabel = document.createElement('label');
        nameLabel.textContent = `Traveler ${i + 1} Name:`;
        travelerDetails.appendChild(nameLabel);

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = `travelerName${i}`;
        nameInput.required = true;
        travelerDetails.appendChild(nameInput);

        const ageLabel = document.createElement('label');
        ageLabel.textContent = `Traveler ${i + 1} Age:`;
        travelerDetails.appendChild(ageLabel);

        const ageInput = document.createElement('input');
        ageInput.type = 'number';
        ageInput.name = `travelerAge${i}`;
        ageInput.min = 1;
        ageInput.required = true;
        travelerDetails.appendChild(ageInput);
    }
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const numTravelers = formData.get('numTravelers');
    const travelers = [];

    for (let i = 0; i < numTravelers; i++) {
        const name = formData.get(`travelerName${i}`);
        const age = formData.get(`travelerAge${i}`);
        travelers.push({ name, age });
    }

    console.log('Number of Travelers:', numTravelers);
    console.log('Traveler Details:', travelers);

    alert('Reservation submitted successfully!');
});
