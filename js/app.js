const container = document.getElementById("destinationContainer");

if (container) {
    destinations.forEach(place => {
        container.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card shadow h-100">
                <img
                    src="${place.image}"
                    class="card-img-top"
                    alt="${place.name}">
                <div class="card-body">
                    <h3>${place.name}</h3>
                    <p>📍 ${place.location}</p>
                    <p>⭐ ${place.rating}</p>
                    <p>🕒 ${place.days}</p>
                    <h4>₹${place.price} / Person</h4>
                    <p>${place.description}</p>
                    <button class="btn btn-warning w-100">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}