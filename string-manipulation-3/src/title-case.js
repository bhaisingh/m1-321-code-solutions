/* exported titleCase */
function titleCase(title) {
  var outString = '';
  var stringArray = title.split(' ');

  for (var i = 0; i < stringArray.length; i++) {
    if ((stringArray[i].length > 3) ||
        (stringArray[i].toLowerCase() === 'web')) {

      if (stringArray[i][stringArray[i].length - 1] === ':') {
        if (stringArray[i].slice(0, -1).toLowerCase() === 'javascript') {
          outString = outString + 'JavaScript:';
          if (i !== stringArray.length - 1) {
            outString += ' ';
          }
          continue;
        }
      }

      if (stringArray[i].toLowerCase() === 'javascript') {
        outString = outString + 'JavaScript';
        if (i !== stringArray.length - 1) {
          outString += ' ';
        }
        continue;
      }

      var tempIndex = stringArray[i].indexOf('-');
      if (tempIndex > -1) {
        outString = outString + stringArray[i][0].toUpperCase() + stringArray[i].substring(1, tempIndex + 1) + stringArray[i][tempIndex + 1].toUpperCase() + stringArray[i].substring(tempIndex + 2, stringArray[i].length);
        if (i !== stringArray.length - 1) {
          outString += ' ';
        }
      } else {
        outString = outString + stringArray[i][0].toUpperCase() + stringArray[i].substring(1, stringArray[i].length);
        if (i !== stringArray.length - 1) {
          outString += ' ';
        }
      }

    } else if (stringArray[i].toLowerCase() === 'api') {
      outString = outString + 'API';
      if (i !== stringArray.length - 1) {
        outString += ' ';
      }
      continue;
    } else if (stringArray[i - 1][stringArray[i - 1].length - 1] === ':') {
      outString = outString + stringArray[i][0].toUpperCase() + stringArray[i].substring(1, stringArray[i].length);
      if (i !== stringArray.length - 1) {
        outString += ' ';
      }
    } else {
      outString = outString + stringArray[i];
      if (i !== stringArray.length - 1) {
        outString += ' ';
      }
    }
  }
  return outString;
}
