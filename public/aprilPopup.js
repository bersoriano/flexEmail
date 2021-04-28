"use strict";
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var t = document.createElement("style");
    t.appendChild(
      document.createTextNode(
        "@import url(https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap); .flexLogo { position: absolute; right: 0; bottom: 0; max-height: 45px; margin: 4rem 2rem; } .subTitle { font-size: 1.3rem; } .floating-info { padding: 2rem; display: flex; flex-direction: row; color: white; border-radius: 1rem; font-size: 1.5rem; overflow: hidden; } .left-col { text-align: left; flex: 5; display: flex; flex-direction: column; } .left-col .flex-btn { margin: 2rem auto 2rem 0; } .right-col { text-align: left; flex: 1; display: flex; } .right-col img { max-height: 45px; margin: auto 0rem 2rem auto; } .floating-info span { margin: 1rem; } .flex-btn { font-size: 1.3rem; outline: none; border: 1px solid black; background: white; border-radius: 4px; font-weight: 600; line-height: 1.4; text-align: center; letter-spacing: 0.08em; text-transform: uppercase; color: black; padding: 12px 68px; display: inline-block; text-decoration: none; } .flex-btn:hover { opacity: 0.8; } .flex-popup { font-family: 'Work Sans', sans-serif; background-color: #644aac; -webkit-box-shadow: 0 4px 90px rgba(0, 0, 0, 0.15); box-shadow: 0 4px 90px rgba(0, 0, 0, 0.15); border-radius: 8px; max-width: 450px; width: 100%; display: -webkit-box; display: -ms-flexbox; display: flex; position: fixed; bottom: -300px; left: 30px; flex-direction: column; z-index: 1; } .flex-popup--visible { bottom: 30px; } .flex-popup__link { background: #6446a4; border-radius: 4px; font-style: normal; font-weight: 600; font-size: 12px; line-height: 1.4; text-align: center; letter-spacing: 0.08em; text-transform: uppercase; color: #fff !important; padding: 12px 68px; display: inline-block; text-decoration: none; } .flex-popup__link:hover { background: #432f6e; color: #fff !important; text-decoration: none; } .flex-popup__close { padding: 0; margin: 0; border: none; background: #fff; -webkit-box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15); border-radius: 50%; width: 30px; height: 30px; right: 0; position: absolute; opacity 0.15s ease-in-out; color: #3f3a41; pointer-events: none; margin: 2rem; pointer-events: all; } .flex-popup--hovered .flex-popup__close { opacity: 1; pointer-events: all; } .flex-popup__close:after, .flex-popup__close:before { content: ''; background: currentColor; width: 13px; height: 2px; position: absolute; left: 50%; top: 50%; } .flex-popup__close:before { -webkit-transform: translate(-50%, -50%) rotate(45deg); -ms-transform: translate(-50%, -50%) rotate(45deg); transform: translate(-50%, -50%) rotate(45deg); } .flex-popup__close:after { -webkit-transform: translate(-50%, -50%) rotate(-45deg); -ms-transform: translate(-50%, -50%) rotate(-45deg); transform: translate(-50%, -50%) rotate(-45deg); } .flex-popup__close:hover { border: none; color: #3f3a41; background: #d9d9d9; cursor: pointer; } @media (max-width: 480px) { .floating-info { flex-direction: column; margin: 2rem; } .floating-info img { margin: 1rem; } .flex-btn { margin: 1rem auto; padding: 1rem; width: 100%; } } @media (min-width: 1200px) { .flex-popup--visible:before { content: ''; background-color: transparent; width: 100%; height: 50px; position: absolute; top: -50px; left: 0; } } @media (max-width: 1199px) { .flex-popup { right: 20px; text-align: center; } .flex-popup--visible { bottom: 20px; } } @media (max-width: 560px) { .flex-popup { max-width: calc(100vw - 40px); right:0; } .flexLogo { margin: 1rem; } }"
      )
    ),
    document.head.appendChild(t);      
    var i = document.createElement("div");
    if (sessionStorage.getItem('flex-modal-visible') === "true") {
      i.classList.add("flex-popup--visible");
    }
    (i.className = "flex-popup"),
      (i.innerHTML =
        `<span style="display:none;" class="flex-popup--visible"></span> <button type="button" class="flex-popup__close"></button> <div class="floating-info"> <div class="left-col"> <span> <strong>Simply a smarter way to pay rent!!</strong> </span> <span class="subTitle"> Split your rent into smaller, stress-free payments today. Available for all residents. </span> <a href="https://getflex.app.link/afwKZlFisfb" class="flex-btn"> Get Flex </a> </div> <img class="flexLogo" src="https://getflex.com/wp-content/uploads/2021/03/flex-logo-4.png"></img> </div>`  
      )      
      document.body.appendChild(i),
      setTimeout(function () {
        if (sessionStorage.getItem('flex-modal-visible') !== undefined 
          && sessionStorage.getItem('flex-modal-visible') !== null) {
          sessionStorage.getItem('flex-modal-visible') === "true" ? 
            i.classList.add("flex-popup--visible") 
            : i.classList.remove('flex-popup--visible');            
        }
        else {
          sessionStorage.setItem('flex-modal-visible',"true");
          i.classList.add("flex-popup--visible");
        }
      }, 1e3),
      i.addEventListener("mouseover", function () {
        i.classList.add("flex-popup--hovered");
      }),
      i.addEventListener("mouseleave", function () {
        i.classList.remove("flex-popup--hovered");
      }),
      i
        .querySelector(".flex-popup__close")
        .addEventListener("click", function () {
          sessionStorage.setItem('flex-modal-visible', "false");
          i.classList.remove("flex-popup--visible");
        });
  },
  !1
);