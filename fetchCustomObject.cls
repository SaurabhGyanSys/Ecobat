public with sharing class fetchCustomObject {
    @AuraEnabled(cacheable=true)
    public static List<FAQ__c> getCustomObjectData() {
        return [SELECT Id, Name, Answer__c, Question__c FROM FAQ__c LIMIT 10];
    }
}