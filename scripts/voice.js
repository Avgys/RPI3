
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;


var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.interimResults = true;
recognition.maxAlternatives = 1;

voice = document.querySelector('.search-input__voice-button');
input = document.querySelector('.search-input');
search = document.querySelector('.search-input__button'); // начало речи

voice.onclick = function() {

    current_lang = localStorage.getItem('language');

    recognition.lang = current_lang;
    recognition.start();
    voice.style.borderRadius = '20px';
    voice.style.backgroundColor = 'red';
    voice.disabled = true;

    if (current_lang == 'en') input.value = 'Speak...';
    else if (current_lang == 'ru') input.value = 'Говорите...';
    else if (current_lang == 'be') input.value = 'Гаварыце...';

}

// результат речи

recognition.onresult = function(event) {

        var city = event.results[0][0].transcript;
        input.value = city;

    } // окончание речи

recognition.onspeechend = function() {
    recognition.stop();
    voice.style.borderRadius = '0';
    voice.style.backgroundColor = 'rgba(0,0,0,0)';
    voice.disabled = false;
    search.click();
}