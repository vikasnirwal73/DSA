import Stack from "../src/DS/stack";
describe('Stack', () => {
    let stack: Stack<number | string>;
    
    beforeEach(() => {
        stack = new Stack();
    });

    it('should be empty when created', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
        expect(stack.peek()).toBeNull();
        expect(stack.pop()).toBeNull();
    });

    it('should push elements correctly', () => {
        stack.push(10);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(10);

        stack.push(20);
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe(20);

        stack.push('hello');
        expect(stack.size()).toBe(3);
        expect(stack.peek()).toBe('hello');
    });

    it('should pop elements in LIFO order', () => {
        stack.push(10);
        stack.push(20);
        stack.push(30);

        expect(stack.pop()).toBe(30);
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe(20);

        expect(stack.pop()).toBe(20);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(10);

        expect(stack.pop()).toBe(10);
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.peek()).toBeNull();
        expect(stack.pop()).toBeNull();
    });

    it('should peek at the top element without removing it', () => {
        stack.push(100);
        expect(stack.peek()).toBe(100);
        expect(stack.size()).toBe(1);

        stack.push(200);
        expect(stack.peek()).toBe(200);
        expect(stack.size()).toBe(2);
    });

    it('should correctly report if the stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push(5);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    it('should return the correct size of the stack', () => {
        expect(stack.size()).toBe(0);
        stack.push(1);
        expect(stack.size()).toBe(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
        stack.pop();
        expect(stack.size()).toBe(1);
        stack.pop();
        expect(stack.size()).toBe(0);
    });
});