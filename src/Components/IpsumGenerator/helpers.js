import cap from 'capitalized';

function makeChains(arr) {
  // this function .....
  let markovChains = {};

  for (let i = 0; i < arr.length; i +=1) {
    const word = arr[i];
    const next = arr[i + 1] || null;

    if (!markovChains[word]) {
      markovChains[word] = [];
    } 

    if (next !== null) {
      markovChains[word].push(next);
    }
  }
  
  return markovChains;
}

function makeText(chain, numWords = 100) {
  let res = [];
  let words = Object.keys(chain);
  
  function __pickRandom__(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }


  let starter = __pickRandom__(words);
  // let starter = 'a';
  
  while (!cap(starter)) {
    starter =  __pickRandom__(words);
  }

  while (res.length < numWords && starter !== null) {
    res.push(starter);
    let nextWord;
    if (!chain[starter].length) {
      nextWord = __pickRandom__(words);
    } else {
      nextWord = __pickRandom__(chain[starter]);
    }
    starter = nextWord;
  }
  return res.join(' ');
}


export {
  makeChains,
  makeText,
};