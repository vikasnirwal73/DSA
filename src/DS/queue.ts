class QueueNode<T> {
    public data: T;
    public next: QueueNode<T> | null;
    public prev: QueueNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Queue<T> {
    public head: QueueNode<T> | null;
    public tail: QueueNode<T> | null;
    public size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data: T): T {
        const node = new QueueNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return node.data;
    }

    deque(): T | null {
        if (!this.head) {
            return null;
        }

        const headNode = this.head;
        this.head = headNode.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.size--;
        return headNode.data;
    }

    peek(): T | null {
        return this.head?.data ?? null;
    }
}