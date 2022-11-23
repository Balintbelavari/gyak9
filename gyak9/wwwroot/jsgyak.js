var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}

for (var sor = 0; sor < 10; sor++) {
    let sorDiv=document.createElement("div");
    sorDiv.classList.add("sor")
    document.getElementById("pascal").appendChild(sorDiv);
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
        let elemDiv = document.createElement("div");
        elemDiv.classList.add("elem")
        elemDiv.innerHTML = faktoriálisR(sor) / (faktoriálisR(oszlop) * faktoriálisR(sor - oszlop))
        sorDiv.appendChild(elemDiv);
    }
}