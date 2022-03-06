/*!
 * Start Bootstrap - New Age v6.0.5 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  const makeQR = (qr_data) => {
    document.getElementById("arrow-image").style.display = "none";
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRious({
      element: qrcodeContainer,
      value: qr_data,
      size: 180,
      level: "L",
    });
    var link = document.getElementById("downloadBtn");
    link.download = "qrcode.png";
    link.removeAttribute("hidden");
    link.setAttribute("data-value", qr_data);
    link.setAttribute("title", "this qr code directs to " + qr_data);
    link.href = document.getElementById("qrcode").toDataURL();
  };

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  function generateQr() {
    var getUrl = document.getElementById("qrUrl").value;
    if (validURL(getUrl)) {
      var getLinkValue = document
        .getElementById("downloadBtn")
        .getAttribute("data-value");
      if (getUrl !== getLinkValue) {
        makeQR(getUrl);
        document.getElementById("arrow-image").style.display = "block";
      }
    } else {
      alert("please use a valid url");
    }
  }

  function logKey(e) {
    if (e.keyCode == 13) {
      generateQr();
    }
  }

  document.getElementById("qrUrl").addEventListener("keydown", logKey);

  document.getElementById("qrButton").addEventListener("click", generateQr);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
