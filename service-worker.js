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
    "revision": "bf7f174966de3adf71e41d3c67688552"
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
    "url": "assets/js/12.4cc9c99f.js",
    "revision": "9ac2f230b43a1505111309b4e2d66143"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.3ce24242.js",
    "revision": "39e5e6f084e4f74d8c47b6344ad6a523"
  },
  {
    "url": "assets/js/15.1ad9e7af.js",
    "revision": "db8f0050de63e8e9fb79afb1f14d8086"
  },
  {
    "url": "assets/js/16.0a78aac3.js",
    "revision": "6de673e7ef988dbbfd15aabb0c2f81dd"
  },
  {
    "url": "assets/js/17.ea2fffa9.js",
    "revision": "23a16002a25969a14bdd8f81fbaa28c4"
  },
  {
    "url": "assets/js/18.bf37913f.js",
    "revision": "c4eb1f7d208b53c30bd139d83ffadd08"
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
    "url": "assets/js/app.36453ba1.js",
    "revision": "0deee60b33170cc176198187850dc6e6"
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
    "revision": "7f08e730b1a8f446d018898d2a7bde55"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1b0208ff7af57d5b263234906aa6182a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c00ad85cfde2fa9a7e8bc17044494cc6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3846b32fcabf54f3e5a2bda78664aef9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "7078271e88208727335e376bee323cca"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "1e161b2e5a0974dcf1bf10bd6ecc1b7a"
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
    "revision": "9c9b6e6e2286e054a2fb14e9b829f5e7"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "041c3c9abf03defd30a6fe8982b55458"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "be97a21ba8ab3aa9108f6aefacfd5ed9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "77508079b144d0fd52e203b1a1957b61"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ea0bf1168eef404dccad1c55ea02cfa5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f699888036fe2299ae9ec03588cb20a4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "90c9ce9d5e75118b90fda026a17ce7de"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8dbd33aacd816666f1ec39d345874df9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0da15b6afe28ba6c4f621f54164c32e3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "43707f2f338d7db714e84e7fa8997592"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "23c050d1d7206cad994bb2954d3725df"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "98ceadb2cb532f7758a98e7c8b4dea26"
  },
  {
    "url": "timeline/index.html",
    "revision": "852449a776ae09a73ccbaf9d44562de2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9ae6c08a33d9832ecf1adede31a84c8e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "cff53054c83dcabade1ae4daa91bfb98"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0f3c32cd5790ed68647ba4211db58fcc"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "771c8a230576a448ec3041be35531bb5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "63753a63faf7bb305e66cd266363ae95"
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
