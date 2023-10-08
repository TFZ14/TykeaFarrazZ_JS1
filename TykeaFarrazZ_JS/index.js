// fungsi If-Else
document.getElementById("tombolUmur").onclick = function(){
    var umur = parseFloat(document.getElementById("inputNilai").value);
    var tampilkanUmur = document.getElementById("tampilkanUmur");
    
    if (!isNaN(umur)) {
        if (umur >= 0 && umur < 5) {
            tampilkanUmur.textContent = "Balita atau Belum Sekolah";
        } else if (umur >= 5 && umur < 13) {
            tampilkanUmur.textContent = "Sekolah Dasar"
        } else if (umur >= 13 && umur < 16) {
            tampilkanUmur.textContent = "Sekolah Menengah Pertama"
        } else if (umur >= 16 && umur < 19) {
            tampilkanUmur.textContent = "Sekolah Menengah Atas"
        } else {
            tampilkanUmur.textContent = "Kuliah atau Bekerja"
        }
    } else {
        tampilkanUmur.textContent = "Masukkan umur yang valid (dalam bentuk angka).";
    }
}

// function switch
document.getElementById("tombolMisteri").onclick = function(){
    var kotakMisteri = parseFloat(document.getElementById("inputMisteri").value);
    var tampilkanMisteri = document.getElementById("tampilkanMisteri");

    switch (kotakMisteri) {
        case 1:
            tampilkanMisteri.textContent = "Wow! Kamu dapat toko bunga!";
            break
        case 2:
            tampilkanMisteri.textContent = "Tetot! Coba lagi";
            break
        case 3:
            tampilkanMisteri.textContent = "Selamat! Anda mendapat kecerdasan melimpah!";
            break
        default:
            tampilkanMisteri.textContent = "Gaada, gaada bang. Pilih yang di atas aja.";
            break
    }
}

// for
document.getElementById("tombolAngka").onclick = function() {
    var inputAngka = parseInt(document.getElementById("inputAngka").value);
    var inputDibagi = parseInt(document.getElementById("inputDibagi").value);
    
    if (!isNaN(inputAngka) && !isNaN(inputDibagi)) {

        var hasilFor = "";
    
        for (let i = inputAngka; i >= 1; i--) {
            if (i % inputDibagi === 0) {
                hasilFor += i + " ";
            }
        }
    
        document.getElementById("tampilkanAngka").textContent = hasilFor;
    } else {
        document.getElementById("tampilkanAngka").textContent = "Hanya input angka.";
    }
}

// while
document.getElementById("tombolWhile").onclick = function() {
    var inputWhile = parseInt(document.getElementById("inputWhile").value);
    var inputBatasan = parseInt(document.getElementById("inputBatasan").value);

    let hasilWhile = "";
    let i = inputWhile;

    while (i <= inputBatasan) {
        hasilWhile += i + ", ";
        i++;
    }

    document.getElementById("tampilkanWhile").textContent = hasilWhile;
}

// do while
document.getElementById("tombolDowhile").onclick = function() {
    var inputDowhile = parseInt(document.getElementById("inputDowhile").value);
    var inputDobatas = parseInt(document.getElementById("inputDobatasan").value);

    let hasilDowhile = "";
    let i = inputDowhile;

    do {
        hasilDowhile += i + ". ";
        i++;
    } while (i <= inputDobatas);

    document.getElementById("tampilkanDowhile").innerHTML = hasilDowhile;
}

