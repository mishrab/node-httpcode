Using http request object's ReadableStream interface
=============

This page: http://nodejs.org/api/http.html#http_http_createserver_requestlistener mentions that the requestListener function is automatically added to the 'request' event.

The request event is mentioned here:  http://nodejs.org/api/http.html#http_event_request, which states that the the request parameter of the function (request, response) {} is an instance of the http.incomingMessage interface.

On this page: http://nodejs.org/api/http.html#http_http_incomingmessage to read about http.incomingMessage, we can see that request implements the ReadableStream interface apart from other important stuff like message.headers and message.url.

Now, in the ReadableStream (stream.Readable) interface, documentation at http://nodejs.org/api/stream.html, we find that it has events redable, data, end, close and error, which we can use to read info from messages. It shows how to do that in an example, too, just on the same page at http://nodejs.org/api/stream.html#stream_api_for_stream_consumers.
