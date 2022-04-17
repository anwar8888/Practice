import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChild = false
    constructor(){
        super()
        console.log("Parent constructor Called")
    }
    connectedCallback(){
        console.log("Parent connectedCallback Called");
    }
    renderedCallback(){
        console.log("Parent renderedCallback Called");
    }
    
    handleClick(event){
        this.isChild = true
    }
    handleClick1(event){
        this.isChild = false
    }
   
}