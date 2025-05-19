function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const usia = document.getElementById('usia').value;
    const gender = document.getElementById('gender').value;
    const berat = document.getElementById('berat').value;
    const tinggi = document.getElementById('tinggi').value;
    const email = document.getElementById('email').value.trim();

    let errorMessages = [];

    // Validasi semua field
    if (nama === '') errorMessages.push("Nama lengkap harus diisi");
    if (usia === '' || isNaN(usia) || usia < 1 || usia > 120) errorMessages.push("Usia harus antara 1-120 tahun");
    if (gender === '') errorMessages.push("Pilih jenis kelamin");
    if (berat === '' || isNaN(berat) || berat < 1 || berat > 300) errorMessages.push("Berat badan harus antara 1-300 kg");
    if (tinggi === '' || isNaN(tinggi) || tinggi < 50 || tinggi > 250) errorMessages.push("Tinggi badan harus antara 50-250 cm");
    if (email === '') {
        errorMessages.push("Email harus diisi");
    } else if (!isValidEmail(email)) {
        errorMessages.push("Format email tidak valid");
    }

    // Jika ada error, tampilkan modal
    if (errorMessages.length > 0) {
        showErrorModal(errorMessages);
        return false;
    }

    return true;
}

// Fungsi tampilkan modal error
function showErrorModal(messages) {
    const modal = document.getElementById('errorModal');
    const errorMessageElement = document.getElementById('errorMessage');

    // Gabungkan semua pesan error
    errorMessageElement.innerHTML = messages.join('<br>');

    // Tampilkan modal
    modal.style.display = 'block';

    // Tutup modal saat klik tombol close atau button
    document.querySelector('.close-modal').onclick = function () {
        modal.style.display = 'none';
    };

    document.querySelector('.modal-btn').onclick = function () {
        modal.style.display = 'none';
    };

    // Tutup modal jika klik di luar modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Fungsi validasi email (sama seperti sebelumnya)
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}