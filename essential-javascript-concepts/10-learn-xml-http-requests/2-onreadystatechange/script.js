
// This object is used to interact with the server to send and receive data.
const xhr = new XMLHttpRequest()

// if its ready, this function will execute:
xhr.onreadystatechange = () => {
  console.log("its ready")
}

xhr.open('get', 'text.txt', true);
console.log(xhr.readyState) // output 1 if its ready.


// open: This is a method of the XMLHttpRequest object. It is used to set up the basic parameters of the HTTP request. The open method takes three arguments:

// The first argument is the HTTP method you want to use for the request. In your code, 'get' specifies that you are making a GET request. This is used for fetching data from the server.

// The second argument is the URL of the resource you want to request. In your code, 'text.txt' is the URL. This URL points to the 'text.txt' file on the server.

// The third argument is a Boolean that specifies whether the request should be asynchronous (true) or synchronous (false). An asynchronous request means that the script will continue running while the request is being processed by the server. This is typically set to true to avoid blocking the execution of your code.