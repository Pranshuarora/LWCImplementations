import { LightningElement } from 'lwc';

export default class TemplateLoopingForEach extends LightningElement {
    // one with array and aother with object of an array
    
    // one way
    carList = [ "BMW", "Audi", "Mercedes", "Jaguar", "Honda" ]

    // another way
    programmingList = [
        {
          id: "06868",
          language: "HTML"
        },
        {
          id: "19797",
          language: "CSS"
        },
        {
          id: "298789",
          language: "Javascript"
        },
        {
          id: "398798",
          language: "Apex"
        },
        {
          id: "48967",
          language: "Aura"
        },
        {
          id: "58798",
          language: "Java"
        }
      ];
}