import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeHandler(){
        const myEvent = new CustomEvent('close',{detail:"Modal closed successfully"})
        // const myEvent = new CustomEvent('close',
        // {detail:
        //     {
        //         msg:"Modal closed successfully"
        //     }
        // })
        this.dispatchEvent(myEvent)
    }
}