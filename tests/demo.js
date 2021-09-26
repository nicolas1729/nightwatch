module.exports = {

    'Datepicker' : function (browser) {
        let page = browser.page.datepicker()
        page.navigate()
          .click('@dateInput')
          .waitForElementVisible('@datepicker', 1000)
          .click('@dateButton')
          .click('@okButton')
          .waitForElementNotPresent('@datepicker', 1000)
    
        page.expect.element('@dateInput').to.have.value.that.equals('04/02/2016')
    
        browser.end()
    },

    // On teste le résultat de ce tutoriel
    // https://www.grafikart.fr/tutoriels/symfony/champs-imbriques-888
    'Select region': ''+function (browser) {
      let selectRegion = '//select[@id="appbundle_medecin_region"]'
      let selectDepartement = '//select[@id="appbundle_medecin_departement"]'
      let selectVille = '//select[@id="appbundle_medecin_ville"]'
  
      browser
        .url('http://localhost:8000/medecin/new')
        .useXpath()
        .click(selectRegion)
        .click(selectRegion + '/option[text()="Languedoc-Roussillon"]')
        .waitForElementPresent(selectDepartement + '/option[text()="Hérault"]', 1000)
        .click(selectDepartement)
        .click(selectDepartement + '/option[text()="Hérault"]')
        .waitForElementPresent(selectVille + '/option[contains(text(), "Montpellier")]', 1000)
        .click(selectVille)
        .screenshot()
        .end()
    }
  
  }