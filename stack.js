class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    push(data) {
        const newNode = new Node(data);
        this.length++;
        if(!this.head) {
            this.head = newNode;
            return this.length;
        }

        newNode.prev = this.head;
        this.head = newNode;
        
        return this.length;
    }
    pop() {
        if(!this.head) return null;
        this.length--

        const data = this.head.data;
        this.head = this.head.prev;

        return data;
    }
    peek() {
        if(!this.head) return null;
        return this.head.data;
    }
    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}

