/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eab97191906bb2ca473320ffc3791d0c"
  },
  {
    "url": "assets/css/0.styles.a6776394.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.c4a2f7ea.js",
    "revision": "ca0367152de14ef4492e4a90dd62dbe2"
  },
  {
    "url": "assets/js/13.5025585f.js",
    "revision": "3064e453f9a2a6350bc78994652c0a19"
  },
  {
    "url": "assets/js/14.aab3276d.js",
    "revision": "58e4964a4e22e7429578d8dcdcf8746f"
  },
  {
    "url": "assets/js/15.74879778.js",
    "revision": "15a6106ce72939118e5e452286208c55"
  },
  {
    "url": "assets/js/16.86c34caa.js",
    "revision": "4f001832c1dcab7779e16712ad73048c"
  },
  {
    "url": "assets/js/17.79a44560.js",
    "revision": "68e21a8b800caa000b89214f35b6becf"
  },
  {
    "url": "assets/js/18.54f12e55.js",
    "revision": "0d28aa7b2977ece511f2b2193ad79b44"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.78c10f5d.js",
    "revision": "c6495a820a5f38048aedfbda78b25d71"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "d554e6d595e797d15f3cdad2a581bd20"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f765ed3f239845a8fd4283b3e70086f2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "af40fefff663c10746356e76c363cdae"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "216d7d2e003aa473a99b3e5482c34299"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "07c114874acabc0492e2fd35dcc54f67"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "09994a14493f053f8db43d7091a68afb"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "7ce187ed7d7c7a8d2c74aa196e70ebb6"
  },
  {
    "url": "js/custom.js",
    "revision": "f5485e815ad9569fc890ec7bb41c92f7"
  },
  {
    "url": "tag/index.html",
    "revision": "0ed060163ceb1b0ce466365e7e9c88bb"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9630d11b2c1ba09f0b8e7d3fa7841a76"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e346e4725eb3191dc7462410b99654bf"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f6b5da467ef11341496a85a617557fe0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0f65761afd60f3e8e42ff85ae6635c3d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4d9be55dca776a2fcb82f24c7f1cab73"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "af347c522707198577005bb937ff7b55"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9441bac251c07330d043d06d5e823673"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "57809190d35e2ece7658001247e747c5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f396ad091c0636d69368c953313a0b90"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "a2140d2d6dddaca726ac974889b470a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9c4af17c77ba04f9b67c2a7c160b131"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f6529acb7c2ed63b3ef849995a4ae374"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "880a661b2ba8162963c1f1e732794934"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "43a3b2d7359e2605886f66d0f962bffa"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d04190609c2ef18f2dca13fffe39cbec"
  },
  {
    "url": "生活分享/life.html",
    "revision": "432f887ee840f7d323eb6d6b8ef91cfd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
