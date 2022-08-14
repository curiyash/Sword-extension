export class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(element){
        this.items.pop();
    }

    isEmpty(){
        this.items.length===0;
    }

    isFull(){
        this.items.length===100;
    }

    top(){
        return this.items[this.items.length-1];
    }
}
