const container = document.getElementById("destinationContainer");


/*-- Displaying the destinations dynamically on the page -*/

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

/*-- Displaying the packages dynamically on the page -*/

const packageContainer = document.getElementById("packageContainer");
if (packageContainer) {
    packages.forEach(item => {
        packageContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card shadow h-100">
                <img
                    src="${item.image}"
                    class="card-img-top"
                    alt="${item.name}">
                <div class="card-body">
                    <h3>${item.name}</h3>
                    <p>⭐ ${item.rating}</p>
                    <p>🕒 ${item.days}</p>
                    <h4>₹${item.price} / Person</h4>
                    <p>${item.description}</p>
                    <button class="btn btn-warning w-100">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

/*-- Displaying the testimonials dynamically on the page -*/

const testimonialContainer = document.getElementById("testimonialContainer");
if (testimonialContainer) {
    testimonials.forEach(review => {
        testimonialContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card shadow h-100">
                <div class="card-body">
                    <h4>${review.name}</h4>
                    <p>📍 ${review.location}</p>
                    <p>${review.rating}</p>
                    <p>"${review.message}"</p>
                </div>
            </div>
        </div>
        `;
    });
}