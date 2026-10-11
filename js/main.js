/* Shared site script: plain JS, no dependencies.
   1. Mobile nav toggle   2. Scroll reveal   3. Footer year   4. YouTube click-to-load facade */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  /* 1. Mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* 2. Gentle reveal on scroll (skipped when reduced motion is requested) */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* 2b. Autoplay videos: pause for reduced motion (show controls instead);
         otherwise play only while on screen to save CPU/battery. */
  document.querySelectorAll("video[autoplay]").forEach(function (v) {
    if (reduce) {
      v.removeAttribute("autoplay");
      v.pause();
      v.controls = true;
      return;
    }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
          else { v.pause(); }
        });
      }, { threshold: 0.2 }).observe(v);
    }
  });

  /* 3. Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* 4. YouTube facade: <div class="yt" data-yt-id="VIDEO_ID" data-yt-title="...">
        containing a thumbnail <img> and a <button class="yt__btn">. */
  document.querySelectorAll(".yt[data-yt-id]").forEach(function (box) {
    var btn = box.querySelector(".yt__btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var id = box.getAttribute("data-yt-id");
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
      iframe.title = box.getAttribute("data-yt-title") || "YouTube video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      box.innerHTML = "";
      box.appendChild(iframe);
      iframe.focus();
    });
  });
})();
