import GooglePage from "../support/pages/googlePage.js";
import wikipediaPage from "../support/pages/wikipediaPage.js";

const googlePage= new GooglePage();
const wikiPage= new wikipediaPage();

describe('Inditex - Exercise 2', () => {

  it('Loads search page and perform the search on Google.', () => {
    //open page
    googlePage.visit()
    // Search for the word "automation" on Google
    googlePage.search("automatización");
    // Find the Wikipedia link in the search results.
    googlePage.findWikipediaResult();
  });

  it('Open the Wikipedia link and Verify the year in which the first automated process was done.', () => {
    // open page article wikipedia: Automation
      wikiPage.visit()
    //Verify that the title of the article is "Automation"
      wikiPage.titlePage.contains("Automatización").should("be.visible")
  });

  it('Take a screenshot of the Wikipedia page.', () => {
    cy.screenshot('wiki_screenshot.png');
  });

})
