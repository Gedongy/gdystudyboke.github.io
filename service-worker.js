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
    "revision": "a64d948a041b26d51bbe84187624ad74"
  },
  {
    "url": "assets/css/0.styles.b1c3b090.css",
    "revision": "8b3082875e463bfd6ef8af2dba2fba12"
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
    "url": "assets/js/12.4cc9c99f.js",
    "revision": "9ac2f230b43a1505111309b4e2d66143"
  },
  {
    "url": "assets/js/13.d90a9c89.js",
    "revision": "17ae3d808a4d99f2799ba4b1d837b9ed"
  },
  {
    "url": "assets/js/14.3ce24242.js",
    "revision": "39e5e6f084e4f74d8c47b6344ad6a523"
  },
  {
    "url": "assets/js/15.442587fc.js",
    "revision": "6f5346dcd73dba851925e1c26ae7686a"
  },
  {
    "url": "assets/js/16.0a78aac3.js",
    "revision": "6de673e7ef988dbbfd15aabb0c2f81dd"
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
    "url": "assets/js/app.f51556dd.js",
    "revision": "08ee59d1525d6d2ce6a5df64965ff164"
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
    "revision": "df662eced0c169d7575a3d94fcc36caf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ca05a88a9e8bfa47dab9593086f175ef"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b08f7630a7251438d1caff2fd0e1dcd7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "81079098dfa20615b96417889cb8dc63"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "bf690133dd6f3ba74d3db76b7445740b"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "30830faeeeacada059c81ed339393064"
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
    "revision": "44c699d1fdc9e667c763335baf66a425"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "9ab1e2396dbdb611e72f6a40af734e8d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3996d618bd33f9514d8c5cdff7ac538c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5bcd18879c11d3738ebc9590172d1a07"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b34dbefe7179ba1ea02a64f25d82868f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "32473dfd04002b0dc329921d74e1a29d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2e52861b3e441b1180a0a22a4d4d2a81"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a42a7dcad1b7e45c6ed0967d41cbc4ab"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9274aa8408961026e9b45c88352478d2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "42a1314db91adb044f980ea3077269ee"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "005d9b738210ba3b461f9db1db0b2236"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "70de3604ae5f238938f5f87ed928e316"
  },
  {
    "url": "timeline/index.html",
    "revision": "76491c410f21300ed388f09015d68275"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "697758a1607071b89f59c8ab21494e71"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b8b42f8fbc9a6593d5ad35df03fdbc40"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "69af2950e742f9a62823ce33c9a0eed3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a8353c97563d78ecc52649441dfdfa88"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bef0c38d438947031e3aab853db1dffb"
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
