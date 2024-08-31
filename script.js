document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.querySelector('.btn-secondary');
    const clientLogos = document.querySelectorAll('.row .col');

    // Fungsi untuk menampilkan lebih banyak logo
    function showMoreClients() {
        clientLogos.forEach((logo, index) => {
            if (index >= 8) { // Menampilkan lebih dari 8 logo
                logo.style.display = 'block';
            }
        });
        showMoreButton.style.display = 'none'; // Sembunyikan tombol setelah diklik
    }

    // Event listener untuk tombol "Show More"
    showMoreButton.addEventListener('click', showMoreClients);
});


document.addEventListener("DOMContentLoaded", function() {
    // Sembunyikan beberapa gambar saat halaman pertama kali dimuat
    const logos = document.querySelectorAll('.logo-item'); // Misalnya, gambar diberi kelas "logo-item"
    const showMoreBtn = document.getElementById('show-more-btn');

    logos.forEach((logo, index) => {
        if (index >= 5) { // Menyembunyikan gambar ke-6 dan seterusnya
            logo.style.display = 'none';
        }
    });

    // Tambahkan event listener ke tombol "Show More"
    showMoreBtn.addEventListener('click', function() {
        logos.forEach((logo, index) => {
            if (index >= 5) { // Menampilkan gambar ke-6 dan seterusnya
                logo.style.display = 'block';
            }
        });
        showMoreBtn.style.display = 'none'; // Menyembunyikan tombol setelah semua gambar ditampilkan
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel('#carouselExample', {
        interval: 3000, // Speed in milliseconds (3000ms = 3 seconds)
        wrap: true, // If true, the carousel cycles continuously, otherwise it will stop at the last slide
        ride: 'carousel'
    });
});