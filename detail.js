// Data Mobil
const cars = [
    {
        name: "Toyota Avanza G 1.3 2015",
        price: "Rp 129.000.000",
        description: `
            <p>
                Toyota Avanza G 1.3 tahun 2015 adalah pilihan ideal bagi keluarga yang membutuhkan kendaraan serbaguna dengan konsumsi bahan bakar yang irit.
                Dengan kapasitas 7 penumpang, mobil ini menawarkan kenyamanan dalam berkendara, baik untuk perjalanan dalam kota maupun luar kota.
            </p>
            <p>
                Ditenagai mesin 1.300 cc yang efisien, Avanza ini juga dilengkapi fitur modern seperti AC dingin, power window, serta sistem keselamatan ABS dan airbag,
                menjadikannya kendaraan yang siap pakai tanpa perlu banyak perawatan tambahan.
            </p>
            <strong>🌟 Keunggulan:</strong>
            <ul>
                <li>✅ Irit bahan bakar, cocok untuk perjalanan jauh</li>
                <li>✅ Ruang kabin luas dan nyaman</li>
                <li>✅ Mesin halus, perawatan mudah</li>
                <li>✅ Fitur modern untuk keamanan & kenyamanan</li>
            </ul>
        `,
        details: `
            <ul>
                <li>🚗 <strong>Tahun:</strong> 2015</li>
                <li>⚙️ <strong>Transmisi:</strong> Manual</li>
                <li>🔧 <strong>Mesin:</strong> 1.300 cc</li>
                <li>⛽ <strong>Bahan Bakar:</strong> Bensin</li>
                <li>👨‍👩‍👧‍👦 <strong>Kapasitas:</strong> 7 Penumpang</li>
                <li>🎨 <strong>Warna:</strong> Hitam Elegan</li>
                <li>🔢 <strong>Plat:</strong> H Semarang</li>
                <li>💰 <strong>Harga:</strong> Rp129 Juta (NEGO sampai DEAL!)</li>
                <li>📍 <strong>Lokasi:</strong> Pati</li>
                <li>📲 <strong>Minat? Hubungi WA:</strong> 0812-1229-6241</li>
            </ul>
        `,
        images: [
            "assets/Toyota Avanza G 1.3 2015.jpg",
            "assets/Toyota Avanza G 1.3 2015-2.jpg",
            "assets/Toyota Avanza G 1.3 2015-3.jpg",
            "assets/Toyota Avanza G 1.3 2015-4.jpg",
            "assets/Toyota Avanza G 1.3 2015-5.jpg",
            "assets/Toyota Avanza G 1.3 2015-6.jpg",
            "assets/Toyota Avanza G 1.3 2015-7.jpg"
        ]
    },
    {
        name: "Xpander GLS 2021",
        price: "Rp 174.000.000",
        description: `
            <p>
                Mitsubishi Xpander GLS 2021 menawarkan desain modern dan fitur lengkap yang cocok untuk keluarga maupun perjalanan bisnis.
                Ditenagai mesin 1.500 cc yang bertenaga, mobil ini tetap irit bahan bakar dan nyaman untuk perjalanan jauh.
            </p>
            <p>
                Dengan fitur sensor parkir, kamera mundur, serta ruang kabin yang luas, Xpander memberikan pengalaman berkendara yang lebih aman dan nyaman.
            </p>
            <strong>🌟 Keunggulan:</strong>
            <ul>
                <li>✅ Desain modern & sporty</li>
                <li>✅ Fitur lengkap: Sensor parkir, kamera mundur</li>
                <li>✅ Performa handal & hemat BBM</li>
            </ul>
        `,
        details: `
            <ul>
                <li>🚗 <strong>Tahun:</strong> 2021</li>
                <li>⚙️ <strong>Transmisi:</strong> Manual</li>
                <li>🔧 <strong>Mesin:</strong> 1.500 cc</li>
                <li>⛽ <strong>Bahan Bakar:</strong> Bensin</li>
                <li>👨‍👩‍👧‍👦 <strong>Kapasitas:</strong> 7 Penumpang</li>
                <li>🎨 <strong>Warna:</strong> Hitam</li>
                <li>🔢 <strong>Plat:</strong> H Semarang</li>
                <li>💰 <strong>Harga:</strong> Rp174 Juta (NEGO sampai DEAL!)</li>
                <li>📍 <strong>Lokasi:</strong> Pati</li>
                <li>📲 <strong>Minat? Hubungi WA:</strong> 0812-1229-6241</li>
            </ul>
        `,
        images: [
            "assets/Xpander GLS 2021.jpg",
            "assets/Xpander GLS 2021-2.jpg",
            "assets/Xpander GLS 2021-3.jpg",
            "assets/Xpander GLS 2021-4.jpg",
            "assets/Xpander GLS 2021-5.jpg"
        ]
    },
    {
        name: "Brio 2014 Type E",
        price: "Rp 98.000.000",
        description: `
            <p>
                Honda Brio Type E tahun 2014 merupakan city car yang lincah dan hemat bahan bakar, ideal untuk penggunaan harian di perkotaan.
                Dengan desain sporty dan mesin 1.200 cc yang responsif, mobil ini sangat cocok bagi anak muda maupun pengguna yang mencari kendaraan kompak dan efisien.
            </p>
            <p>
                Kepraktisan dan biaya perawatan yang rendah menjadikan Brio sebagai pilihan populer di kelasnya.
            </p>
            <strong>🌟 Keunggulan:</strong>
            <ul>
                <li>✅ Irit bahan bakar, cocok untuk harian</li>
                <li>✅ Mesin handal dan perawatan mudah</li>
                <li>✅ Desain sporty dan modern</li>
            </ul>
        `,
        details: `
            <ul>
                <li>🚗 <strong>Tahun:</strong> 2014</li>
                <li>⚙️ <strong>Transmisi:</strong> Manual</li>
                <li>🔧 <strong>Mesin:</strong> 1.200 cc</li>
                <li>⛽ <strong>Bahan Bakar:</strong> Bensin</li>
                <li>👨‍👩‍👧‍👦 <strong>Kapasitas:</strong> 5 Penumpang</li>
                <li>🎨 <strong>Warna:</strong> Hitam</li>
                <li>🔢 <strong>Plat:</strong> H Semarang</li>
                <li>💰 <strong>Harga:</strong> Rp98 Juta (NEGO sampai DEAL!)</li>
                <li>📍 <strong>Lokasi:</strong> Pati</li>
                <li>📲 <strong>Minat? Hubungi WA:</strong> 0812-1229-6241</li>
            </ul>
        `,
        images: [
            "assets/Brio 2014 type E.jpg",
            "assets/Brio 2014 type E-2.jpg",
            "assets/Brio 2014 type E-3.jpg",
            "assets/Brio 2014 type E-4.jpg",
            "assets/Brio 2014 type E-5.jpg",
            "assets/Brio 2014 type E-6.jpg"
        ]
    },
    {
        name: "All New Avanza 2012 Type G Manual",
        price: "Rp 115.000.000",
        description: `
            <p>
                All New Avanza 2012 Type G Manual adalah mobil keluarga yang terkenal dengan kehandalan dan efisiensinya.  
                Dengan desain yang tetap stylish serta mesin 1.300 cc yang irit bahan bakar, mobil ini sangat cocok untuk perjalanan harian maupun jarak jauh.
            </p>
            <p>
                Dilengkapi dengan fitur kenyamanan seperti AC dingin, power window, serta sistem keselamatan ABS dan airbag,  
                Avanza ini menawarkan pengalaman berkendara yang aman dan nyaman bagi seluruh anggota keluarga.
            </p>
            <strong>🌟 Keunggulan:</strong>
            <ul>
                <li>✅ Mesin hemat BBM</li>
                <li>✅ Kapasitas 7 penumpang, cocok untuk keluarga</li>
                <li>✅ Perawatan mudah & sparepart melimpah</li>
                <li>✅ Suspensi nyaman untuk perjalanan jauh</li>
            </ul>
        `,
        details: `
            <ul>
                <li>🚗 <strong>Tahun:</strong> 2012</li>
                <li>⚙️ <strong>Transmisi:</strong> Manual</li>
                <li>🔧 <strong>Mesin:</strong> 1.300 cc</li>
                <li>⛽ <strong>Bahan Bakar:</strong> Bensin</li>
                <li>👨‍👩‍👧‍👦 <strong>Kapasitas:</strong> 7 Penumpang</li>
                <li>🎨 <strong>Warna:</strong> Hitam</li>
                <li>🔢 <strong>Plat:</strong> K Pati</li>
                <li>💰 <strong>Harga:</strong> Rp115 Juta (NEGO sampai DEAL!)</li>
                <li>📍 <strong>Lokasi:</strong> Pati</li>
                <li>📲 <strong>Minat? Hubungi WA:</strong> 0812-1229-6241</li>
            </ul>
        `,
        images: [
            "assets/All New Avanza 2012 Type G Manual-1.jpg",
            "assets/All New Avanza 2012 Type G Manual-2.jpg",
            "assets/All New Avanza 2012 Type G Manual-3.jpg",
            "assets/All New Avanza 2012 Type G Manual-4.jpg",
            "assets/All New Avanza 2012 Type G Manual-5.jpg"
        ]
    }    
];


// Ambil parameter URL
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'));

let imgIndex = 0;
let carImages = [];

if (!isNaN(carId) && carId >= 0 && carId < cars.length) {
    const car = cars[carId];
    document.getElementById("detail-title").innerText = car.name;
    document.getElementById("detail-price").innerText = car.price;
    document.getElementById("description-content").innerHTML = car.description;
    document.getElementById("detail-content").innerHTML = car.details;
    document.getElementById("description-content").style.textAlign = "left";
    document.getElementById("detail-content").style.textAlign = "left";

    carImages = car.images;
    const imgElement = document.getElementById("detail-img");
    imgElement.src = carImages[imgIndex];
    imgElement.addEventListener("click", openModal);
    
    // Cek apakah mobil SOLD OUT
    if (car.soldOut) {
        document.getElementById("sold-out-overlay").classList.remove("hidden");
    }

    window.prevImage = function () {
        imgIndex = (imgIndex - 1 + carImages.length) % carImages.length;
        imgElement.src = carImages[imgIndex];
    };

    window.nextImage = function () {
        imgIndex = (imgIndex + 1) % carImages.length;
        imgElement.src = carImages[imgIndex];
    };
} else {
    document.querySelector(".detail-container").innerHTML = "<h2>Mobil tidak ditemukan</h2>";
}


// Fungsi untuk membuka modal gambar
function openModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = carImages[imgIndex];
}

// Fungsi untuk menutup modal gambar
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Navigasi gambar dalam modal
function prevImageModal() {
    prevImage();
    document.getElementById("modalImg").src = carImages[imgIndex];
}

function nextImageModal() {
    nextImage();
    document.getElementById("modalImg").src = carImages[imgIndex];
}

// Event listener untuk menutup modal saat klik di luar gambar
window.addEventListener("click", function (e) {
    const modal = document.getElementById("imageModal");
    if (e.target === modal) {
        closeModal();
    }
});
// Urutkan mobil: yang belum SOLD OUT di atas, yang SOLD OUT di bawah
cars.sort((a, b) => (a.soldOut === b.soldOut) ? 0 : a.soldOut ? 1 : -1);
cars.forEach((car, index) => {
    const carElement = document.createElement("div");
    carElement.classList.add("car-item");
    
    let soldOutLabel = car.soldOut ? `<div class="sold-out">🚫 SOLD OUT</div>` : "";

    carElement.innerHTML = `
        <img src="${car.images[0]}" alt="${car.name}">
        ${soldOutLabel}
        <h3>${car.name}</h3>
        <p>${car.price}</p>
        <a href="detail.html?id=${index}" class="btn ${car.soldOut ? 'disabled' : ''}">Lihat Detail</a>
    `;

    document.getElementById("car-list").appendChild(carElement);
});

