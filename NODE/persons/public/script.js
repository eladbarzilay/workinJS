let arr = []

async function getAll() {
   
   const result =  await axios.get('/person')
        // .then(result => {
        //     arr = result.data
        //     render()
        // })
        arr = result.data
        render()
      
}
getAll()

function render() {
    document.querySelector('#list').innerHTML =
        arr.map(p => `<li>
        <span id="delete" onClick=deletePerson()><i class="far fa-trash-alt"></i></span>
        <strong>${p.firstName} ${p.lastName} </strong>
        <div class="details">
            <div>
                <span>${p.age}</span>
                <span>${p.city}</span>
            </div>
            <div>
                <div class="car-color" style="color: ${p.eyeColor};"><i class="far fa-eye"></i></div>
            </div>
        </div>
    </li>`).join('');
}

document.querySelector('form')
    .onsubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const values = Object.values(form)
            .reduce((acc, curr) => {
                const { value, name } = curr
                return name ? { ...acc, [name]: value } : acc
            }, {})

        addPerson(values)
  
        form.reset();
    }


async function addPerson(values) {

    await axios.post('/person',values)
    // .then((response) => getAll())
    getAll()
}
async function deletePerson(id) {
   if(confirm("you sure you want to delete?")){

   await axios.delete(`/person/${id}`)
    //  .then(() => getAll())
    getAll()
}
}


function search() {
       console.log("hhhh");
       let str = document.getElementById('search').innerHTML;
       console.log(str);
    const result =  axios.get('/person/search')
         arr = result.data
        
 }
