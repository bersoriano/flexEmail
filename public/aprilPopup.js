"use strict";
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var t = document.createElement("style");
    t.appendChild(
      document.createTextNode(
        "@import url(https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap); .title { font-size: 18px } .flexLogo { position: absolute; right: 0; bottom: 0; max-height: 45px; margin: 2em; } .subTitle { font-size: 16px; } .floating-info { padding: 1em; display: flex; flex-direction: row; color: white; border-radius: 1em; overflow: hidden; } .left-col { text-align: left; flex: 5; display: flex; flex-direction: column; font-size: 16px; } .left-col #flex-btn { margin: 1em auto 1em 1em } .right-col { text-align: left; flex: 1; display: flex; } .right-col img { max-height: 45px; margin: auto 0em 2em auto; } .floating-info span { margin: 1em 2em 0 1em; } #flex-btn { font-size: 16px; outline: none; border: 1px solid black; background: white; border-radius: 4px; font-weight: 600; line-height: 1.4; text-align: center; letter-spacing: 0.08em; text-transform: uppercase; color: black; padding: 12px 68px; display: inline-block; text-decoration: none; } #flex-btn:hover { opacity: 0.8; } .flex-popup { font-family: 'Work Sans', sans-serif; font-size: 12px; background-color: #644aac; -webkit-box-shadow: 0 4px 90px rgba(0, 0, 0, 0.15); box-shadow: 0 4px 90px rgba(0, 0, 0, 0.15); border-radius: 8px; max-width: 450px; width: 100%; display: -webkit-box; display: -ms-flexbox; display: flex; position: fixed; bottom: -500px; left: 30px; flex-direction: column; z-index: 999; } .flex-popup--visible { bottom: 30px; } .flex-popup__link { background: #6446a4; border-radius: 4px; font-style: normal; font-weight: 600; font-size: 12px; line-height: 1.4; text-align: center; letter-spacing: 0.08em; text-transform: uppercase; color: #fff !important; padding: 12px 68px; display: inline-block; text-decoration: none; } .flex-popup__link:hover { background: #432f6e; color: #fff !important; text-decoration: none; } .flex-popup__close { padding: 0; border: none; background: #fff; -webkit-box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15); border-radius: 50%; width: 30px; height: 30px; right: 0; position: absolute; color: #3f3a41; pointer-events: none; margin: 2em; pointer-events: all; } .flex-popup__close { opacity: 1; pointer-events: all; } .flex-popup__close:after, .flex-popup__close:before { content: ''; background: currentColor; width: 13px; height: 2px; position: absolute; left: 50%; top: 50%; } .flex-popup__close:before { -webkit-transform: translate(-50%, -50%) rotate(45deg); -ms-transform: translate(-50%, -50%) rotate(45deg); transform: translate(-50%, -50%) rotate(45deg); } .flex-popup__close:after { -webkit-transform: translate(-50%, -50%) rotate(-45deg); -ms-transform: translate(-50%, -50%) rotate(-45deg); transform: translate(-50%, -50%) rotate(-45deg); } .flex-popup__close:hover { border: none; color: #3f3a41; background: #d9d9d9; cursor: pointer; } @media (max-width: 480px) { .floating-info .flexLogo { margin: 0 30px 30px; } .flex-popup__close { margin: 24px } .floating-info { flex-direction: column; margin: 12px; } #flex-btn { margin: 1em auto; padding: 1em; width: 100%; } } @media (min-width: 1200px) { .flex-popup--visible:before { content: ''; background-color: transparent; width: 100%; height: 50px; position: absolute; top: -50px; left: 0; } } @media (max-width: 560px) { .flex-popup__close { margin: 20px; } .title { font-size: 17px } .subTitle { font-size: 15px} .flex-popup { left: 0; margin: 0; width: 100vw; border-radius: 0; } .flex-popup--visible { bottom: 0; max-width: initial; } .flexLogo { margin: 0 30px 16px; } .floating-info { padding: 0 } .floating-info .title { margin: 12px 48px 0 12px } .floating-info span { margin: 12px 50px 0 12px } .left-col #flex-btn { margin: 12px auto 12px 12px; box-sizing: border-box; max-width: 50%; } }"
      )
    ),
      document.head.appendChild(t);
    var i = document.createElement("div");
    if (sessionStorage.getItem("flex-modal-visible") === "true") {
      i.classList.add("flex-popup--visible");
    }
    (i.className = "flex-popup"),
      (i.innerHTML = `</span> <button type="button" class="flex-popup__close"></button> <div class="floating-info"> <div class="left-col"> <span class="title"> <strong>Simply a smarter way to pay rent!!</strong> </span> <span class="subTitle"> Split your rent into smaller, stress-free payments today. Available for all residents. </span> <a href="https://getflex.app.link/8PZc4g0ePfb" rel=“nofollow” id="flex-btn"> Get Flex </a> </div> <img class="flexLogo" src="https://getflex.com/wp-content/uploads/2021/03/flex-logo-4.png"></img> </div>`);
    document.body.appendChild(i),
      setTimeout(function () {
        if (
          sessionStorage.getItem("flex-modal-visible") !== undefined &&
          sessionStorage.getItem("flex-modal-visible") !== null
        ) {
          sessionStorage.getItem("flex-modal-visible") === "true"
            ? i.classList.add("flex-popup--visible")
            : i.classList.remove("flex-popup--visible");
        } else {
          sessionStorage.setItem("flex-modal-visible", "true");
          i.classList.add("flex-popup--visible");
        }

        const pmc_partnername = _partner_name;
        const partnerid = _partner_id;
        var dynamicURL = (()=> `https://getflex.app.link/8PZc4g0ePfb?utm_source=pmc_${pmc_partnername}_${partnerid}&utm_medium=widget` )()
        document.getElementById("flex-btn").href = dynamicURL;
      }, 1e3),
      i
        .querySelector(".flex-popup__close")
        .addEventListener("click", function () {
          sessionStorage.setItem("flex-modal-visible", "false");
          i.classList.remove("flex-popup--visible");
        });
  },
  !1
);
