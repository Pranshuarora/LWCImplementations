// componenet to component navigation

// are of three types 

// 1. LWC to LWC
// 2. LWC to AURA
// 3. LWC to VF Page

// 1. Aura

import { LightningElement, wire } from 'lwc';
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';
// https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation

export default class NavigateToComponents extends NavigationMixin(LightningElement) {
    @wire(CurrentPageReference)
    pageReference

    // for page reference 
    get PageRef(){
        console.log("this.pageReference", JSON.stringify(this.pageReference));
        return this.pageReference.state.c__test ? this.pageReference.state.c__test: '';
    }

    handleAuraNavigation(){
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes:{
                componentName: "c__navigateToAura"
            },
            state:{
                c__recordId:"12345"
            }
        })
    }

    navigateToVfPages(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes:{
                url: "/apex/navigation_vf_pages"
            }
        }).then(generateUrl=>{
            console.log(generateUrl)
            // for opening in new window
            window.open(generateUrl);
            // for opening is existing window
            // window.open(generateUrl, "_self");

        })
    }

    handleNavigateToLwc(){
        var defination = {
            componentDef:"c:naviationLwcTarget",
            attributes:{
                recordId: '383299383'
            }
        }
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes:{
                // The btoa() method creates a Base64-encoded ASCII string from a binary string 
                url: '/one/one.app#' + btoa(JSON.stringify(defination))
            }
        })
    }
}


// note 

// curentPageReference page used to find which parameters is comming there and use wire with it 


// for community page - 
// this[NavigationMixin.Navigate]({
//     type: 'comm__namedPage',
//     attributes: {
//         pageName: 'helloworld'
//     },
//     state: {
//         'category': 'param1value'
//        }
// });


