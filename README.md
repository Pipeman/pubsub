# pubsub

This is a very simple implementation of the Publisher Subscriber design pattern logic

## Example

```javascript
let unsubscribe = pubSub.subscribe("cane", (...args) => console.log("A simple callback with a variable number of arguments", ...args));

pubSub.publish("cane", "gatto", "mucca", "capra");
// A simple callback with a variable number of arguments gatto mucca capra

unsubscribe();
```
