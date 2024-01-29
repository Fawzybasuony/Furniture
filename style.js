

let img_1 = document.querySelectorAll(".img_1");
let allprodact = document.querySelector(".allprodact");

img_1.forEach(eo => {
     eo.addEventListener("click", () => {

          let photo = eo.parentElement.getElementsByClassName("img_1")[0].src
          let titl = eo.parentElement.getElementsByClassName("hh_2")[0].innerText;
          let pp = eo.parentElement.getElementsByTagName("p")[0].innerText;
          console.log(pp);

          let xx = `

    <div class="prodact_2">
      <img src="${photo}" class="img_2">
    </div>

      <div class="titl">
        <h5 class="card-title my-0 text-dark fw-bold">${titl}</h5>
        <p class="w-50 fw-bold ">${pp}</p>
        <p class="fs-5 fw-bold ">XL  XXL  XXXL </p>
    <button id="btn" class="btn btn-primary px-3">btn</button>

      <a class="back" href="/carousel/index.html"><i class="fa-solid fa-backward"> </i></a>

      </div>


`
          allprodact.innerHTML = xx
          allprodact.style.display = 'block'




     })
});

