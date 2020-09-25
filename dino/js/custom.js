function swapThemeStylesheet(stylesheetHref) {
  document.getElementById('themeStylesheet').setAttribute('href', stylesheetHref);
}

function swapLogoImage(imageSrc) {
  document.getElementById('logoImg').setAttribute('src', imageSrc);
}

var isVisibleSwitcherContent = true;

function inverseVisibleSwitcherContent() {
  if (isVisibleSwitcherContent) {
    document.getElementById('themeSwitcherContent').style.setProperty('display', 'none');
  } else {
    document.getElementById('themeSwitcherContent').style.setProperty('display', 'inline-grid');
  }
  isVisibleSwitcherContent = !isVisibleSwitcherContent;
}

(function addThemeSwitcher() {
  var switcher = document.createElement('div');
  switcher.setAttribute('id', 'themeSwitcher');
  switcher.innerHTML = '' +
    '<button onclick="inverseVisibleSwitcherContent()">></button>' +
    '<div id="themeSwitcherContent" style="display: inline-grid">' +
    '<p style="text-align: center; height: 12px; color: white;">Color</p>' +
    '<button onclick="swapThemeStylesheet(\'assets/css/theme-color/style-marine.css\')" style="background: #414e6c">&nbsp;</button>' +
    '<button onclick="swapThemeStylesheet(\'assets/css/theme-color/style-blue.css\')" style="background: #0d5890">&nbsp;</button>' +
    '<button onclick="swapThemeStylesheet(\'assets/css/theme-color/style-turquoise.css\')" style="background: #057f9c">&nbsp;</button>' +
    '<button onclick="swapThemeStylesheet(\'assets/css/theme-color/style-blue-parple.css\')" style="background: #4e6798">&nbsp;</button>' +
    '<button onclick="swapThemeStylesheet(\'assets/css/theme-color/style-pink.css\')" style="background: #a0365a">&nbsp;</button>' +
    '<button onclick="swapThemeStylesheet(\'assets/css/theme-color/style-yellow.css\')" style="background: #dbae2d">&nbsp;</button>' +
    '<p style="text-align: center; height: 12px; color: white;">Logo</p>' +
    '<button onclick="swapLogoImage(\'assets/img/logo/logo.jpg\')">Логотип 1</button>' +
    '<button onclick="swapLogoImage(\'assets/img/logo/logo2.jpg\')">Логотип 2</button>' +
    '</div>';
  switcher.style.cssText = 'display: inline-grid; position: fixed; right: 0px; top: 25%; background-color: #4f9fd6; padding: 4px;';
  document.body.appendChild(switcher);
}());
