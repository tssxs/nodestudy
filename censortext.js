/**
 * Created by 沈旭升 on 2017/4/11.
 */
var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
function censor(inStr) {
    for (idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx],"****");
    }

    for (idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[idx],"****");

    }
    return instr;
}
function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return customCensoredWords.concat(customCensoredWords);

}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
