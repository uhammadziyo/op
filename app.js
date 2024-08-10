let ism = prompt('ism kiriting')
let harf = prompt('harf kiriting')
if (ism.includes(harf)) {
    alert(`${ism} ismida ${harf} bor`)
} else {
    alert(`${ism} ismida ${harf} mavjud emas`)
}
