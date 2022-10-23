const quotes = [
  {
    quote: " 확고유연, 불광불급, 마부작침",
    author: "Quest Learn",
  },
  {
    quote: "빼기는 최고의 더하기다.",
    author: "Quest Learn",
  },
  {
    quote: "열망을 담금질한다.",
    author: "Quest Learn",
  },
  {
    quote: "버리고 세우고 지키기.",
    author: "Quest Learn",
  },
  {
    quote: "시작이 반이다. 나머지는 마무리다.",
    author: "Quest Learn",
  },
  {
    quote:
      "수신양인 지인용인 여유 평정심 / 높고낮고 넓고깊게 먼저멀리 제때제대로",
    author: "Quest Learn",
  },
  {
    quote:
      "지금 이 순간이 가장 젊고 최고일때다! / 오늘은 내 생에 남은 첫번째 날이다.",
    author: "Quest Learn",
  },
  {
    quote: "나에게 솔직하고, 나를 믿고, 나를 사랑한다.",
    author: "Quest Learn",
  },
  {
    quote: "사람에게 배운다.",
    author: "Quest Learn",
  },
  {
    quote: "잊기 위해 메모하고, 활용하기 위해 0노트한다.",
    author: "Quest Learn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
