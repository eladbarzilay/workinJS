function makeItem(id,name, price) {
  return {
    id,
    name,
    price,
  };
}
let itemsInit = [
  makeItem(11111,`milk`, 5.5),
  makeItem(22222,`meat`, 50.0),
  makeItem(33333,`cheese`, 15.5),
  makeItem(44444,`oil`, 6.2),
  makeItem(55555,`rice`, 6.8),
  makeItem(66666,`cola`, 4.5),
  makeItem(77777,`kinder`, 11.5),
];
let myList=[];
function setToDB(items) {
  localStorage.DB = JSON.stringify(items);
}
function getFromDB() {
  return JSON.parse(localStorage.DB);
}
function fillItems() {
  let ul = document.querySelector(`#allListul`);
  itemsInit.forEach((item) => {
    ul.innerHTML += `<li id=${item.id} data-p =${item.id}>${item.name} | ${item.price} $</li>`;
  });
}


setToDB(itemsInit);
 let items = getFromDB();
fillItems();

// document.querySelector(`#allListul`).addEventListener( "click",(e) => {
  //     print(e.target.dataset.p);
  //   }
  // );
  
  document.querySelector(`#allListul`).addEventListener( "click",(e) => {    
    let id = e.target.dataset.p;
    let x = items.find(v => v.id == id);
    addToMyList(x);
    sum(x);

  });


  document.querySelector(`#myListul`).addEventListener( "dblclick",(e) => {
    let id = e.target.id;
    let x = myList.find(v => v.id == id);
    removeFromMyList(x);

  }
  );


  function addToMyList(item){
    let myul = document.querySelector("#myListul");
    myul.innerHTML += `<li class="myListClass" id=${item.id} >${item.name}</li>`;
    myList.push(item);
    localStorage.myList = JSON.stringify(myList);
  }

  function removeFromMyList(item){
    let x = document.getElementsByClassName("myListClass");
    for (let i = 0; i < x.length; i++) {
      if(x[i].innerText == item.name){
        x[i].remove();
        break;
      }
    }
    subSum(item);
  
  }

    function subSum(item){
      let sum = document.querySelector("#myListSpan");
      let x = Number(sum.innerText);
      let res = x-item.price;
      sum.innerText = res;
    }

  function sum(item){
    let sum = document.querySelector("#myListSpan");
    let x = Number(sum.innerText);
    let res = x+item.price;
    sum.innerText = res;
  }






  clearList();
  function clearList(){
    document.querySelector(`#clear`).addEventListener( "click",() => {    
      document.querySelector("#myListSpan").innerHTML = 0;
      let x = document.getElementsByClassName("myListClass");
      console.log(x);
      // for (let i = x.length-1; i >= 0; i--) {
      //   x[i].remove();
      // }
     
      while (x.length != 0) {
        x[0].remove();
      }

    });
  }






















  // document.querySelector('#div')
  //     .addEventListener('click', (e) => {
    //         print(e.target.dataset.p)
    //     })
    
    // function addItem(){
      //    localStorage.setItem("coockie", "4");
      // }
      
      // localStorage.DB = JSON.stringify(items);
