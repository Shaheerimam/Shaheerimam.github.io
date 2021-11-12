'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c828549ce8bfa84f549a1dda2136cda7",
".git/config": "899f0f312b8fe55494b85bd482107798",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a59d240a39127513395688944241197e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a22949d807347beb0c2488269fb71545",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c40e3d9f5582578a8c8c3f1c124deb18",
".git/logs/refs/heads/main": "90c4a93e80e3c1bf7194151393b17127",
".git/logs/refs/remotes/origin/main": "ed58467afff8bafa1edbf373a393a197",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/11/1b61daae0663f0288088cdf92d8c97d0e3a55b": "99f7418a97d0c915a61004f0b73de64b",
".git/objects/11/cd318c865a99e9b9413e3b98110f49b846b687": "77d78d2e5a0e621c1f0376a19d46f513",
".git/objects/18/398787fccb562e0538577a7fb72bf61d480c5f": "01f4a801947668b6df290931ef42ac55",
".git/objects/1a/9a0719341fe9e34dc4f205fc14536295d2d2dd": "ab4f518d90cc2f951c312a3675bf9ad0",
".git/objects/26/be0a05c1e27adc3260261c584d0da842aabe8c": "3fbe313236ef67e44a7ce231fd720102",
".git/objects/27/1300e69aeeec0f1a296aa92a2c74d3e85b2b4a": "3a52011d5a0f1c08bdeb75389179d863",
".git/objects/27/4793dcf4e8b893a570525b973e72d6eea75fe2": "08fdeac8393e4ca2ceeb663c24023eec",
".git/objects/27/591c3312a974ec0d995ed2d2e8bb4b3ca135ac": "73a2188622abe7f0673387fb8a2ff548",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/31/7ea1eedae2b8d1a4dd5d2725cc4b655b7a5e20": "0d287663052a2458a74af7f72d37b7e2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/c0debd99625edc1c4648051bec25f4b8116ed0": "437db281b7c5cea26d8a218ada62e930",
".git/objects/39/59868e9d47c3ed199a4dad31f0aaaf189b3e20": "09f8e3b388555d5c393272580895d012",
".git/objects/3b/c69d1e10d7630039d9081a8fa37ec5892c2cb6": "89a6d7a421209497fa5a54bab041d461",
".git/objects/3c/7e4801d0c6c84b16e326730844ca6796678869": "8eb7b1b643dd9b0f5e442cf8f36bcc98",
".git/objects/41/e126e1d52f5f5c38d9db4669a0a8a1469b7af5": "b0bb1a5555603dca3812b9fb55cb4932",
".git/objects/43/2ffcef3ebc4e4c12577e5793f5a42f3e997530": "8503cfd028ceae951eae572dca55d3b8",
".git/objects/44/13781bf29419ccc96ba4fc20866083eeacfe07": "5c823206f49cbc48acffd2fe175a394d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e71734581d7226cd2c0670d30da7feda63605e": "6eab2961920d541e68b54306bc9d3e1c",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/55/1acd6572ef664b627387aeab822da3a36a3180": "a0073132c381142f0f60fdf4c13f2569",
".git/objects/5b/bb1f8eb2996768f8a7304a1f8983d3a6e108cd": "63c29a6d6501580c96597c96f2e1d1ab",
".git/objects/5e/b45fec5717e9257b7b10e82725e4854fd25d74": "7313ad5ef33ec8c594a692c127d49916",
".git/objects/68/71d1b97429b311a52b2d991ac50d8c4877ba97": "56cd2c8f1f4795e1ec1cebe11ce477dd",
".git/objects/6a/91df0872dbdc44259827e373f1987fe5b6a73d": "e5bfee13e4a572f804808d7a5e3c742c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6d/2445868593c3df791bdf196bec289dc4256eed": "833a2c5f6059e11ab1bba9558a2697c9",
".git/objects/6f/6f20babdcf815fe2f1a3ae849e15772d9a45c1": "2e12cabf6d97226ccb1b8cc0746a6c72",
".git/objects/70/85dfb750e9a31ca9dd9f8dc42c877d75c9b677": "7cd4f2490233695ee55cdb7bb241960a",
".git/objects/79/7ad82d1cd866fae1154f63c1321348ee725c48": "3d8756026ba00385838ac69c02495c86",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/1211c5881f402572eeaf74c6725006cbef47aa": "875fbaddc2d491863e8fb9d944afea5a",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/5f4af9f6807a38ad44b51ed43eead0d259e749": "9c673225e17bcb179ff88eb56cacf309",
".git/objects/86/2d9c00c24b2ed7553699c1ebafdca84b9ca601": "f680dcd781fc258becb2d3e411a3fa98",
".git/objects/88/5c0efe1f4a8e7cf4ce1de42c8c2d13513b2654": "5e1ea1a574ed7cb2088657c5703536e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bf377bab62ca5f763a1337d49b864860997a30": "15fae12887286fc4a9459bd7c54c802b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/96/1b46f231d12da836a4560aa230ac5f403c4b00": "73ab6eee9f716082466a1ce57f862682",
".git/objects/97/3d47dd9ecdf457744478a50f7f72066a0b559b": "663c485984ed2a6d96645670a665f37b",
".git/objects/98/5629da20356390b1c75557c8c1b71611311b86": "e3d5242fb819f3abab6cc19b14ea9e41",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/bb2e0d34d08a5f997f9d458af812e7f363857e": "b2f3e9f7311ed8e1676b96df408e58b5",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/92168b0c51dfab71b5e42ed6f8df1a7988ba72": "f6299802464cda1e6e8de6e7c4f6c213",
".git/objects/b5/421d54e5ad858f8dead4061344751c676a71f1": "31dab91b1d6a195c37880004ac0b7c7e",
".git/objects/b6/8a669b0e3071f1107e7c0b38b6e14d60134a0c": "5fa483abdfe71b9e70a756f532d48332",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6ce9f1158009104765831e774c5c1f9683c5b1": "634b94a317741f689c2d4ebef3d7db15",
".git/objects/be/77c626a47ee9e5fbc3347518866eed796420f5": "45327cf1a72fc51bbac73a1f3a1792dc",
".git/objects/c1/4affceaea17846c07f40c01ee87467bab3410f": "6cb5667964659ca9f2112381d61a5151",
".git/objects/c1/6798a1ba7c69234183a7c1b137efe2dc3d95a0": "e5b419983a2dec557fc3dc9180d62419",
".git/objects/cc/dfb33f338c97e03cc3d8aa6ae06b1edfc94d20": "b9c94bf4182e7db8ad30e97523e66111",
".git/objects/ce/0ae7d685f86b9aa3320e5eb0b13d89a56e7276": "c1231009a0c0d690cdda58f525741eb8",
".git/objects/d6/61e0baef995b02003518d97be02d3cc6c78f72": "39684fd8de403ca505e058fd4f8ede0b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/934be34fe5e7b1f59d216fa6a63bc30e7ff490": "b2e5e6b19238592135854fe51570f7fc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/d242b3a5a584a812b300083d6d0e3253da98ef": "b4a9db6f12546ddecdd165f8c8c69d9f",
".git/objects/e6/48652915701f8b4ceea8c8ac0352be5c650f15": "71ad31fb9829b4bdf8241dc816995363",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/b88ed33a728982067aa4c4e56a54ebcca709a2": "b98a4c4103d012206091c6c9f4413041",
".git/ORIG_HEAD": "b6aba2c3c5ffacce7776533399cb98c6",
".git/refs/heads/main": "80fdb36855d5a5e9ad2cc47cb1ebdced",
".git/refs/remotes/origin/main": "80fdb36855d5a5e9ad2cc47cb1ebdced",
"assets/AssetManifest.json": "78a80d8672b11fd225cf08c17a9b305d",
"assets/assets/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"assets/assets/IMG_20210121_093442%2520cropped.jpg": "511e8e7a8798b5ed6fbc572003a6af6f",
"assets/assets/IMG_20210121_093442%2520cropsdfped.png": "f00161f2ad774c01246eba298a6f8f70",
"assets/assets/insta.png": "8d47db0433060906dda0b56c68eb89e8",
"assets/assets/sdf.png": "9b0476f6889ecd47e887d0bd9f44cf94",
"assets/assets/sdfdfg.png": "51234798814cf682415f928d001072ff",
"assets/assets/sp.png": "900fde08d619f0f3480c9c0cac4322a5",
"assets/assets/youtube.png": "391b007106fcc5db0512cf533cfe2e92",
"assets/FontManifest.json": "12823a8f32817567f3b56b49c80ec6bd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d7455e76c8344d0fc5f4b735cdcf7c46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9a72b48997473d9ba57283f4a5f767c3",
"/": "9a72b48997473d9ba57283f4a5f767c3",
"main.dart.js": "4bd4c4cdd8992bc869a1f7bc5cb39e86",
"manifest.json": "cf68b15404171ffc443181bc04c2b0fb",
"version.json": "e4066e6df32eabcbb61be646f1b2a24e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
