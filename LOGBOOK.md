Logbook Pemanfaatan AI (AI_LOGBOOK.md)

Nama Produk: Ayam Geprek Ceria - Landing Page & Web Ordering System

Pengembang: Debby Ramadhani

Tanggal Pelaksanaan: 2026

Tahap 1: Eksplorasi Ide & Perancangan Solusi

Tujuan: Menentukan konsep produk digital, fitur utama, dan struktur website UMKM kuliner.

Prompt Utama yang Digunakan:

"Bantu saya merancang konsep website interaktif untuk usaha Ayam Geprek Ceria. Fitur apa saja yang cocok untuk website UMKM kuliner ini agar memudahkan pelanggan melakukan pemesanan?"

Saran/Output dari AI:

Rekomendasi fitur: Hero section menarik, katalog menu dengan variasi level pedas, keranjang belanja interaktif, kalkulasi otomatis harga, dan integrasi pemesanan ke WhatsApp.

Struktur navigasi: Beranda, Menu, Ulasan, dan Kontak.

Validasi & Modifikasi Mandiri:

Mengadopsi rekomendasi fitur keranjang belanja dan pemesanan via WhatsApp.

Menyesuaikan skema warna brand menjadi warna merah cabai (#D9251D) dan kuning keju/krispi (#FFB800) agar selaras dengan identitas visual Ayam Geprek Ceria.

Tahap 2: Penyusunan Kerangka Kode (Scaffolding)

Tujuan: Merancang struktur HTML5, styling Tailwind CSS, dan komponen JavaScript untuk keranjang interaktif.

Prompt Utama yang Digunakan:

"Buatkan single-file HTML website Ayam Geprek Ceria menggunakan Tailwind CSS dan Vanilla JavaScript yang mencakup navbar, hero section, katalog menu dengan pilihan level pedas, dan drawer keranjang belanja."

Saran/Output dari AI:

Memberikan template struktur HTML5 lengkap dengan script CDN Tailwind CSS, Font Awesome, serta logika dasar array objek cart[] untuk menampung pesanan.

Validasi & Modifikasi Mandiri:

Mengganti URL gambar bawaan AI dengan aset gambar resolusi tinggi dari Unsplash yang relevan dengan makanan ayam krispi pedas.

Menambahkan fitur pemilihan level pedas (Level 0 - Level 5) dan variasi sambal (Bawang, Ijo, Keju) secara mandiri pada elemen modal/pilihan item.

Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)

Tujuan: Memperbaiki masalah format teks checkout WhatsApp dan perataan tampilan responsif di perangkat mobile.

Prompt Utama yang Digunakan:

"Bagaimana cara mengubah isi array cart JavaScript menjadi format string URL WhatsApp (wa.me) yang rapi dengan encodeURIComponent agar pesan yang terkirim tidak error?"

Saran/Output dari AI:

Memberikan fungsi encodeURIComponent() untuk mengonversi karakter baris baru (\n) dan spasi ke format URL yang valid.

Validasi & Modifikasi Mandiri:

Menguji hasil tautan WhatsApp di perangkat mobile secara langsung.

Memodifikasi template pesan WhatsApp agar mencantumkan rincian item, level pedas, total harga, alamat pengiriman, dan metode pembayaran secara lebih sistematis.

Tahap 4: Refleksi & Penjelasan Kode

Tujuan: Memastikan pemahaman mendalam terhadap seluruh alur kode yang dihasilkan dan dieksekusi.

Verifikasi Pemahaman:

Manipulasi DOM: Memahami penggunaan document.getElementById() dan innerHTML untuk memperbarui jumlah badge keranjang dan daftar belanja secara dinamis.

Responsivitas: Memahami penggunaan utility classes Tailwind CSS seperti md:flex, grid-cols-1 md:grid-cols-3 untuk memastikan layout rapi di layar HP maupun desktop.

API WhatsApp: Memahami pembentukan URL dinamis https://wa.me/PHONE_NUMBER?text=MESSAGE untuk menyelesaikan alur checkout tanpa backend server.

Validasi & Modifikasi Mandiri:

Melakukan pengujian alur pesanan dari memilih menu hingga tombol "Kirim via WhatsApp" terhubung sempurna ke nomor admin toko.
