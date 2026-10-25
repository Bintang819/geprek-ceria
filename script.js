// Mengambil elemen-elemen dari DOM
const aiForm = document.getElementById('ai-form');
const laparLevel = document.getElementById('lapar-level');
const budgetInput = document.getElementById('budget');
const aiResult = document.getElementById('ai-result');
const aiMessage = document.getElementById('ai-message');

// Menambahkan event listener saat form disubmit
aiForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    const lapar = laparLevel.value;
    const budget = parseInt(budgetInput.value);
    let rekomendasi = "";

    // Logika sederhana simulasi AI
    if (budget < 10000) {
        rekomendasi = "Waduh, budget kamu mepet banget. Mending beli Nasi Putih + Ekstra Sambal Bawang + Es Teh Manis aja. Tetap kenyang walau akhir bulan!";
    } 
    else if (budget >= 10000 && budget < 20000) {
        if (lapar === 'ngemil') {
            rekomendasi = "Cuma pengen ngemil? Paket Snack Jamur Crispy + Kulit Ayam Goreng dengan cocolan Sambal Keju Lumer pas banget buat budgetmu.";
        } else {
            rekomendasi = "Paket Hemat! Nasi Ayam Geprek Bawang level sedang + Air Mineral. Pas kenyangnya, pas harganya!";
        }
    } 
    else if (budget >= 20000 && budget < 35000) {
        if (lapar === 'keroncongan') {
            rekomendasi = "Lapar parah? Langsung sikat Paket Puas: Nasi Sebakul + Ayam Geprek Matah Jumbo + Tahu Tempe + Es Jeruk!";
        } else {
            rekomendasi = "Pilihan pas: Nasi Ayam Geprek Keju Lumer + Es Teh Manis Jumbo. Nikmat dan bikin happy!";
        }
    } 
    else {
        // Budget sultan (> 35000)
        rekomendasi = "Wohooo, Sultan datang! Sikat menu Komplit: Nasi Ayam Geprek Double Keju Lumer, Ekstra Kulit Crispy, plus Milkshake. Lambung full senyum!";
    }

    // Menampilkan hasil
    aiMessage.textContent = rekomendasi;
    aiResult.classList.remove('hidden');
    
    // Menambahkan animasi dengan me-reset class
    aiResult.classList.remove('animate-fade-in');
    void aiResult.offsetWidth; // Trigger reflow agar animasi bisa diulang
    aiResult.classList.add('animate-fade-in');
});