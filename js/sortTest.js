const arr = ["hej", "borge", "anders"]


//const arrSort = arr.sort()

const arrSort = arr.sort((a,b) => {
    if (a>b) {
        return 1
    }else if (b>a) {
        return -1
    }else {
        return 0
    }
})

console.log(arrSort)


const obArr = [{"Navn" : "hej", "kode" : "11"}, {"Navn" : "aorge", "kode" : "10"}, {"Navn" : "anders", "kode" : "10"}]

const objSort = obArr.sort((a,b) => {
    if(a.kode > b.kode){
        return 1
    } else if (b.kode > a.kode) {
        return -1
    } else if (a.navn > b.navn) {
        return 1
    } else {
        return -1
    }
})

console.log(objSort)