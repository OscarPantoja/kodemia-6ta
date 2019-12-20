console.log('hello koders')

// var koders = JSON.stringify ({
//     'firstName': 'oscar',
//     'lastName': 'pantoja',
//     'age': 30,
//     'pitch': true
// })

// var response
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function (){
//     if(this.readyState === 4 && this.status === 200){
//     console.log(this.response, JSON.parse(this.response), 'ok')
//     response = this.response
//     }
// }

// xhttp.open('POST', 'https://ajaxkode.firebaseio.com/koders.json')
// xhttp.send(koders)

// xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json')
// xhttp.send()

// var requestURL.parse = 'https://ajaxkode.firebaseio.com/.json'
// var request = new XMLHttpRequest(),
// request('GET', requestURL)


// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function (){
//     if(this.readyState === 4 && this.status === 200){
//        responseHandler(this.response)
//     }
// }

// xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json')
// xhttp.send()

// const responseHandler = response => {
//     const responseObj = JSON.parse(response)
//     const responseEntries = Object.entries(responseObj)
//     console.log(responseEntries)

// }

const responseHandler = response => {
    const responseObj = JSON.parse(response)
    const responseEntries = Object.entries(responseObj)
    let nodes = responseEntries.reduce(
      (acc, [key, { firstName, lastName }]) => {
        console.log(key, firstName)
        return `${acc} <li id=${key} class="list-group-item">${firstName} ${lastName}</li>`
      }
      , '')
    const parent = document.getElementById('container') 
    parent.innerHTML = nodes
  }
  const request = (url, callback, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        callback(this.response)
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(this.response)
      }
    }
    
    xhttp.open(method, url)
    if (method !== 'GET' && method !== 'DELETE') {
      xhttp.send(JSON.stringify(data))
    } else {
      xhttp.send()
    }
  }
  request('https://ajaxkode.firebaseio.com/koders.json', responseHandler)
  





