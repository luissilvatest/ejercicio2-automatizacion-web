class WikipediaPage {
    
    // Page elements
    get titlePage() {
      return cy.get('.mw-page-title-main');
    }
  
    // Page actions
    visit() {
      cy.visit("https://es.wikipedia.org/wiki/Automatizaci%C3%B3n")
    }
    search(keyword) {
      this.searchInput.type(keyword);
      this.searchButton.click();
    }
  }

  module.exports= WikipediaPage
  