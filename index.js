// Add your code here
// const formData = {
//   dogName: "Otis",
//   dogBreed: "Labrador Retriever",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });




function submitData(userName, userEmail) {
  const userData = {
    name: userName,
    email: userEmail
  }


  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  function writeMessage(message) {
    const body = document.querySelector('body')
    const p = document.createElement('p')
    p.textContent = message
    body.appendChild(p)
  }

  return fetch("http://localhost:3000/users", configurationObject)
          .then(res => res.json())
          .then(dataObj => {
            writeMessage(dataObj.id)
          })
          .catch(e => {
            writeMessage(e.message)
          })
}

submitData("louise", "louise@gmail.com")