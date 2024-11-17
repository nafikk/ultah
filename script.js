// Menangkap form dan mengatur event listener
document.getElementById("nameForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("nameInput").value;
  const dob = document.getElementById('dob').value;
    if(name) {
      if (dob == '2004-11-18') {
        // Menyimpan nama di sessionStorage
        sessionStorage.setItem("userName", name);
        sessionStorage.setItem("tanggalLahir", dob);
        // Redirect ke halaman kartu ucapan
        window.location.href = "card.html";
      } else {
        alert('Kamu bohong yaa!! janga bohong');
      }
    }
});  