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
    "revision": "df218502a75198273b1f8e8fda8fd51c"
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
    "url": "assets/js/16.b87c7e66.js",
    "revision": "b7e9523311038d2a3f2cdcb6c88ea958"
  },
  {
    "url": "assets/js/17.6ac66727.js",
    "revision": "142f6e88cbec190daf648effaaf004f4"
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
    "url": "assets/js/app.406e14d9.js",
    "revision": "9e07bd69195b7be938371009a88c5fea"
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
    "revision": "1e853a17492a374f167aa1e2715c139f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ba93d74504984a41b1fe0024cacb5625"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f10bd26cbc59626b863f4ba1037d21cc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "36ea59ebfaca70ba7ffb3f9068ddc435"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2f3d4365b789d4ec00c7a3c5e6398b48"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "19e1b9d2fae2a3fb42765ed55402ae92"
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
    "revision": "49fc87c6db9079165b640e8bc43126af"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "01768a516e6d2372ebe5e5fd3c4846f1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ebed10eb1c1dedc9d778c0723c065a46"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "03b3eac6249f165720a19e87574fd2a2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "28e80a8aea7d59b62674a54dacc39e2b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9c4e7fdb251c373bb1e8eb719db35091"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "eef1855a4ee9862dae13358d82ea5cdc"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f3ebe82116b60ddc59cf4e64a73d5be6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "dbadf365968d40d708ca2bff8cdc5b56"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "49d38e3c66a3a86d178d8c65b8a62461"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b884c32a6c1a5f97f1db15efe7520990"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f229e0f7c6dab53260252fc669aaf0a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb7c2739c39f960c98738993890cf33b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a2744da3e54c7a08db5cd0670266f124"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7bb4cc637dac0328a838484d2cdff7de"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3a50cda050aa610a7c67f11204d21861"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "77308fe280e14c8e91ac863649231879"
  },
  {
    "url": "生活分享/life.html",
    "revision": "14766112ac96e5bfce273496c84f3355"
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
