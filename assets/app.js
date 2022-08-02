
const textch = function(e){
    return recon(e)
}
recon()


function recon(){
    document.getElementById('cards').innerHTML="";
    fetch("assets/data.json")
.then(response => {
   return response.json();
})
.then(data => {
    // console.log(data)
    datas = data;
    var dom = document.getElementById('search').value;
    for (let i = 0; i < Object.keys(datas).length; i++) {
        res = datas[i].link.replace(/domain/gi, dom ? (dom):("Bạn chưa nhập vào domain"));
        document.getElementById('cards').innerHTML += `<div class='subcard'>
        <a class="link" href="${res}" target="_blank"  >
        <div>
        <i class="${datas[i].icon}"></i>
        <p>${datas[i].name}</p>
        </div></a>
        </div>`
        
    }
});
}

