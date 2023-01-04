"use strict";

var puppeteer = require("puppeteer");

var _require = require("./constant"),
    EMAIL = _require.EMAIL,
    PASSWORD = _require.PASSWORD,
    UPDATE_PAGE = _require.UPDATE_PAGE;

function delay() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

function giteePageUpdate() {
  var browser, page, email, pwd, loginButtons, updateButtons;
  return regeneratorRuntime.async(function giteePageUpdate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(puppeteer.launch());

        case 2:
          browser = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(page["goto"]("https://gitee.com/login"));

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(page.$x('//*[@id="user_login"]'));

        case 10:
          email = _context2.sent;
          _context2.next = 13;
          return regeneratorRuntime.awrap(email[0].type(EMAIL));

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(page.$x('//*[@id="user_password"]'));

        case 15:
          pwd = _context2.sent;
          _context2.next = 18;
          return regeneratorRuntime.awrap(pwd[0].type(PASSWORD));

        case 18:
          _context2.next = 20;
          return regeneratorRuntime.awrap(page.$x('//*[@class="git-login-form-fields"]/div[4]/input'));

        case 20:
          loginButtons = _context2.sent;
          _context2.next = 23;
          return regeneratorRuntime.awrap(loginButtons[0].click());

        case 23:
          _context2.next = 25;
          return regeneratorRuntime.awrap(delay(2000));

        case 25:
          _context2.next = 27;
          return regeneratorRuntime.awrap(page["goto"](UPDATE_PAGE));

        case 27:
          _context2.next = 29;
          return regeneratorRuntime.awrap(page.on("dialog", function _callee(dialog) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("确认更新");
                    dialog.accept();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }));

        case 29:
          _context2.next = 31;
          return regeneratorRuntime.awrap(page.$x('//*[@id="pages-branch"]/div[6]'));

        case 31:
          updateButtons = _context2.sent;
          console.log('updateButtons', updateButtons);
          _context2.next = 35;
          return regeneratorRuntime.awrap(updateButtons[0].click());

        case 35:
          if (!true) {
            _context2.next = 55;
            break;
          }

          _context2.next = 38;
          return regeneratorRuntime.awrap(delay(2000));

        case 38:
          _context2.prev = 38;
          _context2.next = 41;
          return regeneratorRuntime.awrap(page.$x('//*[@id="pages_deploying"]'));

        case 41:
          deploying = _context2.sent;

          if (!(deploying.length > 0)) {
            _context2.next = 46;
            break;
          }

          console.log("更新中...");
          _context2.next = 48;
          break;

        case 46:
          console.log("更新完毕");
          return _context2.abrupt("break", 55);

        case 48:
          _context2.next = 53;
          break;

        case 50:
          _context2.prev = 50;
          _context2.t0 = _context2["catch"](38);
          return _context2.abrupt("break", 55);

        case 53:
          _context2.next = 35;
          break;

        case 55:
          _context2.next = 57;
          return regeneratorRuntime.awrap(delay(1000));

        case 57:
          // 8.更新完毕，关闭浏览器
          browser.close();

        case 58:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[38, 50]]);
}

giteePageUpdate();