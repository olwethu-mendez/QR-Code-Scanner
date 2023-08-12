const card = document.querySelector(".card");
const reader = document.querySelector("#reader");
const btnCopy = document.querySelector(".btn-copy");
const btnReset = document.querySelector(".btn-reset");
const resultText = document.querySelector('#result');
const resultsDisplay = document.querySelector('.text-output');
const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
        width: 250,
        height: 250,
    },
    fps: 20,
});
scanner.render(success, error);
function success(result){

    let linkVal = /^https:/;
    let linkVal2 = /^http:/;
    let linkVal3 = /^www./;

    if(linkVal.test(result)||linkVal2.test(result)||linkVal3.test(result)){
        resultText.innerHTML = `<h2>Success!</h2>
        <div class="textarea"><a href="${result}" target="_blank" style="color:#4717f7;">${result}</a></div>`;
    }
    else{
        resultText.innerHTML = `<h2>Success!</h2>
        <div class="textarea"><p>${result}</p></div>`;
    }
    

    scanner.clear();
    reader.style.height = "0px"
    resultsDisplay.style.display = "block";
}

function error(err){
    console.error(err)
}

btnCopy.addEventListener("click", () =>{
    const decodedText = document.querySelector('#result .textarea').textContent;
    navigator.clipboard.writeText(decodedText); 
    btnCopy.innerHTML = '<i class="bi bi-check-all" style="font-size: 32px; color: #130e20;"></i>';
})

btnReset.addEventListener("click", () =>{
    location.reload();
})