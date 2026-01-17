function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Akun statis (tanpa database)
  if (username === "admin" && password === "admin123") {
    // Redirect ke halaman admin
    window.location.href = "admin.html";
  } else if (username === "user" && password === "user123") {
    // Redirect ke halaman user
    window.location.href = "user.html";
  } else {
    alert("LOGIN GAGAL ! \nUsername atau password tidak ditemukan.");
  }

  return false; // Mencegah reload halaman
}
