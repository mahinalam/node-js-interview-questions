// 1. How does Node.js work?
// Ans: 
Node.js works on a single-threaded, event-driven architecture using the V8 JavaScript engine.

V8 Engine: Compiles JavaScript into fast machine code.
Event Loop: Handles asynchronous tasks (I/O, timers, requests) without blocking the main thread.
Libuv library: Provides a thread pool and handles background tasks like file system operations and networking.
Non-blocking I/O: Lets Node.js process thousands of concurrent requests efficiently without creating multiple threads
   