

    
    function render(data) {
        document.querySelector('#show').innerHTML =  `<span id="data">${data}</span>`;
    }

async function getFolder() {
   const folder= document.getElementById('getFolderName').value;
    const result =  await axios.get(`/root/folder/${folder}`)
         render(result.data)   
 }


 //to do get file
 async function getFile() {
  const file= document.getElementById('getFileName').value;
  var data = JSON.stringify({
    "path": file
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost:3000/root/file',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    document.querySelector('#show').innerHTML =  `<span id="data">${response.data}</span>`;
  })
  .catch(function (error) {
    console.log(error);
  });
  

 }
 

async function createFolder() {
    const folder= document.getElementById('createFolderName').value;
    await axios.post(`/root/createFolder/${folder}`)
  }

  async function createFile() {
    const file= document.getElementById('createFileName').value;
    await axios.post(`/root/createFile/${file}`)
  }

  async function changeFileName() {
    const oldFile= document.getElementById('oldFileName').value;
    const newFile= document.getElementById('newFileName').value;
    await axios.put(`/root/changeFileName?fileName=${oldFile}&newFileName=${newFile}`)
  }

  async function deleteFile() {
    const file= document.getElementById('deleteFile').value;
    await axios.delete(`/root/deleteFile/${file}`)
  }

  async function updateFileContent() {
    const file= document.getElementById('updateFileName').value;
    const content= document.getElementById('updateFileContent').value;

    var data = JSON.stringify({
      "fileName": file,
      "type": "string",
      "data": content
    });
    
    var config = {
      method: 'put',
      url: 'http://localhost:3000/root/changeFileContent',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(content);
    })
    .catch(function (error) {
      console.log(error);
    });

  }