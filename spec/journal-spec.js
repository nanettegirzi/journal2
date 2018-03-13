import { Entry } from './../src/journal.js';

describe('Entry', function() {

  it('should return the count of words in the body', function() {
    var testEntry = new Entry("title", "hello my friend")
    expect(testEntry.TotalWords("hello my friend")).toEqual(3)
  });

  it('should return the count of vowels in the word', function() {
    var testEntry = new Entry("title", "gracias")
    expect(testEntry.CountVowels("gracias")).toEqual(3)
  });

  it('should return the count of consonants in the body', function() {
    var testEntry = new Entry("title", "hello")
    expect(testEntry.CountConsonants("hello")).toEqual(3)
  });
});
