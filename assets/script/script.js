const ipaToMalayalamMap = {
    ' ': ' ',
    'a': 'അ',
    'ʌ': 'അ',
    'ɐ': 'അ',
    'ɑ': 'അ',
    'ɞ': 'അ',
    'æ': 'അ',
    'ᵊ': 'അ',
    'ə': 'അ',
    'aː': 'ആ',
    'ʌː': 'ആ',
    'ɐː': 'ആ',
    'ɑː': 'ആ',
    'ɞː': 'ആ',
    'iy': 'ഇ',
    'ɨ': 'ഇ',
    'ɪ': 'ഇ',
    'ʏ': 'ഇ',
    'i': 'ഇ',
    'iː': 'ഈ',
    'yː': 'ഈ',
    'ɨː': 'ഈ',
    'ɪː': 'ഈ',
    'ʏː': 'ഈ',
    'u': 'ഉ',
    'ɯ': 'ഉ',
    'ʊ': 'ഉ',
    'uː': 'ഊ',
    'ɯː': 'ഊ',
    'ʊː': 'ഊ',
    'ʉ': 'ഊ',
    'e': 'എ',
    'ɘ': 'എ',
    'ɛ': 'എ',
    'ɜ': 'എ',
    'ø': 'എ',
    'eː': 'ഏ',
    'ɘː': 'ഏ',
    'əː': 'ഏ',
    'ɛː': 'ഏ',
    'ɜː': 'ഏ',
    'øː': 'ഏ',
    'o': 'ഒ',
    'ɔ': 'ഒ',
    'ɤ': 'ഒ',
    'ɵ': 'ഒ',
    'ɒ': 'ഒ',
    'œ': 'ഒ',
    'oː': 'ഓ',
    'ɤː': 'ഓ',
    'ɵː': 'ഓ',
    'k': 'ക്',
    'q': 'ക്',
    'kʰ': 'ഖ്',
    'χ': 'ഖ്',
    'ʁ': 'ഗ്',
    'ɢ': 'ഗ്',
    'ɡ': 'ഗ്',
    'g': 'ഗ്',
    'ɡ': 'ഗ്',
    'ɣ': 'ഗ്',
    'ʔ': 'ഗ്',
    'gʰ': 'ഘ്',
    'ŋ': 'ങ്',
    'ɴ': 'ങ ്',
    'tʃ': 'ച്',
    't‍ʃ': 'ച്',
    'c': 'ച്',
    'tʃʰ': 'ഛ ്',
    'ʧ': 'ച്',
    'dʒ': 'ജ്',
    'd‍ʒ': 'ജ്',
    'd͡ʒ': 'ജ്',
    'ɟ': 'ജ്',
    'dʒʰ': 'ഝ ്',
    'ɟʱ': 'ഝ ്',
    'ɮ̥': 'ജ്',
    'ɮ': 'ജ്',
    'ʤ': 'ജ്',
    'ɲ': 'ഞ്',
    'ʈ': 'ട്',
    'ʈʰ': 'ഠ ്',
    'ɖ': 'ഡ്',
    'd': 'ഡ്',
    'ɖʰ': 'ഢ ്',
    'ɳ': 'ണ്',
    't̪': 'ത്',
    'θ': 'ത്',
    't̪ʰ': 'ഥ ്',
    'd̪': 'ദ്',
    'ð': 'ദ്',
    'd̪ʰ': 'ധ ്',
    'n': 'ന്',
    'n̪': 'ന്',
    'p': 'പ്',
    'pʰ': 'ഫ ്',
    'ɸ': 'ഫ്',
    'f': 'ഫ്',
    'b': 'ബ്',
    'ʙ': 'ബ്',
    'β': 'ബ്',
    'bʰ': 'ഭ ്',
    'm': 'മ്',
    'ɱ': 'മ്',
    'j': 'യ്',
    'ʎ': 'യ്',
    'y': 'യ്',
    'ʝ': 'യ്',
    'ɾ': 'ര്',
    'l': 'ല്',
    'ʟ': 'ല്',
    'v': 'വ്',
    'ⱱ': 'വ്',
    'ʋ': 'വ്',
    'w': 'വ്',
    'c¸': 'ശ്',
    'ɕ': 'ശ്',
    'ç': 'ശ്',
    'ɬ': 'ശ്',
    'ʃ': 'ഷ്',
    'ʒ': 'ഷ്',
    'ɬ': 'ഷ്',
    'ʂ': 'ഷ്',
    's': 'സ്',
    'z': 'സ്',
    'h': 'ഹ്',
    'ħ': 'ഹ്',
    'ɦ': 'ഹ്',
    'ʕ': 'ഹ്',
    '£': 'ഹ്',
    'x': 'ഹ്',
    'ɭ': 'ള്',
    'ɰ': 'ള്',
    'ɭɰ': 'ള്',
    'ʀ': 'റ്',
    'r': 'റ്',
    'ɽ': 'റ്',
    'ṛ': 'റ്',
    'ɚ': 'റ്',
    'ɝ': 'റ്',
    'ɻ': 'ഴ്',
    'ʐ': 'ഴ്',
    'ɻɹ': 'ഴ്',
    't': 'റ്റ്',
    'T': 'റ്റ്',
    '-': '-',

    // later  added
    'ɓ': 'ബ്',
    'ɗ': 'ഡ്',
    'ʄ': 'ജ്',
    'ɠ': 'ഗ്',
    'ʛ': 'ഗ്',
    'ʘ': 'പ്',
    'ǀ': 'ത്',
    'ǃ': 'റ്',
    'ǂ': 'ച്',
    'ǁ': 'ള്',
    'ɟ': 'ജ്',
    'ɭ': 'ള്',
    'ʑ': 'ഴ്',
    'ɣ': 'ഘ്',
    'ʍ': 'വ്ഹ്',
    'ɹ': 'റ്',

    'ˈ': '',
    'ˌ': '',

    'ˑ': '',

    '˥': '',
    '˦': '',
    '˧': '',
    '˨': '',
    '˩': '',

    '̬': '',
    '̤': '',
    '̰': '',
    '̼': '',
    '̥': '',
    '̮': '',
    '̩': '',
    '̯': '',
    '̪': '',
    '̺': '',
    '̻': '',
    '̚': ''
};


// convert IPA to Malayalam using the map eg:  ˈɡɪvɪŋ -> ഗിവിങ്
function ipaToMalayalam(ipaString) {
    let words = ipaString.trim().split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        // for handling words that are not in the dictionary
        if (word.startsWith('<') && word.endsWith('>')) {
            words[i] = word.slice(1, -1);
        } else {
            let malayalamWord = '';
            for (let j = 0; j < word.length; j++) {
                let ipaChar = word[j];
                let nextChar = j < word.length - 1 ? word[j + 1] : '';
                let nextNextChar = j < word.length - 2 ? word[j + 2] : '';
                if (ipaToMalayalamMap.hasOwnProperty(ipaChar + nextChar + nextNextChar)) {
                    malayalamWord += ipaToMalayalamMap[ipaChar + nextChar + nextNextChar];
                    j += 2;
                } else if (ipaToMalayalamMap.hasOwnProperty(ipaChar + nextChar)) {
                    malayalamWord += ipaToMalayalamMap[ipaChar + nextChar];
                    j++;
                } else if (ipaToMalayalamMap.hasOwnProperty(ipaChar)) {
                    malayalamWord += ipaToMalayalamMap[ipaChar];
                } else {
                    console.warn(`No Malayalam mapping found for IPA symbol: ${ipaChar}`);
                }
            }
            words[i] = malayalamWord;
        }
    }
    return words.join(' ');
}

function replaceVowelCombinations(inputString) {
    const replacements = {

        '്അഇ': 'ൈ',
        '്അഇ': 'ൈ',
        '്അഉ': 'ൗ',
        'അഇ': 'ഐ',
        'അഉ': 'ഔ',
        '്എഉ': 'ൊ',
        '്അ': '',
        '്ആ': 'ാ',
        '്ഇ': 'ി',
        '്ഈ': 'ീ',
        '്ഉ': 'ു',
        '്ഊ': 'ൂ',
        '്ഋ': 'ൃ',
        '്ഌ': 'ൄ',
        '്എ': 'െ',
        '്ഏ': 'േ',
        '്ഐ': 'ൈ',
        '്ഒ': 'ൊ',
        '്ഓ': 'ോ',
        '്ഔ': 'ൌ',
        'ൊഉ': 'ൌ',
        'ന്': 'ൻ',
        'ല്': 'ൽ',
        'ള ്': 'ൾ',
        '(?<!റ്)റ്(?!റ)': 'ർ',
        '(?<!റ)്റ(?!്റ)': '്ര', // literrally spend 2 fkng day to fix this, when i fix  റ്റ് it affect ർ, when i fix ർ it affect റ്റ്, when i fix both it affect '്ര'
    };

    let outputString = inputString;
    for (let key in replacements) {
        let re = new RegExp(key, 'g');
        outputString = outputString.replace(re, replacements[key]);
    }

    return outputString;
}


class Dictionary {
    constructor() {
        this._cacheUK = null;
        this._cacheUS = null;
    }

    async loadDictionary(dictionaryType) {
        let cache;
        let filePath;
        if (dictionaryType === 'UK') {
            cache = this._cacheUK;
            filePath = '/assets/dict/en_UK.txt';
        } else if (dictionaryType === 'US') {
            cache = this._cacheUS;
            filePath = '/assets/dict/en_US.txt';
        } else {
            throw new Error('Invalid dictionary type');
        }

        if (cache === null) {
            cache = new Map();

            const response = await fetch(filePath);
            const text = await response.text();
            const lines = text.split('\n');

            for (const line of lines) {
                const parts = line.split('\t');
                if (parts.length === 2) {
                    const word = parts[0];
                    const ipa = parts[1];
                    cache.set(word, ipa);
                }
            }

            if (dictionaryType === 'UK') {
                this._cacheUK = cache;
            } else {
                this._cacheUS = cache;
            }
        }
    }

    async get(word, dictionaryType) {
        let cache;
        if (dictionaryType === 'UK') {
            if (this._cacheUK === null) {
                await this.loadDictionary('UK');
            }
            cache = this._cacheUK;
        } else if (dictionaryType === 'US') {
            if (this._cacheUS === null) {
                await this.loadDictionary('US');
            }
            cache = this._cacheUS;
        } else {
            throw new Error('Invalid dictionary type');
        }

        let ipa = cache.get(word);
        if (ipa) {
            ipa = ipa.split(', ')[0];
        } else {
            ipa = `<${word}>`; // If the word is not in the IPA dictionary, return the word in between <>
        }
        console.log(ipa);
        return ipa;
    }
}

var dictionary = new Dictionary();

async function convertToIPA(englishSentence, dictionaryType) {
    let words = englishSentence.split(/[ ,.]+/);
    let ipaSentence = await Promise.all(words.map(async word => {
        let cleanedWord = word.replace(/[.,()"?:;]/g, '');
        return await dictionary.get(cleanedWord.toLowerCase(), dictionaryType) || cleanedWord;
    }));
    ipaSentence = ipaSentence.join(' ');
    console.log(ipaSentence);
    return ipaSentence;
}

function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
}

function showToast(toastId) {
    document.getElementById(toastId).classList.remove("opacity-0");

    setTimeout(hideToast.bind(null, toastId), 3000);
}

function hideToast(toastId) {
    document.getElementById(toastId).classList.add("opacity-0");
}

function dismissWarning() {
    localStorage.setItem("hideDemoWarning", true);
}
function copyToClipboard() {
    const textToCopy = document.getElementById('pronunciation').innerText;
    navigator.clipboard.writeText(textToCopy).then(function () {
        showToast('copied-toast')
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', async (event) => {


    await dictionary.loadDictionary('UK');
    await dictionary.loadDictionary('US');
    const button = document.getElementById('submit');
    const textarea = document.querySelector('.relative textarea');
    const sampleButton = document.getElementById('sample');
    const reportButton = document.getElementById('report');


    const pronunciationParagraph = document.getElementById('pronunciation');

    let result = {};

    button.addEventListener('click', async () => {
        const text = textarea.value;
        const letters = document.querySelectorAll('.text-4xl');

        const ipaUKPromise = convertToIPA(text, 'UK');
        const ipaUSPromise = convertToIPA(text, 'US');

        letters.forEach(letter => {
            const delay = Math.random();
            letter.style.animationDelay = `${delay}s`;
            letter.classList.add('sparkle');
        });

        //About this intentional 1.3-second delay in the execution - its my way of saying, "hold up, those text sprinkles animation looks cool".
        const animationPromise = new Promise(resolve => setTimeout(resolve, 1300));

        Promise.all([animationPromise, ipaUKPromise, ipaUSPromise]).then(async ([_, ipaSentenceUK, ipaSentenceUS]) => {
            letters.forEach(letter => {
                letter.classList.remove('sparkle');
            });

            const malayalamUK = replaceVowelCombinations(ipaToMalayalam(ipaSentenceUK));
            const malayalamUS = replaceVowelCombinations(ipaToMalayalam(ipaSentenceUS));

            result = {
                UK: malayalamUK,
                US: malayalamUS
            };
            let usRadio = document.querySelector('#us');
            let ukRadio = document.querySelector('#uk');
            if (usRadio.checked) {
                pronunciationParagraph.textContent = result.US;
            } else if (ukRadio.checked) {
                pronunciationParagraph.textContent = result.UK;
            }
        });
    });
    let usRadio = document.querySelector('#us');
    let ukRadio = document.querySelector('#uk');

    usRadio.addEventListener('change', () => {
        if (usRadio.checked) {
            pronunciationParagraph.textContent = result.US;
        }
    });

    ukRadio.addEventListener('change', () => {
        if (ukRadio.checked) {
            pronunciationParagraph.textContent = result.UK;
        }
    });
    sampleButton.addEventListener('click', () => {
        const samples = [
            "The schedule includes a tour of the laboratory and the library.",
            "Please put the trash in the bin next to the car.",
            "Have you seen the advertisement for the new phone?",
            "Let's check the schedule for the meeting.",
            "The kitchenware is made of aluminium.",
            "Please respect my privacy.",
            "He's always on his mobile phone.",
            "She's growing herbs in her garden.",
            "The lieutenant led the troops into battle.",
            "You need to be an adult to enter the club.",
            "They danced until the early hours of the morning.",
            "Would you like some tomato with your salad?"
        ];
        const randomSample = samples[Math.floor(Math.random() * samples.length)];

        textarea.value = randomSample;
    });

    reportButton.addEventListener('click', () => {


        let inputData = document.querySelector('.relative textarea').value;
        let reason = document.getElementById('reason').value;
        let outputData = document.getElementById('pronunciation').textContent;
        let radio = document.querySelector('input[type="radio"]:checked').nextElementSibling.textContent;


        const data = {
            embeds: [{
                title: "New Submission",
                color: 3447003,
                fields: [
                    {
                        name: "Input",
                        value: inputData,
                        inline: false
                    },
                    {
                        name: "Output",
                        value: outputData,
                        inline: false
                    },
                    {
                        name: "Checkbox",
                        value: radio,
                        inline: false
                    },
                    {
                        name: "Reason",
                        value: reason,
                        inline: false
                    }
                ]
            }]
        };

        fetch('https://discord.com/api/webhooks/1243082443984994334/o-uzHfGQWXAT4-xSa-TL5vy3Ei-ELDLsDDHtY0ZVKkTnRCG1mxYE2TaAYfE9_GJdsLWQ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => console.log('Success:', response))
            .catch((error) => console.error('Error:', error));

        toggleModal();
        showToast('report-toast')

    });


});

const storageKey = 'theme-preference';

const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
  setPreference();
};

const getColorPreference = () => {
  const storedPreference = localStorage.getItem(storageKey);
  if (storedPreference) {
    return storedPreference;
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
  document.firstElementChild.setAttribute('data-theme', theme.value);
  document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
};

const theme = {
  value: getColorPreference(),
};

window.onload = () => {
  reflectPreference();
  document.querySelector('#theme-toggle').addEventListener('click', onClick);
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches:isDark}) => {
  theme.value = isDark ? 'dark' : 'light';
  setPreference();
});