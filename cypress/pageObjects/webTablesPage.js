import BasePage from "./basePage";

class WebTablesPage extends BasePage {
  static get url () {
    return '/webtables';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }

  static get addButton () {
    return cy.get('#addNewRecordButton');
  }

  static get firstNameInput () {
    return cy.get('input#firstName');
  }

  static get lastNameInput () {
    return cy.get('input#lastName');
  }

  static get emailInput () {
    return cy.get('input#userEmail');
  }

  static get ageInput () {
    return cy.get('input#age');
  }

  static get salaryInput () {
    return cy.get('input#salary');
  }

  static get departmentInput () {
    return cy.get('input#department');
  }

  static get submitButton () {
    return cy.get('#submit');
  }

  static get tableRows () {
    return cy.get('div.rt-tr-group');
  }

  static get allTableRows () {
    return cy.get("[role='row']");
  }

  static deleteRow(signature) {
    this.allTableRows.contains(signature).parent().find("[title='Delete']").click();
  }
}

export default WebTablesPage;
