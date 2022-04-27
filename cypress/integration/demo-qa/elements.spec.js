import ButtonsPage from "../../pageObjects/buttonsPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import LinksPage from "../../pageObjects/linksPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import SelectablesPage from "../../pageObjects/selectablesPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/webTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here
      TextBoxPage.fullNameInput.type("Name Surname");
      TextBoxPage.userEmailInput.type("email@user.com");
      TextBoxPage.currentAdressInput.type("Current address");
      TextBoxPage.permanentAddressInput.type("Permanent address");
      TextBoxPage.submitButton.click()

      TextBoxPage.nameParagraph
        .should('be.visible')
        .should('contain', "Name Surname");

      TextBoxPage.emailParagraph
        .should('be.visible')
        .should('contain', "email@user.com");

      TextBoxPage.currentAddressParagraph
        .should('be.visible')
        .should('contain', "Current address");

      TextBoxPage.permanentAddressParagraph
        .should('be.visible')
        .should('contain', "Permanent address");

      // TextBoxPage.fullNameInput
      //   .invoke('attr', 'placeholder')
      //   .should('contain', 'Full Name');
    });

    // it.skip ignores test
    // it.only - runs only this
    it.skip("Filling in Text Boxes with fixture", () => {
      cy.fixture('textBoxPageData').then(data => {
        TextBoxPage.fullNameInput.type(data.fullName);
        TextBoxPage.userEmailInput.type(data.email);
        TextBoxPage.currentAdressInput.type(data.currentAddress);
        TextBoxPage.permanentAddressInput.type(data.permanentAddress);
      });
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Clicking check box - Notes and General", () => {
      // cy.pause(); // to pause
      CheckBoxPage.expandAllButton.click();

      CheckBoxPage.checkBoxListItems.contains("Notes").click();
      CheckBoxPage.checkBoxListItems.contains("General").click();

      CheckBoxPage.selectedItemsArea
        .should('contain', 'notes')
        .should('contain', 'general');
    });

    it("Clicking check box - Office", () => {
      // cy.pause(); // to pause
      CheckBoxPage.expandAllButton.click();

      CheckBoxPage.checkBoxListItems.contains("Office").click();

      CheckBoxPage.selectedItemsArea
        .should('contain', 'public')
        .should('contain', 'private')
        .should('contain', 'classified')
        .should('contain', 'general');
    });
  });

  context("Radio buttons scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });

    it("Click radio buttons", () => {
      // cy.pause();
      RadioButtonsPage.yesRadioButton.click();

      RadioButtonsPage.resultsText
        .should('contain', 'Yes');

      RadioButtonsPage.impressiveRadioButton.click();

      RadioButtonsPage.resultsText
        .should('contain', 'Impressive');

      RadioButtonsPage.noRadioButton
        .should('be.disabled');
    });
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });

    it("Click radio buttons", () => {
      WebTablesPage.addButton.click();

      cy.fixture('newRecordData').then(data => {
        WebTablesPage.firstNameInput.type(data.firstName);
        WebTablesPage.lastNameInput.type(data.lastName);
        WebTablesPage.emailInput.type(data.userEmail);
        WebTablesPage.ageInput.type(data.age);
        WebTablesPage.salaryInput.type(data.salary);
        WebTablesPage.departmentInput.type(data.department);
      
        WebTablesPage.submitButton.click();

        WebTablesPage.tableRows
          .should('contain', data.firstName)
          .should('contain', data.lastName)
          .should('contain', data.userEmail)
          .should('contain', data.age)
          .should('contain', data.salary)
          .should('contain', data.department);
      });
    });

    it("Delete all records", () => {
      WebTablesPage.deleteRow("alden@example.com");
      WebTablesPage.deleteRow("cierra@example.com");
      WebTablesPage.deleteRow("kierra@example.com");
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    it("Click on buttons", () => {
      ButtonsPage.doubleClickButton.dblclick();
      ButtonsPage.doubleClickMessage.should('contain', 'You have done');

      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.rightClickMessage.should('contain', 'You have done');
      
      ButtonsPage.clickButton.click();
      ButtonsPage.clickMessage.should('contain', 'You have done');
    });
  });

  context("Links scenarios", () => {
    beforeEach(() => {
      LinksPage.visit();
    });

    it("Click on buttons", () => {
      cy.intercept("GET", "created").as("getCreated");

      LinksPage.createdLink.click();

      cy.wait("@getCreated").then(data => {
        expect(data.response.statusCode).to.eq(201);
      })
    });
  });

  context("Selectable scenarios", () => {
    beforeEach(() => {
      SelectablesPage.visit();
    });

    it("Click on list elements", () => {
      SelectablesPage.allListItems.contains("Cras justo odio").click();
      SelectablesPage.allListItems.contains("Morbi leo risus").click();

      SelectablesPage.allListItems.contains("Cras justo odio").should('have.class', 'active');
      SelectablesPage.allListItems.contains("Morbi leo risus").should('have.class', 'active');

      SelectablesPage.allListItems.contains("Dapibus ac facilisis in").should('not.have.class', 'active');
      SelectablesPage.allListItems.contains("Porta ac consectetur ac").should('not.have.class', 'active');
    });

    it.only("Click on grid elements", () => {
      SelectablesPage.gridNavButton.click();

      SelectablesPage.allGridItems.contains("Two").click();
      SelectablesPage.allGridItems.contains("Four").click();
      SelectablesPage.allGridItems.contains("Six").click();
      SelectablesPage.allGridItems.contains("Eight").click();

      SelectablesPage.allGridItems.contains("Two").should('have.class', 'active');
      SelectablesPage.allGridItems.contains("Four").should('have.class', 'active');
      SelectablesPage.allGridItems.contains("Six").should('have.class', 'active');
      SelectablesPage.allGridItems.contains("Eight").should('have.class', 'active');

      SelectablesPage.allGridItems.contains("One").should('not.have.class', 'active');
      SelectablesPage.allGridItems.contains("Three").should('not.have.class', 'active');
      SelectablesPage.allGridItems.contains("Five").should('not.have.class', 'active');
      SelectablesPage.allGridItems.contains("Seven").should('not.have.class', 'active');
      SelectablesPage.allGridItems.contains("Nine").should('not.have.class', 'active');
    });
  });

});
