/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
var TELEGRAM_USERNAME = "kysyjefo";
var GITHUB_USERNAME = "Andrii-Yukhymenko";
var INSTAGRAM_USERNAME = "_andriy_y";
var consoleFormInput = document.querySelector(".console-bar-form__input");
var consoleForm = document.querySelector(".console-bar-form");
var fakeCaret = document.querySelector(".console-bar-form__fake-caret");
var avatar = document.querySelector(".avatar");
var clock = document.querySelector(".console-bar__clock"); // Список команд и то что они делают

var consoleCommands = [{
  command: "instagram",
  callback: function callback() {
    window.open("https://instagram.com/".concat(INSTAGRAM_USERNAME));
  }
}, {
  command: "telegram",
  callback: function callback() {
    window.open("https://t.me/".concat(TELEGRAM_USERNAME));
  }
}, {
  command: "github",
  callback: function callback() {
    window.open("https://github.com/".concat(GITHUB_USERNAME));
  }
}, {
  command: "dog",
  callback: function callback() {
    avatar.innerText = "            __\n" + "(\\,--------'()'--o\n" + ' (_    ___    /~"\n' + "  (_)_)  (_)_)";
  }
}, {
  command: "dogs",
  callback: function callback() {
    avatar.innerText = "        __\n" + "     __/o \\_\n" + "     \\____  \\\n" + "         /   \\\n" + "   __   //\\   \\\n" + "__/o \\-//--\\   \\_/\n" + "\\____  ___  \\  |\n" + "     ||   \\ |\\ |\n" + "    _||   _||_||";
  }
}, {
  command: "shark",
  callback: function callback() {
    avatar.innerText = " _________         .    .\n" + "(..       \\_    ,  |\\  /|\n" + " \\       O  \\  /|  \\ \\/ /\n" + "  \\______    \\/ |   \\  /\n" + "     vvvv\\    \\ |   /  |\n" + "     \\^^^^  ==   \\_/   |\n" + "      `\\_   ===    \\.  |\n" + "      / /\\_   \\ /      |\n" + "      |/   \\_  \\|      /\n" + "            \\_________/\n" + "              ";
  }
}];

var cleanConsoleInput = function cleanConsoleInput() {
  consoleFormInput.value = "";
  consoleFormInput.classList.remove("console-bar-form__error");
};

consoleFormInput.addEventListener("focus", function () {
  return fakeCaret.style.display = "none";
});
consoleFormInput.addEventListener("focusout", function (e) {
  cleanConsoleInput();
  fakeCaret.style.display = "block"; // consoleFormInput.removeAttribute('readonly');
  // consoleFormInput.focus();
});
consoleForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(consoleFormInput.value);

  if (consoleCommands.some(function (i) {
    return i.command === consoleFormInput.value;
  })) {
    // колбєк если команда валидная
    // перебираем массив, чтобы найти нашу команду
    consoleCommands.forEach(function (i) {
      if (i.command === consoleFormInput.value) {
        i.callback(); // clearTimeout(() => cleanConsoleInput());
      }
    });
    consoleFormInput.value = "";
  } else {
    // колбэк если команды не существует
    consoleFormInput.classList.add("console-bar-form__error");
    consoleFormInput.value = "The term is not recognized."; // consoleFormInput.setAttribute("disabled", "disabled");

    setTimeout(function () {
      return cleanConsoleInput();
    }, 1200);
  }
}); // e.preventDefault();
// consoleCommands.forEach((i) => {
//   console.log(consoleFormInput.value);
//   if (consoleFormInput.value === i.command) {
//     consoleFormInput.value = "";
//     i.callback();
//   } else {
//     consoleFormInput.classList.add("console-bar-form__error");
//     consoleFormInput.value = `The term is not recognized.`;
//     setTimeout(() => cleanConsoleInput(), 1500);
//   }
// });
// for (let i of consoleCommands) {
//   console.log(consoleFormInput.value);
//   if (consoleFormInput.value === i.command) {
//     consoleFormInput.value = "";
//     i.callback();
//     break;
//   } else {
//     consoleFormInput.classList.add("console-bar-form__error");
//     consoleFormInput.value = `The term is not recognized.`;
//     setTimeout(() => cleanConsoleInput(), 1500);
//   }
// }
// });

function setClockTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  clock.innerText = hour + ":" + min;
  var t = setTimeout(function () {
    setClockTime();
  }, 1000);

  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  }
}

setClockTime();
document.addEventListener("keydown", function () {
  consoleFormInput.focus();
});
/******/ })()
;
//# sourceMappingURL=main.js.map