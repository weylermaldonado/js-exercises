/*
  Implement the following methods into EventEmitter:
  
  subscribe: You'll be subscribed to an event which you want to be notified.
  emit: You'll send messages to subscribers.
  unsubscribe: You won't be notified anymore about messages of an event.
*/

const EventEmitter = (function () {
  // TODO: implement
})();

const Sub1 = EventEmitter.subscribe((msg) => console.log(msg))
const Sub2 = EventEmitter.subscribe((msg) => console.log(msg))
const Sub3 = EventEmitter.subscribe((msg) => console.log(msg))
EventEmitter.emit('Hello!')
/**
 * Output:
 * Hello!
 * Hello!
 * Hello!
 */
Sub1.unsubscribe()
EventEmitter.emit('Hello again!')
/**
 * Output;
 * Hello again!
 * Hello again!
 */