import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("precondition", () => {

  cy.visit('https://clinital-plateformesante-patient-sigma.vercel.app/')

})
When("action",()=>{
    cy.title().should('eq' , 'Welcome: Mercury Tours')
})
Then("testable outcome", ()=>{
    cy.title().should('eq' , 'Welcome: Mercury Tours')
})