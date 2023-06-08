class GooglePage {


    // Page elements

    // Page actions
    visit() {
      cy.visit("https://www.google.com");
      cy.get('#L2AGLb > .QS5gu').click();
    }
    search(keyword) {
      cy.get('#APjFqb').type(keyword);
      cy.get('form').submit();
    }
    findWikipediaResult(keyword) {
      cy.contains("Automatización - Wikipedia, la enciclopedia libre")
      .should("be.visible").invoke('attr', 'href')
      .then((href) => expect(href).to.eq("https://es.wikipedia.org/wiki/Automatizaci%C3%B3n"));
    }

    
  }

  module.exports= GooglePage;
  