
  const weatherForm = document.querySelector('form')
  const inputLocation = document.querySelector('input')
  const messageOne = document.querySelector('#message-1')
  const messageTwo = document.querySelector('#message-2')

  weatherForm.addEventListener('submit', (e) => {
      e.preventDefault()
      messageOne.textContent = 'loading'
       var value = inputLocation.value
        console.log(value)

        fetch(`http://localhost:3000/weather?address=${value}`)
  .then(function(response) {
    return response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = 'No se ha cargado una mierda'
        } else { 
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            console.log(data.location);
            console.log(data.forecast);
        }
    });
  })
  })

  
  
