---
title: HTTP Response Status Codes
description: Discussion about HTTP Response Status Codes
---

HTTP response status codes indicate the **successful completion** of a specific HTTP request. Responses are categorized into **five** classes.

## Informational responses (100 – 199)

### 100 Continue

This means that the client should continue the request or ignore the response if the request is _already finished_.

### 101 Switching Protocols

This is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.

### 102 Processing (WebDAV)

This indicates that the server has received and is processing the request, but no response is available yet.

### 103 Early Hints

This status code is primarily intended to be used with the Link header. It lets the user agent start preloading resources while the server prepares a response or preconnects to an origin from which the page will need resources.

## Successful responses (200 – 299)

### 200 OK

The request was _successful_. The meaning of `success` depends on the HTTP method used:

- **GET:** The requested resource has been fetched and is included in the message body.
- **HEAD:** Only the representation headers are included in the response without any message body.
- **PUT or POST:** The resource that describes the result of the action is included in the message body.
- **TRACE:** The request message as received by the server is included in the message body.

### 201 Created

The request was _successful_, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.

### 202 Accepted

The request has been received but has not been acted upon yet. This response is noncommittal and is intended for cases where another process or server handles the request, or for batch processing.

### 203 Non-Authoritative Information

This response code indicates that the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.

### 204 No Content

There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.

### 205 Reset Content

This response instructs the user agent to reset the document that sent this request.

### 206 Partial Content

This response code is used when the Range header is sent from the client to request only a part of a resource.

### 207 Multi-Status (WebDAV)

Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

### 208 Already Reported (WebDAV)

Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

### 226 IM Used (HTTP Delta encoding)

The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

## Redirection messages (300 – 399)

### 300 Multiple Choices

The request has multiple possible responses. The user or user agent should choose one. There's no standard way to choose, but using HTML links is recommended for user selection.

### 301 Moved Permanently

The requested resource's URL has been permanently changed. The new URL is provided in the response.

### 302 Found

This response code indicates that the URI of the requested resource has been temporarily changed, and the client should use the same URI for future requests.

### 303 See Other

The server directed the client to retrieve the requested resource from another `URI` using a `GET request`.

### 304 Not Modified

This header is used for caching, informing the client that the response has not been modified, allowing the client to continue using the cached version.

### 305 Use Proxy Deprecated

Previously defined in the HTTP specification, this directive indicated that a requested response must be accessed by a proxy. However, it has been deprecated due to security concerns related to in-band proxy configuration.

### 306 unused

This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

### 307 Temporary Redirect

The server sends this response to direct the client to retrieve the requested resource from a different URI using the same method as the prior request. It's similar to the `302 Found` response code, but the user agent must not change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.

### 308 Permanent Redirect

When a resource is permanently moved to a new location, as indicated by the `Location:` HTTP Response header, it means that the resource can now be found at the new URI. This is similar to the `301 Moved Permanently` HTTP response code, except that it requires the user agent to use the same HTTP method in the second request as was used in the first request. For example, if the first request used a `POST` method, the second request must also use a POST method.

## Client error responses (400 – 499)

### 400 Bad Request

The server can't process the request because of a client error, like bad request syntax or invalid request framing.

### 401 Unauthorized

The client must authenticate itself to get the requested response.

### 402 Payment Required (Experimental)

This code is reserved for future use, mainly for digital payment systems, but it is rarely used.

### 403 Forbidden

The client does not have permission to access the resource, even though the server knows who the client is.

### 404 Not Found

The server can't find the requested resource. It may mean the URL is incorrect, or the resource doesn't exist.

### 405 Method Not Allowed

The request method is not supported by the server for the target resource, like using DELETE on a read-only endpoint.

### 406 Not Acceptable

The server can't find content that matches the criteria provided by the client.

### 407 Proxy Authentication Required

The client must authenticate with a proxy server before the request can be processed.

### 408 Request Timeout

The server timed out waiting for the request. This is often sent by servers to close idle connections.

### 409 Conflict

The request conflicts with the current state of the server.

### 410 Gone

The requested resource has been permanently removed from the server, with no forwarding address.

### 411 Length Required

The server rejected the request because the required Content-Length header is not specified.

### 412 Precondition Failed

The server does not meet one of the preconditions that the client put in its request headers.

### 413 Payload Too Large

The request is larger than the server is willing or able to process.

### 414 URI Too Long

The URI provided in the request is too long for the server to process.

### 415 Unsupported Media Type

The media format of the requested data is not supported by the server.

### 416 Range Not Satisfiable

The server can't provide the requested range of the resource.

### 417 Expectation Failed

The server can't meet the requirements of the Expect request header field.

### 418 I'm a teapot

The server refuses to brew coffee with a teapot.

### 421 Misdirected Request

The request was sent to the wrong server.

### 422 Unprocessable Content (WebDAV)

The server understands the request but can't process the instructions due to semantic errors.

### 423 Locked (WebDAV)

The resource being accessed is locked.

### 424 Failed Dependency (WebDAV)

The request failed because it depended on another request that failed.

### 425 Too Early (Experimental)

The server is not willing to process the request because it might be replayed.

### 426 Upgrade Required

The server refuses to perform the request using the current protocol. The client should switch to a different protocol.

### 428 Precondition Required

The server requires the request to be conditional to prevent conflicts.

### 429 Too Many Requests

The client has sent too many requests in a given amount of time.

### 431 Request Header Fields Too Large

The server won't process the request because its header fields are too large.

### 451 Unavailable For Legal Reasons

The requested resource is unavailable due to legal reasons, such as censorship.

## Server error responses (500 – 599)

### 500 Internal Server Error

The server encountered a problem it can't handle.

### 501 Not Implemented

The server doesn't support the request method. Servers must support GET and HEAD methods.

### 502 Bad Gateway

The server, acting as a gateway, got an invalid response.

### 503 Service Unavailable

The server can't handle the request, possibly due to maintenance or overload. This is usually temporary.

### 504 Gateway Timeout

The server, acting as a gateway, didn't get a response in time.

### 505 HTTP Version Not Supported

The server doesn't support the HTTP version used in the request.

### 506 Variant Also Negotiates

The server has a configuration error: the chosen resource is not a proper endpoint for content negotiation.

### 507 Insufficient Storage (WebDAV)

The server can't store the needed data to complete the request.

### 508 Loop Detected (WebDAV)

The server detected an infinite loop while processing the request.

### 510 Not Extended

More extensions are needed for the server to fulfill the request.

### 511 Network Authentication Required

The client needs to authenticate to gain network access.
