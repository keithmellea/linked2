// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        //this.previous = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (this.tail === null && this.head === null) {
        const newNode = new Node(val);
        //newNode.previous = this.tail;
        this.tail = newNode;
        this.head = newNode;
        this.length++;
        }
        else {
        const newNode = new Node(val);
        //newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        }
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.tail === null && this.head === null) {
            return undefined;
        }
        else if (this.head === this.tail) {
            const prevTail = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return prevTail;
        }
        else {
            const prevTail = this.tail;
            let currentPointer = this.head;
            while (currentPointer.next !== this.tail) {
                currentPointer = currentPointer.next;
            }
            currentPointer.next = null;
            this.length--;
            return prevTail;
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {

    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
