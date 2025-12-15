// 1. How does Node.js work?
// Ans: 
Node.js works on a single-threaded, event-driven architecture using the V8 JavaScript engine.

V8 Engine: Compiles JavaScript into fast machine code.
Event Loop: Handles asynchronous tasks (I/O, timers, requests) without blocking the main thread.
Libuv library: Provides a thread pool and handles background tasks like file system operations and networking.
Non-blocking I/O: Lets Node.js process thousands of concurrent requests efficiently without creating multiple threads
   
// 2. How Does Node.js Handle Multiple Tasks While Being Single-Threaded?
Node.js একটি event-driven এবং non-blocking I/O architecture অনুসরণ করে। যদিও JavaScript কোড single thread-এ চলে, কিন্তু সময়সাপেক্ষ বা ভারী কাজগুলো Node.js নিজে execute করে না।
এই ধরনের কাজগুলো Node.js Operating System-এর kernel অথবা thread pool-এ পাঠিয়ে দেয়। এই সময় Node.js-এর main thread অন্য কাজ বা request handle করতে থাকে।
যখন সেই ভারী কাজগুলো সম্পন্ন হয়, তখন তাদের callback বা result Event Loop-এর queue-তে যোগ হয়। Event Loop তখন call stack ফাঁকা পেলেই সেই callback গুলো execute করে।
এই পদ্ধতির মাধ্যমে Node.js:
নতুন thread তৈরি না করেও একসাথে অনেক request efficiently handle করতে পারে
