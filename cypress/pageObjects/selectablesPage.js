import BasePage from "./basePage";

class SelectablesPage extends BasePage {
  static get url () {
    return '/selectable';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }

  static get allListItems () {
    return cy.get("#verticalListContainer > li");
  }

  static get gridNavButton () {
    return cy.get("#demo-tab-grid");
  }

  static get allGridItems () {
    return cy.get("#gridContainer > div > li");
  }
}

export default SelectablesPage;
