const xhr = new XMLHttpRequest();

console.log(xhr.readyState);

// <!-- -UNSENT (numeric value 0)

// The object has been constructed.

// -OPENED (numeric value 1)

// The open() method has been successfully invoked. During this state request headers can be set using setRequestHeader() and the request can be made using the send() method.

// -HEADERS_RECEIVED (numeric value 2)

// All redirects (if any) have been followed and all HTTP headers of the final response have been received. Several response members of the object are now available.

// -LOADING (numeric value 3)

// The response entity body is being received.

// -DONE (numeric value 4)

// The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects). -->
