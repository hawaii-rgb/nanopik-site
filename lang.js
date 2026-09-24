// 언어는 하나의 페이지 안에서 갈린다 — 주소가 둘이면 애플에 낼 URL 도 둘이 된다.
(function () {
  var want = (navigator.language || "en").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
  var saved = null;
  try { saved = localStorage.getItem("nanopik-lang"); } catch (e) {}
  set(saved || want);
  function set(code) {
    document.querySelectorAll("[data-loc]").forEach(function (el) {
      el.classList.toggle("on", el.getAttribute("data-loc") === code);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.pick === code));
    });
    document.documentElement.setAttribute("lang", code);
    try { localStorage.setItem("nanopik-lang", code); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang button");
    if (b) set(b.dataset.pick);
  });
})();
