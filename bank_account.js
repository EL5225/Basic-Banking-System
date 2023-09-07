const tambahSaldoBtn = document.getElementById("tambah-saldo");
const kurangSaldoBtn = document.getElementById("kurang-saldo");
const saldoEl = document.getElementById("saldo");
const warningEl = document.getElementById("warning");

let saldo = 0;

const tambahSaldo = () => {
  let tambahSaldo = prompt("Tambahkan Saldo", "");
  saldo += Number(tambahSaldo);

  if (saldo < 0) {
    warningEl.textContent = "Saldo sudah kurang dari 0. Silahkan tambah saldo";
    warningEl.style.color = "red";
    saldo = 0;
  } else {
    warningEl.textContent = "";
  }

  saldoEl.textContent = `Saldo : ${saldo}`;
};

const kurangSaldo = () => {
  let kurangSaldo = prompt("Kurangi Saldo", "");
  saldo -= Number(kurangSaldo);

  if (saldo < 0) {
    warningEl.textContent = "Saldo sudah kurang dari 0. Silahkan tambah saldo";
    warningEl.style.color = "red";
    saldo = 0;
  } else {
    warningEl.textContent = "";
  }

  saldoEl.textContent = `Saldo : ${saldo}`;
};

const main = () => {
  tambahSaldoBtn.addEventListener("click", tambahSaldo);
  kurangSaldoBtn.addEventListener("click", kurangSaldo);
};

main();

// Muhammad Luthfi Ramadhan
// BEJS - 1
