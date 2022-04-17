import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModel = false
    msg
    clickHandler(){
        this.showModel = true
    }
    closeHandler(event){
        this.msg = event.detail
        //this.msg = event.detail.msg   using object form
        this.showModel = false
    }
}