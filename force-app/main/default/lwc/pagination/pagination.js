import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {
    currentPage = 1
    totalRecords
    recordSize = 5

    get records(){
        return this.visibleRecords
    }

    @api 
    set records(data){
        if(data){
            this.totalRecords = data
            this.totalPage = Math.ceil(data.length/this.recordSize)
            this.updateRecords()
        }
    }

    previousHandler(){

    }

    nextHandler(){
        if(this.currentPage < this.totalPage){
            this.currentPage = this.currentPage+1
            this.updateRecords()
        }

    }

    // on page load it updates the data
    updateRecords(){
        const start = (this.currentPage-1)* this.recordSize
        const end = this.recordSize*this.currentPage
        this.visibleRecords = data.slice(start, end)
        this.dispatchEvent(new CustomEvent('update',{
            detail:{
                records:this.visibleRecords
            }
        }))


    }
}