const BOOKING_FORM = document.querySelector('#booking-form');

function sendBooking(booking) {
    fetch("/api/booking", {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(booking), 
    }).then((response)=>response.json()).then(data => {
        console.log(data);
        alert('Мы в течении нескольких минут забронируем ваше место и свяжемся по поводу деталей по оплате.');
    }).catch((error) => {
        console.error(error);
        alert('Ошибка'); 
    })
}

BOOKING_FORM.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the form from submitting traditionally
    const bookingFormData = new FormData(e.target); 

    // Convert FormData to an object
    const booking = {};
    for (let [key, value] of bookingFormData.entries()) {
        booking[key] = value;
    }

    console.log('booking', JSON.stringify(booking, null, 2));  // Stringify for clearer viewing

    // Call sendBooking to handle the data
    sendBooking(booking);
});
