import { LightningElement, api } from 'lwc';

export default class LightningModal extends LightningElement {
    @api title
    @api body
    @api modalId
    @api hideModal
    @api size

    

}

// 20th video Troop
// if want to fetch something from HTML to JS you can use dataset in JS to fetch for ek :
// in html: data-model-id = "showModelOne"
// in js: let modelId = event.target.dataset.modelId