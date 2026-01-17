let produk = [
  { nama: "iPhone 17 Pro", harga: 23749000 },
  { nama: "iPhone 16 Pro", harga: 17499000 },
  { nama: "iPhone 16e", harga: 11749000 },
  { nama: "iPhone 16", harga: 13999000 },
  { nama: "iPhone Air", harga: 17999000 },
  { nama: "iPhone 17", harga: 17249000 },
];

function tampilProduk() {
  let tabel = document.getElementById("tabelProduk");
  tabel.innerHTML = "";

  produk.forEach((item, index) => {
    tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>Rp ${item.harga.toLocaleString()}</td>
                <td>
                    <button class="edit" onclick="editProduk(${index})">Edit</button>
                    <button class="delete" onclick="hapusProduk(${index})">Hapus</button>
                </td>
            </tr>
        `;
  });
}

function tambahProduk() {
  let nama = document.getElementById("nama").value;
  let harga = document.getElementById("harga").value;

  produk.push({ nama, harga: Number(harga) });

  document.getElementById("nama").value = "";
  document.getElementById("harga").value = "";

  tampilProduk();
  return false;
}

function editProduk(index) {
  let namaBaru = prompt("Edit nama produk", produk[index].nama);
  let hargaBaru = prompt("Edit harga produk", produk[index].harga);

  if (namaBaru && hargaBaru) {
    produk[index].nama = namaBaru;
    produk[index].harga = Number(hargaBaru);
    tampilProduk();
  }
}

function hapusProduk(index) {
  if (confirm("Yakin ingin menghapus produk ini?")) {
    produk.splice(index, 1);
    tampilProduk();
  }
}

function logout() {
  alert("Anda berhasil logout");
  window.location.href = "index.html";
}

// Load awal
tampilProduk();
