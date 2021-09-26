module.exports = {
    url: 'https://grafikart.fr/demo/jQuery/DatePicker/index.html',
    elements: {
      datepicker: '.datepicker',
      dateInput: '.datepicker__container input:first-child',
      okButton: {
        selector: '//button[text()="Ok"]',
        locateStrategy: 'xpath'
      },
      dateButton: {
        selector: '//span[@class="datepicker__day__text" and text()="4"]',
        locateStrategy: 'xpath'
      }
    }
  }