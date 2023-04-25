// const rightArrow = document.querySelector('.right-arrow');
// const books = document.querySelectorAll('.book');

// rightArrow.addEventListener('click', () => {
//   // 마지막 책 item을 첫번째로 이동
//   const lastBook = books[books.length - 1];
//   const firstBook = books[0];
//   lastBook.after(firstBook);

//   // 모든 책 item 오른쪽으로 이동
//   books.forEach(book => {
//     book.style.transform = 'translateX(calc(-25% - 16px))';
//   });
// });

const books = [
  {
    id: 1,
    title: "브라질에 비가 내리면 스타벅스 주식을 사라",
    author: "피터 나바로",
    publisher: "에프엔미디어",
    publishDate: "2022.04.25",
    description:
      "‘숲(경제 흐름)과 나무(종목)’를 함께 보라! 전쟁, 전염병, 기후, 금리, 환율, 인플레이션… 거시경제 지표를 이해하면 변동성은 기회다!",
    price: 16200,
    imagesrc: "../assets/book1.jpg",
    topic: "best",
    category: "소설",
  },
  {
    id: 2,
    title: "2챗GPT가 내 생각을 훔쳐버린다면!?!?!?",
    author: "피터 나바로",
    publisher: "에프엔미디어",
    publishDate: "2022.04.25",
    description: "22",
    price: 17000,
    imagesrc: "../assets/book2.jpg",
    topic: "best",
    category: "소설",
  },
  {
    id: 3,
    title: "3챗GPT가 내 생각을 훔쳐버린다면!?!?!?",
    author: "피터 나바로",
    publisher: "에프엔미디어",
    publishDate: "2022.04.25",
    description: "22",
    price: 17000,
    imagesrc: "../assets/book2.jpg",
    topic: "best",
    category: "소설",
  },
  {
    id: 4,
    title: "4챗GPT가 내 생각을 훔쳐버린다면!?!?!?",
    author: "피터 나바로",
    publisher: "에프엔미디어",
    publishDate: "2022.04.25",
    description: "22",
    price: 17000,
    imagesrc: "../assets/book2.jpg",
    topic: "best",
    category: "소설",
  },
  {
    id: 5,
    title: "normal5",
    author: "피터 나바로",
    publisher: "에프엔미디어",
    publishDate: "2022.04.25",
    description: "22",
    price: 17000,
    imagesrc: "../assets/book2.jpg",
    topic: "normal",
    category: "소설",
  },
  {
    id: 6,
    title: "6챗GPT가 내 생각을 훔쳐버린다면!?!?!?",
    author: "피터 나바로",
    publisher: "에프엔미디어",
    publishDate: "2022.04.25",
    description: "22",
    price: 17000,
    imagesrc: "../assets/book2.jpg",
    topic: "best",
    category: "만화",
  },
  // ... 다른 책들
];

// best만 html로 뿌려주기
const bestitems = document.querySelector(".slider-items");

books.forEach((book) => {
  if (book.topic === "best") {
    bestitems.innerHTML += `
            <div class="slider-item">
                <img src=${book.imagesrc} alt="Book cover">
                <p class="category">${book.category}</p>
                <p class="title">${book.title}</p>
            </div>
        `;
  }
});

// 양쪽 버튼에 넘어가는 함수 구현
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const sliderItems = document.querySelector(".slider-items");

const itemWidth = sliderItems.firstElementChild.getBoundingClientRect().width;
const visibleItems = Math.floor(
  sliderItems.parentElement.clientWidth / itemWidth
);
const totalItems = sliderItems.children.length;
let currentPosition = 0;

function updateButtons() {
  prevBtn.disabled = currentPosition === 0;
  nextBtn.disabled = currentPosition === totalItems - visibleItems;
}

function slideItems(direction) {
  currentPosition += direction === "prev" ? -1 : 1;
  sliderItems.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
  updateButtons();
}

prevBtn.addEventListener("click", () => slideItems("prev"));
nextBtn.addEventListener("click", () => slideItems("next"));

updateButtons();

// 베스트, 신작, 스테디 버튼에 스크롤 onclick 함수 달아주기
const bestbutton = document.querySelector("#bestbutton");
const newbutton = document.querySelector("#newbutton");
const steadybutton = document.querySelector("#steadybutton");

bestbutton.addEventListener("click", scrolltoBest);
newbutton.addEventListener("click", scrolltoNew);
steadybutton.addEventListener("click", scrolltoSteady);

function scrolltoBest() {
  const best = document.querySelector("#best");
  const topPos = best.offsetTop;
  window.scrollTo({
    top: topPos - 55,
    behavior: "smooth",
  });
}

function scrolltoNew() {
  const news = document.querySelector("#new");
  const topPos = news.offsetTop;
  window.scrollTo({
    top: topPos,
    behavior: "smooth",
  });
}

function scrolltoSteady() {
  const steady = document.querySelector("#steady");
  const topPos = steady.offsetTop;
  window.scrollTo({
    top: topPos,
    behavior: "smooth",
  });
}

//카테고리 목록 따오기
const categoryContainer = document.querySelector(".buttonlist2");

var button = document.createElement("button")
//각 카테고리마다 button 하나씩 만들어서 내용 넣어줌
//리스트 형태도 ok 