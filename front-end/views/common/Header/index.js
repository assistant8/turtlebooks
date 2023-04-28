const buttonChange = document.querySelector(".buttons");

if (localStorage.getItem("token") !== null) {
  buttonChange.innerHTML = `
                <a class="button is-primary" href="/mypage">
                  <strong>My Page</strong>
                </a>
                <a class="button is-light" href="/cart" id="cart"><strong>🛒</strong></a>
                <a class="button is-light" href="/" id="logoutBtn"> <strong>LogOut</strong> </a>

  `;

  const logoutBtn = document.querySelector("#logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
  });
} else {
  buttonChange.innerHTML = `
    <div class="buttons">
                <a class="button is-primary" href="/signup">
                  <strong>SignUp</strong>
                </a>
                <a class="button is-light" href="/login"> Login </a>
              </div>
  `;
}

///카테고리 받아와서 뿌려주기
// const categorys = ["소설", "만화", "자기개발", "만화", "수필", "시", "에세이"];
let categorys = [];

try{
  const response = await fetch(`/api/category`, {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
  })
  categorys = await response.json();
} catch(e) {
  console.log("error msg: ", e)
}

//버튼 생성
const dropdown = document.querySelector(".navbar-dropdown"); // .navbar-dropdown 요소 선택
categorys.forEach((category) => {
  const newLink = document.createElement("a"); // 새로운 a 태그 생성
  newLink.classList.add("navbar-item"); // 클래스 추가
  newLink.classList.add("q"); // 클래스 추가
  newLink.textContent = `${category.name}`; // 텍스트 콘텐츠 추가
  dropdown.appendChild(newLink); // .navbar-dropdown에 새로운 a 태그 추가
});

////카테고리들 각각에 이벤트 붙이기
const catebuttons = document.querySelectorAll(".q"); //버튼들의 리스트
catebuttons.forEach((catebutton, idx) => {
  console.log(idx, catebutton)
  console.log("?",idx, categorys[idx]._id)
  catebutton.addEventListener("click", () => {
    window.location.href = `/itemList?category=${categorys[idx]._id}`;
  });
});



///////////////////////////////////
// let categorys = [];

// try{
//   const response = await fetch(`/api/category`, {
//       method: "GET",
//       headers: {'Content-Type': 'application/json'}
//   })
//   categorys = await response.json();
// } catch(e) {
//   console.log("error msg: ", e)
// }

// //버튼 생성
// const buttonlist2 = document.querySelector(".navbar-dropdown");
// categorys.forEach((e) => {
//   buttonlist2.innerHTML += `<button class="navbar-item">${e.name}</button>`;
// });

// ////카테고리들 각각에 이벤트 붙이기
// const catebuttons = document.querySelectorAll(".catebutton"); //버튼들의 리스트
// catebuttons.forEach((catebutton, i) => {
//   catebutton.addEventListener("click", () => {
//     window.location.href = `/itemList?category=${categorys[i]._id}`;
//   });
// });
