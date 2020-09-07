document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-button');

  function wordFrequency(input) {
    let wordArray = [];
    let inputArray = input.split(' ');

    for (let i = 0; i < inputArray.length; i++) {
      let lowercaseWord = inputArray[i].toLowerCase();
      if (wordArray.length === 0) {
        let wordArrayInput = { word: lowercaseWord, occurences: 1 };
        wordArray.push(wordArrayInput);
        continue;
      }
      for (let x = 0; x < wordArray.length; x++) {
        if (lowercaseWord === wordArray[x].word) {
          wordArray[x].occurences++;
          break;
        } else if (x === wordArray.length - 1) {
          let wordArrayInput = { word: lowercaseWord, occurences: 1 };
          wordArray.push(wordArrayInput);
          break;
        }
      }
    }
    return wordArray.sort(compare);
  }

  function charFrequency(input) {
    let charArray = [];
    let inputArray = input.split(' ').join('').split('');
    inputArray.sort();

    for (let i = 0; i < inputArray.length; i++) {
      let lowerCaseChar = inputArray[i].toUpperCase();
      if (charArray.length === 0) {
        let charArrayInput = { char: lowerCaseChar, occurences: 1 };
        charArray.push(charArrayInput);
        continue;
      }
      for (let x = 0; x < charArray.length; x++) {
        if (lowerCaseChar === charArray[x].char) {
          charArray[x].occurences++;
          break;
        } else if (x === charArray.length - 1) {
          let charArrayInput = { char: lowerCaseChar, occurences: 1 };
          charArray.push(charArrayInput);
          break;
        }
      }
    }
    return charArray.sort(compare);
  }

  function compare(a, b) {
    if (a.occurences < b.occurences) {
      return 1;
    }
    if (a.occurences > b.occurences) {
      return -1;
    }
    return 0;
  }

  function addToList(wordArray, charArray) {
    for (let i = 0; i < wordArray.length; i++) {
      var node = document.createElement('LI');
      var textnode = document.createTextNode(wordArray[i].word);
      node.appendChild(textnode);
      document.getElementById('ul1').appendChild(node);

      var node = document.createElement('LI');
      var textnode = document.createTextNode(wordArray[i].occurences);
      node.appendChild(textnode);
      document.getElementById('ul2').appendChild(node);
    }
    for (let i = 0; i < charArray.length; i++) {
      var node = document.createElement('LI');
      var textnode = document.createTextNode(charArray[i].char);
      node.appendChild(textnode);
      document.getElementById('ul3').appendChild(node);

      var node = document.createElement('LI');
      var textnode = document.createTextNode(charArray[i].occurences);
      node.appendChild(textnode);
      document.getElementById('ul4').appendChild(node);
    }
  }

  submitBtn.addEventListener('click', () => {
    for (let i = 1; i < 5; i++) {
      let ul = document.getElementById('ul' + i);
      let lis = ul.getElementsByTagName('li');
      while (lis.length > 0) {
        ul.removeChild(lis[0]);
      }
    }

    let inputText = document.getElementById('text-input').value;
    if (inputText.length === 0) {
      return;
    }
    var punctuationless = inputText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    var finalString = punctuationless.replace(/\s{2,}/g, ' ');

    let wordArray = wordFrequency(finalString);
    let charArray = charFrequency(finalString);
    addToList(wordArray, charArray);
  });
});
