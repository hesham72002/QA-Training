const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function () {
  this.timeout(5000);
  
  suite('Integration tests with chai-http', function () {
    // #1
    test('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
          assert.equal(res.status, 200); // تحقق من حالة الاستجابة
          assert.equal(res.text, 'hello Guest'); // تحقق من النص
          done();
        });
    });
    
    // #2
    test('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.equal(res.status, 200); // تحقق من حالة الاستجابة
          assert.equal(res.text, 'hello xy_z'); // تحقق من النص
          done();
        });
    });
    
    // #3
    test('Send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')
        .send({ surname: "Colombo" }) // أضف البيانات المطلوبة
        .end(function (err, res) {
          assert.equal(res.status, 200); // تحقق من حالة الاستجابة
          done();
        });
    });
    
    // #4
    test('Send {surname: "da Verrazzano"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')
        .send({ surname: "da Verrazzano" }) // أضف البيانات المطلوبة
        .end(function (err, res) {
          assert.equal(res.status, 200); // تحقق من حالة الاستجابة
          done();
        });
    });
  });
});

const Browser = require('zombie');

suite('Functional Tests with Zombie.js', function () {
  this.timeout(5000);

  suite('Headless browser', function () {
    test('should have a working "site" property', function() {
      const browser = new Browser();
      assert.isNotNull(browser.site);
    });
  });

  suite('"Famous Italian Explorers" form', function () {
    // #5
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      const browser = new Browser();
      browser.visit('/your-form-url', function () {
        browser.fill('surname', 'Colombo').pressButton('Submit', function () {
          assert.equal(browser.text('h1'), 'Expected Result'); // تحقق من النتيجة المتوقعة
          done();
        });
      });
    });
    
    // #6
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      const browser = new Browser();
      browser.visit('/your-form-url', function () {
        browser.fill('surname', 'Vespucci').pressButton('Submit', function () {
          assert.equal(browser.text('h1'), 'Expected Result'); // تحقق من النتيجة المتوقعة
          done();
        });
      });
    });
  });
});
