"use strict";
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var t = document.createElement("style");
    t.appendChild(
      document.createTextNode(
        "@import url(https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap);.flex-popup{font-family:'Work Sans',sans-serif;background:#fff;-webkit-box-shadow:0 4px 90px rgba(0,0,0,.15);box-shadow:0 4px 90px rgba(0,0,0,.15);border-radius:8px;max-width:520px;width:100%;padding:29px 35px;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;bottom:-300px;right:30px;-webkit-transition:bottom .33s ease-in-out;-o-transition:bottom .33s ease-in-out;transition:bottom .33s ease-in-out}.flex-popup--visible{bottom:30px}.flex-popup__image{padding-top:5px;margin-right:35px}.flex-popup__title{font-style:normal;font-weight:600;font-size:16px;line-height:1.5;letter-spacing:.01em;color:#3f3a41;margin-bottom:9px}.flex-popup__description{font-style:normal;font-weight:400;font-size:13px;line-height:1.54;letter-spacing:.01em;color:#3f3a41;margin-bottom:16px}.flex-popup__link{background:#6446a4;border-radius:4px;font-style:normal;font-weight:600;font-size:12px;line-height:1.4;text-align:center;letter-spacing:.08em;text-transform:uppercase;color:#fff !important;padding:12px 68px;display:inline-block;text-decoration:none;-webkit-transition:background-color .15s ease-in-out;-o-transition:background-color .15s ease-in-out;transition:background-color .15s ease-in-out}.flex-popup__link:hover{background:#432f6e;color:#fff !important;text-decoration:none}.flex-popup__close{padding:0;margin:0;border:none;background:#fff;-webkit-box-shadow:0 4px 24px rgba(0,0,0,.15);box-shadow:0 4px 24px rgba(0,0,0,.15);border-radius:50%;width:30px;height:30px;top:-45px;right:0;position:absolute;-webkit-transition:background-color .15s ease-in-out,opacity .15s ease-in-out;-o-transition:background-color .15s ease-in-out,opacity .15s ease-in-out;transition:background-color .15s ease-in-out,opacity .15s ease-in-out;opacity:0;color:#3f3a41;pointer-events:none}.flex-popup--hovered .flex-popup__close{opacity:1;pointer-events:all}.flex-popup__close:after,.flex-popup__close:before{content:'';background:currentColor;width:13px;height:2px;position:absolute;left:50%;top:50%}.flex-popup__close:before{-webkit-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.flex-popup__close:after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.flex-popup__close:hover{border:none;color:#3f3a41;background:#d9d9d9;cursor:pointer}@media (min-width:1200px){.flex-popup--visible:before{content:'';background-color:transparent;width:100%;height:50px;position:absolute;top:-50px;left:0}}@media (max-width:1199px){.flex-popup{right:20px;text-align:center}.flex-popup--visible{bottom:20px}.flex-popup__close{opacity:1;pointer-events:all}}@media (max-width:560px){.flex-popup{padding:17px 20px;max-width:calc(100vw - 40px)}.flex-popup__image{display:none}}"
      )
    ),
      document.head.appendChild(t);
    var i = document.createElement("div");
    (i.className = "flex-popup flex-popup--visible"),
      (i.innerHTML =
        `\n    <button type="button" class="flex-popup__close"></button>\n    
        <div class="flex-popup__image">\n  \n    </div>\n    
        <div class="flex-popup__text">\n        
        <div class="flex-popup__title">Split your rent into smaller, stress-free payments with Flex</div>\n        
        <div class="flex-popup__description">Now available for all residents. Download now for iOS and Android.</div>\n        
        <a href="https://getflex.app.link/PIeBWBKoc5" class="flex-popup__link">Get Flex</a>\n    </div>\n  `)      
      document.body.appendChild(i),
      setTimeout(function () {
        i.classList.add("flex-popup--visible");
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
          i.classList.remove("flex-popup--visible");
        });
  },
  !1
);