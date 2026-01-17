let produk = [
  { nama: "iPhone 17 Pro", harga: 23749000, gambar: "iphone_17_pro.png" },
  {
    nama: "iPhone 16 Pro",
    harga: 17499000,
    gambar: "iphone_16_pro.png",
  },
  { nama: "iPhone 16e", harga: 11749000, gambar: "iphone_16e.png" },
  { nama: "iPhone 16", harga: 13999000, gambar: "iphone_16.png" },
  { nama: "iPhone Air", harga: 17999000, gambar: "iphone_air.png" },
  { nama: "iPhone 17", harga: 17249000, gambar: "iphone_17.png" },
];

let keranjang = [];
let totalHarga = 0;

function tampilProduk() {
  let list = document.getElementById("produkList");
  list.innerHTML = "";

  produk.forEach((item, index) => {
    list.innerHTML += `
                        <div class="card" style="display: inline-block; margin: 10px;">
                                <img src="assets/${item.gambar}" alt="${item.nama}" style="width: 200px; height: 200px;" />
                                <h3>${item.nama}</h3>
                                <p>Rp ${item.harga.toLocaleString()}</p>
                                <button onclick="tambahKeranjang(${index})">
                                        Tambah ke Keranjang
                                </button>
                        </div>
                `;
  });
}

function tambahKeranjang(index) {
  keranjang.push(produk[index]);
  totalHarga += produk[index].harga;
  tampilKeranjang();
}

function tampilKeranjang() {
  let tabel = document.getElementById("keranjang");
  tabel.innerHTML = "";

  keranjang.forEach((item, index) => {
    tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>Rp ${item.harga.toLocaleString()}</td>
            </tr>
        `;
  });

  document.getElementById("total").innerText =
    "Rp " + totalHarga.toLocaleString();
}

function logout() {
  alert("Anda berhasil logout");
  window.location.href = "index.html";
}

// Load awal
tampilProduk();
