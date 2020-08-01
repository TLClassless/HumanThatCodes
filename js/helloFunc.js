let words = ["Hello", "Olá", "Привет", "你好", "Ahoj", "Bonjour", "Kamusta", "Hei", "Aloha", "Ciao", "こんにちは", "여보세요", "Hallå"];

let getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

let word = getRandomWord();

console.log(word);

document.getElementById("hello").textContent = word;