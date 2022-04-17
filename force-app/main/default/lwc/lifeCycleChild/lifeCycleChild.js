import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("Child constructor Called")
    }
    connectedCallback(){
        console.log("Child connectedCallback Called");
    }
    renderedCallback(){
        console.log("Child renderedCallback Called");
    }
    disconnectedCallback(){
        alert("Child Component is disconneting")
    }
}