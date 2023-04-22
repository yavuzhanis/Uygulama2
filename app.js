let sinav1 = prompt("İlk sınav Notunuzu Giriniz:");
let sinav2 = prompt("İkinci Sınav Notunuzu Giriniz:");
let ortalama = ((sinav1 * 40) / 100) + ((sinav2 * 40) / 100);


if (ortalama > 50) {
    if (ortalama > 80) {
        console.log("Bu dersle İşim kalmadı")
    }
} else {
    console.log("Kaldık")
}
console.log(ortalama)