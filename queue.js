class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }
    enqueue(data) {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.size++;
            return node.data;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.size++;
        return node.data;
    }
    deque() {
        if(!this.head) {
            return null;
        }
        const head = this.head;
        this.head = head.next;
        if(this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return head?.data;
    }
    peek() {
        return this.head?.data;
    }
 }

 