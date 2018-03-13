import { Entry } from './../src/journal.js';

// describe('Entry', function(){
//
//   it('should return the count of words in the body', function(){
//     var testEntry = new Entry("Hello")
//     expect(testEntry).toEqual(1);
//   });
// });

describe('Entry', function() {

  it('should return the count of words in the body', function() {
    var testEntry = new Entry("title", "hello")
    expect(testEntry.countWords()).toEqual(1)
  });

  it('should return the count of vowels in the word', function() {
    var testEntry = new Entry("title", "gracias")
    expect(testEntry.countVowels()).toEqual(3)
  });
});
