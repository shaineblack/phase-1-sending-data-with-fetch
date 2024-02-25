function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const id = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${id}`;
        document.body.appendChild(idElement);
      })
      .catch(function(error) {
        const errorMessage = error.message;
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${errorMessage}`;
        document.body.appendChild(errorElement);
      });
  }