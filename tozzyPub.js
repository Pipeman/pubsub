class TozzyPub {
    constructor() {
        this.subscribers = {};
    }

    subscribe(name, callback) {
        if(!name || !callback) {
            throw new Error("You need to specify a name for the event you want to subscribe to and a callback");
        }
        let subscribersListForEvent = this.subscribers[name];
        if(subscribersListForEvent) {
            console.log(1);
            
            this.subscribers[name] = [...subscribersListForEvent, callback];
        } else {
          console.log(2);
          
            this.subscribers[name] = [callback];
        }
        let callbackIndex = this.subscribers[name].length - 1;

        return () => this.unsubscribe(name, callbackIndex);
    }

    unsubscribe(name, elementToRemoveIndex) {
        this.subscribers[name] = this.subscribers[name].filter((el, index) => index !== elementToRemoveIndex);

        return true;
    }

    publish(name, ...args) {
        this.subscribers[name].forEach(callback => callback(...args));

        return true;
    }
}

let pubSub = new TozzyPub();