import { LightningElement } from 'lwc';
import * as MODAL_DATA from './cardComponentConstant.js';

export default class CardComponent extends LightningElement {
    MODAL_DATA = MODAL_DATA
    showModalOne = false
    handleClick(event){
        this[event.target.name] = true
    }
} 