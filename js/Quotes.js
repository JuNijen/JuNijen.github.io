const quotes = [{
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "We must believe in luck. For how else can we explain the success of those we don’t like?",
        author: "Jean Cocteau",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Edison",
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author: "Reid Hoffman",
    },
];

// 랜덤한 명언을 생성하여 화면에 표기 해 준다.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = ` - ${randomQuote.author}`;