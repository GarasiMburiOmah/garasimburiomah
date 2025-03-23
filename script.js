console.log("Garasi Mburi Omah siap dijalankan!");
document.addEventListener("keydown", function(event) {
    console.log("Tombol ditekan:", event.key); // Debugging: Cek di Console apakah tombol terdeteksi
    if (event.key === "Escape") {
        window.location.href = "index.html"; // Ganti ke halaman utama
    }
});
function searchCars() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cars = document.querySelectorAll(".mobil");

    cars.forEach(car => {
        const title = car.querySelector("h3").innerText.toLowerCase();
        if (title.includes(query)) {
            car.style.display = "block"; // Tampilkan jika cocok
        } else {
            car.style.display = "none";  // Sembunyikan jika tidak cocok
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Garasi Mburi Omah siap dijalankan!");
    const carContainer = document.getElementById("car-list"); // Pastikan ini ID container mobil
    const carItems = Array.from(document.querySelectorAll(".mobil"));

    const cars = [
        {
            name: "Toyota Avanza G 1.3 2015",
            price: "Rp 129.000.000",
            soldOut: true
        },
        {
            name: "Xpander GLS 2021",
            price: "Rp 174.000.000",
            soldOut: true
        },
        {
            name: "Brio 2014 type E",
            price: "Rp 98.000.000",
            soldOut: false
        },
        {
            name: "All New Avanza 2012 Type G Manual",
            price: "Rp 115.000.000",
            soldOut: false
        }
    ];

    // **1. Urutkan mobil yang belum sold out ke atas**
    carItems.sort((a, b) => {
        const carA = cars.find(car => car.name === a.querySelector("h3").innerText);
        const carB = cars.find(car => car.name === b.querySelector("h3").innerText);
        return (carA.soldOut === carB.soldOut) ? 0 : carA.soldOut ? 1 : -1;
    });

    // **2. Kosongkan container dan tambahkan mobil yang sudah diurutkan**
    carContainer.innerHTML = "";
    carItems.forEach(carItem => carContainer.appendChild(carItem));

    // **3. Tambahkan SOLD OUT label jika diperlukan**
    carItems.forEach((carItem) => {
        const carName = carItem.querySelector("h3").innerText;
        const carData = cars.find(car => car.name === carName);

        if (carData && carData.soldOut) {
            carItem.classList.add("sold-out");

            const soldOutLabel = document.createElement("div");
            soldOutLabel.classList.add("sold-out-label");
            soldOutLabel.innerText = "🚫 SOLD OUT";
            carItem.appendChild(soldOutLabel);
        }
    });
    // Cek apakah mobil ini SOLD OUT
    const car = cars.find(car => car.id === id);
    if (car && car.soldOut) {
        const overlay = document.createElement("div");
        overlay.classList.add("sold-out-overlay");
        overlay.innerText = "SOLD OUT";

        document.body.appendChild(overlay);
    }
});






