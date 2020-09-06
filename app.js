document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-button');
  let wordOutput = document.getElementById('word-frequency-output');
  let charOutput = document.getElementById('char-frequency-output');

  function wordFrequency(input) {
    let wordArray = [];
    let charArray = [];
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

  function compare(a, b) {
    if (a.occurences < b.occurences) {
      return 1;
    }
    if (a.occurences > b.occurences) {
      return -1;
    }
    return 0;
  }

  function addToList(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
      var node = document.createElement('LI');
      var textnode = document.createTextNode(wordArray[i].word);
      node.appendChild(textnode);
      document.getElementById('word-list').appendChild(node);

      var node = document.createElement('LI');
      var textnode = document.createTextNode(wordArray[i].occurences);
      node.appendChild(textnode);
      document.getElementById('word-occurence-list').appendChild(node);
    }
  }

  submitBtn.addEventListener('click', () => {
    let inputText = document.getElementById('text-input').value;
    let wordArray = wordFrequency(
      'one four two four two four four three three three'
    );
    console.log(wordArray);
    addToList(wordArray);
  });
});
