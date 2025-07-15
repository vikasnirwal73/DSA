class Node<T> {
    public data: T;
    public prev: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.prev = null;
    }
}

class Stack<T> {
    private head: Node<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }
    push(data: T): number {
        const newNode = new Node(data);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.length;
        }

        newNode.prev = this.head;
        this.head = newNode;

        return this.length;
    }
    pop(): T | null {
        if (!this.head) {
            return null;
        }

        this.length--;
        const data = this.head.data;
        this.head = this.head.prev;

        return data;
    }
    peek(): T | null {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }
    isEmpty(): boolean {
        return this.length === 0;
    }
    size(): number {
        return this.length;
    }
}

export default Stack;