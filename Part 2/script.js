document.addEventListener("DOMContentLoaded", () => {
  // Disable drag and drop
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  document.addEventListener("drop", (event) => {
    event.preventDefault();
  });

  // Disable right-click
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  let popupCount = 0;
  const popupContainer = document.getElementById("popup-container");
  const fullscreenButton = document.getElementById("fullscreen-button");
  const backgroundAudio = document.getElementById("background-audio");

  const popupContents = [
    `
        <div class="main-btn">
            <button class="btn skip"><img src="img/d7.svg"></button>
            <button class="btn close"><img src="img/d1.webp"></button>
        </div>
        <img class="c" src="./img/p1.webp">`,
    `
        <div class="main-btn">
            <button class="btn skip"><img src="img/d7.svg"></button>
            <button class="btn close"><img src="img/d1.webp"></button>
        </div>
        <img class="c" src="./img/p2.webp">`,
    `
        <div class="main-btn">
            <button class="btn skip"><img src="img/d7.svg"></button>
            <button class="btn close"><img src="img/d1.webp"></button>
        </div>
        <img class="c" src="./img/p3.webp">`,
    `    
        <div class="main-btn">
            <button class="btn skip"><img src="img/d7.svg"></button>
            <button class="btn close"><img src="img/d1.webp"></button>
        </div>
    
        <div class="wrapper">
            <div class="wrapper-icon-logo">
                <div class="wrapper-icon">
                    <img src="img/d5.webp">
                </div>
            </div>
            <div class="wrapper-main">
                <div class="wrapper-main-title">Windowsファイアウォール</div>
                <div class="wrapper-main-text">
                    <label style="font-weight:bold;" class="wrapper-main-text-alert">ウイルス_アラート-エラーコード:#RF6BS44</label>
                    <label class="wrapper-main-text-adress">本 Windows
                        アクセスはこのパソコンのプロックセキュリティ上の理由.</label>
                    <label style="font-weight:bold;" class="wrapper-main-text-tel">Windowsサポートに連結する: (0101) 50 1762 0302
                    </label>
                </div>
            </div>

            <div class="wrapper-footer">
                <div class="wrapper-footer-text">
                    <span>青威が検出された-Virus Spyware</span>
                    <span>のでは: Ads.financetrack(1).exe</span>
                </div>

                <div class="wrapper-buttons">
                    <button class="btn" onclick="simulateButtonClick()">
                        クイックサポート
                    </button>
                    <button class="btn btn-right">安全に戻る</button>
                </div>
            </div>
        </div>
    `,
    `
      <div id="banner_chat" class="banner chat">
        <img src="img/d4.webp" alt="" />
        <span class="banner_chat_label">サポートへの連絡</span>
        <span class="banner_chat_tel">(0101) 50 1762 0302</span>
        <span class="banner_chat_contact">(日本フリーダイヤル)</span>
      </div>
    `,
  ];

  const createPopup = () => {
    if (popupCount >= 5) return;

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
            ${popupContents[popupCount]}
        `;
    popupContainer.appendChild(popup);
    popupCount++;
  };

  setInterval(createPopup, 1000);

  document.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        backgroundAudio.play();
      });
    }
  });
});
