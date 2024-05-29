const addList = document.querySelector("#addList");
const hours = document.querySelector("#hours");
const form = document.querySelector("#form");
const list = document.querySelector("#list");


let arr = []

const addForm = () => {
     form.classList.add("show")
}


const showList = (e) => {
     e.preventDefault()
     const currentTime = hours.value

     if(currentTime) {
          arr.push(currentTime)
          hours.value = "";
     }
     arr.forEach((time) => {
          const $div = document.createElement("div");
          $div.classList.add("alarms")
          $div.textContent = time;
          list.appendChild($div)
     })

     function check() {
          const difference = new Date();
          const fullTime = `${difference.getHours().toString().padStart(2, "0")}:${difference.getMinutes().toString().padStart(2, "0")}`
          arr.forEach(item => {
               if(item == fullTime) {
                    $div.classList.add("change");
               }
          })
     }


     setInterval(check, 1000)
}


addList.addEventListener("click", addForm)
form.addEventListener("submit", showList)