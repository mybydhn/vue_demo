;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-leiapplianxizhengquelv" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M627.2 448 396.8 448C384 448 377.6 460.8 377.6 473.6c0 12.8 12.8 19.2 19.2 19.2l230.4 0c12.8 0 19.2-12.8 19.2-19.2C646.4 460.8 640 448 627.2 448z"  ></path>' +
    '' +
    '<path d="M627.2 576 396.8 576C384 576 377.6 588.8 377.6 601.6c0 12.8 12.8 19.2 19.2 19.2l230.4 0c12.8 0 19.2-12.8 19.2-19.2C646.4 588.8 640 576 627.2 576z"  ></path>' +
    '' +
    '<path d="M416 300.8 352 384 416 384Z"  ></path>' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM742.4 748.8c0 12.8-6.4 19.2-19.2 19.2l-428.8 0c-12.8 0-19.2-6.4-19.2-19.2l0-371.2 0 0c0 0 0 0 0-6.4 0 0 0 0 0 0 0 0 0-6.4 6.4-6.4l108.8-134.4c0 0 0 0 6.4-6.4 0 0 0 0 0 0 0 0 0 0 6.4 0 0 0 0 0 0 0 0 0 6.4 0 6.4 0l320 0c12.8 0 19.2 6.4 19.2 19.2L742.4 748.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappxuexishichang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM384 192c0-19.2 12.8-32 32-32l192 0C627.2 160 640 172.8 640 192l0 102.4C601.6 268.8 556.8 256 512 256 467.2 256 422.4 268.8 384 294.4L384 192zM640 832c0 19.2-12.8 32-32 32l-192 0C396.8 864 384 851.2 384 832l0-102.4C422.4 755.2 467.2 768 512 768c44.8 0 89.6-12.8 128-38.4L640 832zM512 704c-108.8 0-192-83.2-192-192s83.2-192 192-192 192 83.2 192 192S620.8 704 512 704z"  ></path>' +
    '' +
    '<path d="M608 486.4l-64 0L544 416C544 396.8 531.2 384 512 384S480 396.8 480 416l0 102.4c0 0 0 0 0 0 0 0 0 0 0 0 0 19.2 12.8 32 32 32l96 0c19.2 0 32-12.8 32-32C640 499.2 627.2 486.4 608 486.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappclose" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 851.2 556.8 512 896 172.8c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L512 467.2 172.8 128C160 115.2 140.8 115.2 128 128S115.2 160 128 172.8L467.2 512 128 851.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l339.2 339.2c12.8 12.8 32 12.8 44.8 0S908.8 864 896 851.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappnext" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M288 940.8c12.8 12.8 32 12.8 44.8 0l409.6-409.6 0 0 0 0c12.8-12.8 12.8-32 0-44.8L339.2 83.2c-12.8-12.8-32-12.8-44.8 0S281.6 115.2 294.4 128l384 384-384 384C281.6 908.8 275.2 928 288 940.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappreturn" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736 896l-384-384 384-384c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L288 486.4c-12.8 12.8-12.8 32 0 44.8 0 0 0 0 0 0 0 0 0 0 0 0l409.6 409.6c12.8 12.8 32 12.8 44.8 0S748.8 908.8 736 896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappcard" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M448 960 96 960C76.8 960 64 947.2 64 928L64 576c0-19.2 12.8-32 32-32L448 544c19.2 0 32 12.8 32 32l0 352C480 947.2 467.2 960 448 960zM128 896l288 0L416 608 128 608 128 896z"  ></path>' +
    '' +
    '<path d="M448 480 96 480C76.8 480 64 467.2 64 448L64 96C64 76.8 76.8 64 96 64L448 64c19.2 0 32 12.8 32 32L480 448C480 467.2 467.2 480 448 480zM128 416l288 0L416 128 128 128 128 416z"  ></path>' +
    '' +
    '<path d="M928 480 576 480C556.8 480 544 467.2 544 448L544 96C544 76.8 556.8 64 576 64l352 0C947.2 64 960 76.8 960 96L960 448C960 467.2 947.2 480 928 480zM608 416 896 416 896 128 608 128 608 416z"  ></path>' +
    '' +
    '<path d="M928 960 576 960c-19.2 0-32-12.8-32-32L544 576c0-19.2 12.8-32 32-32l352 0C947.2 544 960 556.8 960 576l0 352C960 947.2 947.2 960 928 960zM608 896 896 896 896 608 608 608 608 896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappxuexiyemian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M249.6 678.4 384 723.2 384 409.6 249.6 364.8Z"  ></path>' +
    '' +
    '<path d="M448 723.2 576 678.4 576 364.8 448 409.6Z"  ></path>' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM838.4 768c0 12.8-6.4 19.2-12.8 25.6-6.4 6.4-12.8 6.4-19.2 6.4-6.4 0-6.4 0-12.8 0l-185.6-57.6-185.6 57.6c-6.4 0-6.4 0-12.8 0-6.4 0-6.4 0-12.8 0l-198.4-64C192 729.6 185.6 716.8 185.6 704L185.6 320c0-12.8 6.4-19.2 12.8-25.6 6.4-6.4 19.2-6.4 25.6-6.4l185.6 57.6 185.6-57.6 6.4 0 6.4 0 198.4 64C832 358.4 838.4 371.2 838.4 384L838.4 768z"  ></path>' +
    '' +
    '<path d="M640 678.4 774.4 723.2 774.4 409.6 640 364.8Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappmulti" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 64 128 64C89.6 64 64 96 64 128l0 825.6c0 38.4 25.6 51.2 57.6 38.4l332.8-172.8c32-12.8 83.2-12.8 115.2 0l332.8 172.8c32 12.8 57.6 0 57.6-38.4L960 128C960 96 934.4 64 896 64zM224 396.8 256 377.6C262.4 384 268.8 384 275.2 390.4c12.8 12.8 32 19.2 38.4 32l-6.4 0c38.4-12.8 70.4-32 96-51.2L262.4 371.2C243.2 384 211.2 403.2 172.8 422.4c0 0 0-6.4-6.4-6.4C160 403.2 153.6 396.8 153.6 390.4c64-25.6 108.8-51.2 147.2-89.6l44.8 6.4C332.8 320 320 332.8 307.2 339.2l160 0 0 38.4C390.4 435.2 288 480 153.6 512c0 0 0-6.4-6.4-6.4 0-6.4-6.4-12.8-12.8-25.6C192 467.2 236.8 454.4 275.2 441.6 256 422.4 243.2 409.6 224 396.8zM480 518.4c-70.4 76.8-179.2 121.6-326.4 147.2 0-12.8-6.4-25.6-12.8-32 70.4-12.8 121.6-19.2 160-38.4C294.4 588.8 288 582.4 275.2 576S256 556.8 256 556.8l32-19.2c6.4 6.4 12.8 12.8 25.6 19.2S332.8 576 332.8 582.4c32-12.8 64-38.4 96-57.6L307.2 524.8c-38.4 25.6-83.2 44.8-134.4 64C166.4 563.2 160 556.8 160 550.4c76.8-25.6 134.4-57.6 179.2-96L384 460.8C371.2 467.2 364.8 480 352 486.4l128 0L480 518.4zM620.8 454.4l115.2 0L736 396.8l-57.6 0c-6.4 12.8-12.8 25.6-19.2 38.4-12.8-6.4-25.6-12.8-32-12.8C640 390.4 659.2 358.4 665.6 320L704 326.4c0 6.4 0 12.8-6.4 19.2 0 6.4-6.4 12.8-6.4 19.2l44.8 0L736 307.2l38.4 0 0 57.6 89.6 0 0 32-89.6 0 0 51.2 102.4 0 0 32-76.8 0 0 64c0 12.8 6.4 19.2 12.8 19.2l6.4 0c12.8 0 12.8-6.4 19.2-19.2 0-6.4 0-19.2 0-38.4 12.8 6.4 25.6 6.4 32 12.8 0 12.8 0 25.6-6.4 38.4 0 25.6-19.2 38.4-44.8 38.4l-25.6 0c-32 0-44.8-12.8-44.8-44.8L748.8 486.4l-38.4 0c0 51.2-19.2 96-64 121.6C640 595.2 633.6 588.8 620.8 576c38.4-19.2 57.6-51.2 57.6-96L620.8 480 620.8 454.4zM569.6 313.6C569.6 313.6 576 320 582.4 332.8c12.8 19.2 25.6 32 32 44.8L582.4 396.8C576 390.4 563.2 371.2 550.4 352 544 345.6 537.6 339.2 537.6 332.8L569.6 313.6zM870.4 646.4c0 6.4 0 6.4 0 12.8-64 0-128 0-198.4 0-38.4 0-70.4-12.8-89.6-38.4-19.2 12.8-32 32-44.8 51.2L518.4 620.8c0 0 6.4-6.4 12.8-12.8 12.8-12.8 19.2-19.2 25.6-25.6L556.8 473.6 518.4 473.6 518.4 435.2l76.8 0 0 147.2c19.2 25.6 44.8 44.8 83.2 44.8 19.2 0 64 0 140.8 0 32 0 51.2 0 64 0C883.2 627.2 876.8 633.6 870.4 646.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappsingle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M204.8 460.8l89.6 0 0 38.4-89.6 0 0-38.4Z"  ></path>' +
    '' +
    '<path d="M204.8 396.8l89.6 0 0 38.4-89.6 0 0-38.4Z"  ></path>' +
    '' +
    '<path d="M332.8 460.8l89.6 0 0 38.4-89.6 0 0-38.4Z"  ></path>' +
    '' +
    '<path d="M332.8 396.8l89.6 0 0 38.4-89.6 0 0-38.4Z"  ></path>' +
    '' +
    '<path d="M896 64 128 64C89.6 64 64 96 64 128l0 825.6c0 38.4 25.6 51.2 57.6 38.4l332.8-172.8c32-12.8 83.2-12.8 115.2 0l332.8 172.8c32 12.8 57.6 0 57.6-38.4L960 128C960 96 934.4 64 896 64zM492.8 608 332.8 608l0 57.6L294.4 665.6 294.4 608 128 608 128 569.6l160 0L288 537.6l-128 0L160 364.8l76.8 0C230.4 352 224 345.6 211.2 326.4L211.2 320l32-19.2C249.6 313.6 256 326.4 275.2 345.6c0 6.4 6.4 6.4 6.4 6.4L256 364.8l83.2 0c6.4-6.4 12.8-19.2 25.6-32C371.2 320 377.6 313.6 377.6 307.2L422.4 320C416 326.4 409.6 339.2 396.8 352c0 6.4-6.4 6.4-6.4 6.4l76.8 0 0 172.8-128 0 0 32 160 0 0 44.8L492.8 608zM633.6 454.4l115.2 0L748.8 396.8l-57.6 0c-6.4 12.8-12.8 25.6-19.2 38.4-12.8-6.4-25.6-12.8-32-12.8 19.2-32 32-70.4 38.4-102.4l38.4 6.4c0 6.4 0 12.8-6.4 19.2C704 352 704 358.4 704 364.8l44.8 0L748.8 307.2l38.4 0 0 57.6 89.6 0 0 32-89.6 0L787.2 448l102.4 0 0 32-76.8 0 0 64c0 12.8 6.4 19.2 12.8 19.2L832 563.2c12.8 0 12.8-6.4 19.2-19.2 0-6.4 0-19.2 0-38.4C864 512 876.8 512 883.2 518.4c0 12.8 0 25.6-6.4 38.4 0 25.6-19.2 38.4-44.8 38.4l-25.6 0c-32 0-44.8-12.8-44.8-44.8l0-64-38.4 0c0 51.2-19.2 96-64 121.6C652.8 595.2 646.4 588.8 633.6 576c38.4-19.2 57.6-51.2 57.6-96L633.6 480 633.6 454.4zM582.4 313.6c0 6.4 6.4 12.8 12.8 19.2 12.8 19.2 25.6 32 32 44.8L595.2 396.8C588.8 390.4 576 371.2 563.2 352 556.8 345.6 550.4 339.2 544 332.8L582.4 313.6zM883.2 646.4c0 6.4 0 6.4 0 12.8-64 0-128 0-198.4 0-38.4 0-70.4-12.8-89.6-38.4C576 627.2 563.2 646.4 544 659.2L531.2 620.8c0 0 6.4-6.4 12.8-12.8 12.8-12.8 19.2-19.2 25.6-25.6L569.6 473.6 531.2 473.6 531.2 435.2l76.8 0 0 147.2c19.2 25.6 44.8 44.8 83.2 44.8 19.2 0 64 0 140.8 0 32 0 51.2 0 64 0C889.6 627.2 889.6 633.6 883.2 646.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappyichakan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1004.8 486.4c-12.8-6.4-32 0-38.4 12.8-76.8 179.2-256 294.4-448 294.4-192 0-364.8-108.8-448-281.6 83.2-172.8 256-281.6 448-281.6 140.8 0 268.8 57.6 364.8 160 12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8-102.4-115.2-256-179.2-409.6-179.2-217.6 0-416 128-505.6 326.4-6.4 6.4-6.4 19.2 0 25.6 89.6 198.4 288 326.4 505.6 326.4 217.6 0 416-128 505.6-326.4C1024 512 1017.6 492.8 1004.8 486.4z"  ></path>' +
    '' +
    '<path d="M307.2 512c0 115.2 96 204.8 204.8 204.8s204.8-96 204.8-204.8c0-115.2-96-204.8-204.8-204.8S307.2 396.8 307.2 512zM659.2 512c0 83.2-64 147.2-147.2 147.2S364.8 595.2 364.8 512s64-147.2 147.2-147.2S659.2 428.8 659.2 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappright" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#ffffff" ></path>' +
    '' +
    '<path d="M375.5 348.5c0-2-0.1-3.8-0.5-5.8-0.5-2.2-1.3-4.1-2.2-6.2-0.5-1.3-0.6-2.6-1.3-3.8-0.3-0.6-0.9-0.8-1.3-1.4-1.2-1.8-2.8-3.2-4.4-4.8-1.5-1.4-2.9-2.9-4.6-4-0.6-0.4-0.9-1-1.5-1.3l-111.6-62.7c-15.3-8.6-34.9-3.1-43.6 12.2s-3.1 35 12.2 43.6l63.5 35.7-62.5 37.5c-15.1 9-20 28.8-11 43.9 9 15.1 28.8 20 43.9 11l109.8-65.8c0.6-0.3 0.8-0.9 1.4-1.3 1.8-1.2 3.3-2.8 4.9-4.5 1.4-1.5 2.8-2.8 3.9-4.5 0.4-0.6 1-0.9 1.4-1.6 0.8-1.4 0.8-2.9 1.4-4.3 0.7-1.9 1.4-3.6 1.8-5.6C375.5 352.8 375.5 350.7 375.5 348.5z" fill="#62ca00" ></path>' +
    '' +
    '<path d="M806.2 387.5l-62.5-37.5 63.5-35.7c15.3-8.6 20.8-28.2 12.2-43.6s-28.2-20.8-43.6-12.2l-111.6 62.7c-0.6 0.3-0.9 0.9-1.5 1.3-1.7 1.1-3.1 2.5-4.6 4-1.6 1.5-3.2 3-4.4 4.8-0.4 0.5-0.9 0.8-1.3 1.4-0.7 1.2-0.8 2.6-1.3 3.8-0.9 2-1.7 4-2.2 6.2-0.4 1.9-0.4 3.8-0.5 5.8-0.1 2.2 0 4.3 0.4 6.5 0.4 2 1.1 3.7 1.8 5.6 0.5 1.4 0.6 2.9 1.4 4.3 0.4 0.6 1 1 1.4 1.6 1.1 1.7 2.5 3 3.9 4.5 1.6 1.6 3.1 3.2 4.9 4.5 0.5 0.4 0.8 0.9 1.4 1.3l109.8 65.8c15.1 9 34.8 4.1 43.9-11C826.3 416.3 821.3 396.6 806.2 387.5z" fill="#62ca00" ></path>' +
    '' +
    '<path d="M512 844.8c185.6 0 339.2-140.8 358.4-320L153.6 524.8C172.8 704 326.4 844.8 512 844.8z" fill="#62ca00" ></path>' +
    '' +
    '<path d="M870.4 524.8 870.4 524.8 870.4 524.8Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leiappwrong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#ffffff" ></path>' +
    '' +
    '<path d="M398.1 792.1a113.9 125.9 0 1 0 227.8 0 113.9 125.9 0 1 0-227.8 0Z" fill="#d30e26" ></path>' +
    '' +
    '<path d="M227.5 546.1a62.6 68.3 0 1 0 125.2 0 62.6 68.3 0 1 0-125.2 0Z" fill="#d30e26" ></path>' +
    '' +
    '<path d="M671.3 546.1a62.6 68.3 0 1 0 125.2 0 62.6 68.3 0 1 0-125.2 0Z" fill="#d30e26" ></path>' +
    '' +
    '<path d="M839.6 433.6c-4.8-9.5-13.8-22.6-27.8-35.6-28.4-26.3-65.2-40-109.5-33.7-12.4 1.8-21.1 13.3-19.3 25.7 1.8 12.4 13.3 21.1 25.7 19.3 29.8-4.3 53.3 4.5 72.1 22 5.6 5.2 10.3 10.7 14.1 16.3 2.2 3.2 3.5 5.4 3.9 6.3 5.6 11.2 19.3 15.8 30.5 10.2C840.6 458.5 845.2 444.8 839.6 433.6z" fill="#d30e26" ></path>' +
    '' +
    '<path d="M321.8 364.3c-44.4-6.3-81.2 7.3-109.5 33.7-14 13-23 26.1-27.8 35.6-5.6 11.2-1.1 24.9 10.2 30.5 11.2 5.6 24.9 1.1 30.5-10.2 0.4-0.9 1.8-3.2 3.9-6.3 3.8-5.5 8.5-11.1 14.1-16.3 18.8-17.5 42.3-26.2 72.1-22 12.4 1.8 24-6.9 25.7-19.3C342.9 377.6 334.2 366.1 321.8 364.3z" fill="#d30e26" ></path>' +
    '' +
    '<path d="M845.7 580.7c0 0-77 159.3-77 200.2 0 42.7 34.5 77.3 77 77.3 42.5 0 77-34.6 77-77.3C922.6 740 845.7 580.7 845.7 580.7z" fill="#558dff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti-1-copy" viewBox="0 0 2818 1024">' +
    '' +
    '<path d="M894.623656 269.763441H107.354839v198.193548h217.462365v-33.032258H209.204301v-82.855914c0-30.27957 25.875269-52.025806 56.154839-52.025806h471.260215c30.27957 0 53.402151 22.021505 53.40215 52.025806V434.924731h-115.612903v33.032258h220.215054V269.763441z" fill="#000000" ></path>' +
    '' +
    '<path d="M156.903226 143.139785h688.172043v52.301075H156.903226z" fill="#000000" ></path>' +
    '' +
    '<path d="M745.978495 580.817204v102.4c0 30.27957-23.122581 57.255914-53.402151 57.255914H638.623656v30.27957h107.354839V831.587097c0 40.739785-110.382796 73.772043-246.365592 73.772043S253.247312 872.602151 253.247312 831.862366V770.752688h107.354839v-30.27957h-51.2c-30.27957 0-56.154839-26.976344-56.154839-57.255914V580.817204H145.892473v246.640861c0 58.356989 159.105376 105.978495 353.72043 105.978494S850.580645 885.539785 853.333333 827.458065V580.817204h-107.354838z" fill="#000000" ></path>' +
    '' +
    '<path d="M470.984946 120.567742l227.372043-68.817204 8.533334 14.313978-221.316129 539.802151-128 0.825806z" fill="#ffca00" ></path>' +
    '' +
    '<path d="M469.058065 119.466667l229.298924-66.890323L475.939785 600.086022h-128.275269z" fill="#ffea2c" ></path>' +
    '' +
    '<path d="M530.993548 501.815054l155.526882-5.505377 7.982796 11.286022-352.619355 465.204301-18.71828 8.258065z" fill="#ff7900" ></path>' +
    '' +
    '<path d="M486.124731 608.344086l-129.376344 0.550538-9.083871-9.909678h128.275269z" fill="#e5ae00" ></path>' +
    '' +
    '<path d="M516.954839 496.584946h169.84086l-363.630108 484.473119z" fill="#ffa300" ></path>' +
    '' +
    '<path d="M1779.062366 869.849462l48.997849-23.12258s-66.064516-141.212903-73.772043-256c0-11.010753 4.129032-21.195699 12.387097-26.701076H1825.032258v-49.548387h-217.462366v-48.172043c140.387097-10.735484 203.698925-53.126882 203.698925-103.225806V123.870968H1302.021505v239.208602c0 50.374194 60.55914 92.490323 200.946237 103.225806V514.752688h-214.709677v49.548387h62.76129c8.258065 5.505376 12.387097 15.690323 12.387097 26.701076-7.707527 114.511828-73.772043 256-73.772043 256l48.997849 23.12258 142.313979-305.548387h21.746236v363.354839h104.602151V564.301075h29.178494l142.589248 305.548387zM1607.569892 437.126882V308.301075h96.344086v59.458065c0 31.931183-19.268817 59.182796-96.344086 69.367742zM1703.913978 272.516129h-96.344086V151.397849h96.344086v121.11828z m-200.946236-121.11828v121.11828h-93.591398V151.397849h93.591398z m-93.591398 216.361291V308.301075h93.591398v128.825807c-71.569892-10.184946-93.591398-37.436559-93.591398-69.367742z" fill="#000000" ></path>' +
    '' +
    '<path d="M1092.817204 143.139785h104.602151v165.16129h-104.602151z" fill="#000000" ></path>' +
    '' +
    '<path d="M1197.419355 769.101075V344.086022h-203.698925v33.032258h101.849462v478.967742h159.655914v-33.032259h-2.477419c-30.27957 0-55.329032-23.673118-55.329032-53.952688z" fill="#000000" ></path>' +
    '' +
    '<path d="M2383.827957 780.111828V712.946237h253.247312v-49.548388h-253.247312v-98.821505c126.623656-15.965591 187.182796-41.290323 187.182796-86.15914V341.333333H2089.290323v137.083871c5.505376 45.419355 66.064516 71.019355 184.430107 86.984947V663.397849h-258.752688v49.548388h258.752688v67.165591c0 30.27957-24.223656 53.952688-54.503226 53.952688H1948.903226v52.301075h759.741935v-52.301075h-266.735484c-30.27957 0-58.08172-23.673118-58.08172-53.952688z m-187.182796-304.447312V374.365591h264.258065v99.372043c0 35.509677-47.896774 53.402151-141.763441 53.402151-81.204301-0.275269-122.494624-17.341935-122.494624-51.475269z" fill="#000000" ></path>' +
    '' +
    '<path d="M2536.051613 209.204301l11.010753-77.075269h-85.333334l-11.010752 77.075269H2370.064516V79.827957h-82.580645v129.376344h-81.754839l-11.010752-77.075269h-79.827957l11.010752 77.075269H1948.903226v203.698925h104.60215v-115.337635c0-30.27957 22.572043-55.329032 52.851613-55.329032h447.587097c30.27957 0 52.851613 25.049462 52.851613 55.329032V412.903226h104.60215V209.204301h-175.346236z" fill="#000000" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lei_app_hard" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M364.8 479L173.5 308.9c-17.5-15.6-19.1-42.7-3.5-60.2 15.6-17.5 42.7-19.1 60.2-3.5l191.3 170c17.5 15.6 19.1 42.7 3.5 60.2C409.4 493 382.3 494.6 364.8 479zM656.8 479l191.3-170.1c17.5-15.6 19.1-42.7 3.5-60.2-15.6-17.5-42.7-19.1-60.2-3.5l-191.3 170c-17.5 15.6-19.1 42.7-3.5 60.2 15.6 17.6 42.7 19.2 60.2 3.6z" fill="#4C8BE8" ></path>' +
    '' +
    '<path d="M340.1 561.8m-56.9 0a56.9 56.9 0 1 0 113.8 0 56.9 56.9 0 1 0-113.8 0Z" fill="#4C8BE8" ></path>' +
    '' +
    '<path d="M682.7 561.8m-56.9 0a56.9 56.9 0 1 0 113.8 0 56.9 56.9 0 1 0-113.8 0Z" fill="#4C8BE8" ></path>' +
    '' +
    '<path d="M686.4 826.7c-5.9-18.1-38.6-108.9-102.1-118.3-25.7-3.8-50.3 6-73.6 29.1-23.3-23.1-47.9-32.8-73.6-29.1-63.4 9.4-96.2 100.2-102.1 118.3-4.9 14.9 3.3 31 18.2 35.9 2.9 1 5.9 1.4 8.8 1.4 12 0 23.1-7.6 27-19.6 10.3-31.4 35.6-76.6 56.3-79.7 10.4-1.4 25.7 10.4 41.5 32.9 5.6 8 14.7 11.8 23.8 11.6 9.1 0.1 18.2-3.6 23.8-11.6 15.7-22.5 31-34.6 41.4-32.9 20.6 3 46 48.2 56.4 79.7 3.9 12 15.1 19.6 27 19.6 2.9 0 5.9-0.5 8.9-1.4 15-4.9 23.2-21 18.3-35.9z" fill="#4C8BE8" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)