import { LightningElement, wire } from 'lwc';
import getCustomObjectData from '@salesforce/apex/fetchCustomObject.getCustomObjectData';


export default class FaqTesting extends LightningElement {
    customObjectList;

    @wire(getCustomObjectData)
    wiredCustomObjectData({ error, data }) {
        if (data) {
            this.customObjectList = data;
        } else if (error) {
            console.error('Error fetching custom object data:', error);
        }
    }

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'All sections are closed';
        } else {
            this.activeSectionsMessage =
                'Open sections: ' + openSections.join(', ');
        }
    }
}