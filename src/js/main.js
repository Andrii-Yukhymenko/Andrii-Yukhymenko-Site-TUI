const TELEGRAM_USERNAME = "kysyjefo";
const GITHUB_USERNAME = "Andrii-Yukhymenko";
const INSTAGRAM_USERNAME = "_andriy_y";

const consoleFormInput = document.querySelector(".console-bar-form__input");
const consoleForm = document.querySelector(".console-bar-form");
const fakeCaret = document.querySelector(".console-bar-form__fake-caret");
const avatar = document.querySelector(".avatar");
const clock = document.querySelector(".console-bar__clock");

// Список команд и то что они делают
const consoleCommands = [
  {
    command: "instagram",
    callback: () => {
      window.open(`https://instagram.com/${INSTAGRAM_USERNAME}`);
    },
  },
  {
    command: "telegram",
    callback: () => {
      window.open(`https://t.me/${TELEGRAM_USERNAME}`);
    },
  },
  {
    command: "github",
    callback: () => {
      window.open(`https://github.com/${GITHUB_USERNAME}`);
    },
  },
  {
    command: "dog",
    callback: () => {
      avatar.innerText =
        "            __\n" +
        "(\\,--------'()'--o\n" +
        ' (_    ___    /~"\n' +
        "  (_)_)  (_)_)";
    },
  },
  {
    command: "dogs",
    callback: () => {
      avatar.innerText =
        "        __\n" +
        "     __/o \\_\n" +
        "     \\____  \\\n" +
        "         /   \\\n" +
        "   __   //\\   \\\n" +
        "__/o \\-//--\\   \\_/\n" +
        "\\____  ___  \\  |\n" +
        "     ||   \\ |\\ |\n" +
        "    _||   _||_||";
    },
  },
  {
    command: "shark",
    callback: () => {
      avatar.innerText =
        " _________         .    .\n" +
        "(..       \\_    ,  |\\  /|\n" +
        " \\       O  \\  /|  \\ \\/ /\n" +
        "  \\______    \\/ |   \\  /\n" +
        "     vvvv\\    \\ |   /  |\n" +
        "     \\^^^^  ==   \\_/   |\n" +
        "      `\\_   ===    \\.  |\n" +
        "      / /\\_   \\ /      |\n" +
        "      |/   \\_  \\|      /\n" +
        "            \\_________/\n" +
        "              ";
    },
  },
];

const cleanConsoleInput = () => {
  consoleFormInput.value = "";
  consoleFormInput.classList.remove("console-bar-form__error");
};

consoleFormInput.addEventListener(
  "focus",
  () => (fakeCaret.style.display = "none")
);
consoleFormInput.addEventListener("focusout", (e) => {
  cleanConsoleInput();
  fakeCaret.style.display = "block";
  // consoleFormInput.removeAttribute('readonly');
  // consoleFormInput.focus();
});

consoleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(consoleFormInput.value);
  if (
    consoleCommands.some((i) => {
      return i.command === consoleFormInput.value;
    })
  ) {
    // колбєк если команда валидная
    // перебираем массив, чтобы найти нашу команду
    consoleCommands.forEach((i) => {
      if (i.command === consoleFormInput.value) {
        i.callback();
        // clearTimeout(() => cleanConsoleInput());
      }
    });
    consoleFormInput.value = "";
  } else {
    // колбэк если команды не существует
    consoleFormInput.classList.add("console-bar-form__error");
    consoleFormInput.value = `The term is not recognized.`;
    // consoleFormInput.setAttribute("disabled", "disabled");
    setTimeout(() => cleanConsoleInput(), 1200);
  }
});

// e.preventDefault();
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
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  clock.innerText = hour + ":" + min;
  let t = setTimeout(() => {
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

document.addEventListener("keydown", () => {
  consoleFormInput.focus();
});
