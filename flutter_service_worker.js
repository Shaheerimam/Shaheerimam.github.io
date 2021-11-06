'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a543b9622f7bf1a340a8a6682d09ad17",
".git/config": "899f0f312b8fe55494b85bd482107798",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f1e75f41e661bfc92d0bdbee40d4badb",
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
".git/index": "aee5e4fb7f093ffc06349fb3a04e0e75",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d40f770e2c5bc95d2c2477e78d93a51",
".git/logs/refs/heads/main": "ecf9f14cc785dc07015af02ccafa5d1c",
".git/logs/refs/remotes/origin/main": "617c1f13f12dfbdae7db0f1a57fadc23",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/26/be0a05c1e27adc3260261c584d0da842aabe8c": "3fbe313236ef67e44a7ce231fd720102",
".git/objects/27/1300e69aeeec0f1a296aa92a2c74d3e85b2b4a": "3a52011d5a0f1c08bdeb75389179d863",
".git/objects/27/4793dcf4e8b893a570525b973e72d6eea75fe2": "08fdeac8393e4ca2ceeb663c24023eec",
".git/objects/31/7ea1eedae2b8d1a4dd5d2725cc4b655b7a5e20": "0d287663052a2458a74af7f72d37b7e2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/c0debd99625edc1c4648051bec25f4b8116ed0": "437db281b7c5cea26d8a218ada62e930",
".git/objects/39/59868e9d47c3ed199a4dad31f0aaaf189b3e20": "09f8e3b388555d5c393272580895d012",
".git/objects/3b/c69d1e10d7630039d9081a8fa37ec5892c2cb6": "89a6d7a421209497fa5a54bab041d461",
".git/objects/3c/7e4801d0c6c84b16e326730844ca6796678869": "8eb7b1b643dd9b0f5e442cf8f36bcc98",
".git/objects/41/e126e1d52f5f5c38d9db4669a0a8a1469b7af5": "b0bb1a5555603dca3812b9fb55cb4932",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e71734581d7226cd2c0670d30da7feda63605e": "6eab2961920d541e68b54306bc9d3e1c",
".git/objects/55/1acd6572ef664b627387aeab822da3a36a3180": "a0073132c381142f0f60fdf4c13f2569",
".git/objects/70/85dfb750e9a31ca9dd9f8dc42c877d75c9b677": "7cd4f2490233695ee55cdb7bb241960a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/2d9c00c24b2ed7553699c1ebafdca84b9ca601": "f680dcd781fc258becb2d3e411a3fa98",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bf377bab62ca5f763a1337d49b864860997a30": "15fae12887286fc4a9459bd7c54c802b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/3d47dd9ecdf457744478a50f7f72066a0b559b": "663c485984ed2a6d96645670a665f37b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/bb2e0d34d08a5f997f9d458af812e7f363857e": "b2f3e9f7311ed8e1676b96df408e58b5",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6ce9f1158009104765831e774c5c1f9683c5b1": "634b94a317741f689c2d4ebef3d7db15",
".git/objects/be/77c626a47ee9e5fbc3347518866eed796420f5": "45327cf1a72fc51bbac73a1f3a1792dc",
".git/objects/c1/6798a1ba7c69234183a7c1b137efe2dc3d95a0": "e5b419983a2dec557fc3dc9180d62419",
".git/objects/cc/dfb33f338c97e03cc3d8aa6ae06b1edfc94d20": "b9c94bf4182e7db8ad30e97523e66111",
".git/objects/ce/0ae7d685f86b9aa3320e5eb0b13d89a56e7276": "c1231009a0c0d690cdda58f525741eb8",
".git/objects/d6/61e0baef995b02003518d97be02d3cc6c78f72": "39684fd8de403ca505e058fd4f8ede0b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/48652915701f8b4ceea8c8ac0352be5c650f15": "71ad31fb9829b4bdf8241dc816995363",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/b88ed33a728982067aa4c4e56a54ebcca709a2": "b98a4c4103d012206091c6c9f4413041",
".git/ORIG_HEAD": "b6aba2c3c5ffacce7776533399cb98c6",
".git/refs/heads/main": "b6aba2c3c5ffacce7776533399cb98c6",
".git/refs/remotes/origin/main": "b6aba2c3c5ffacce7776533399cb98c6",
"assets/AssetManifest.json": "a6638dc1a334892a8effe26aca607486",
"assets/assets/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"assets/assets/IMG_20210121_093442%2520cropped.jpg": "511e8e7a8798b5ed6fbc572003a6af6f",
"assets/assets/IMG_20210121_093442%2520cropsdfped.png": "f00161f2ad774c01246eba298a6f8f70",
"assets/assets/insta.png": "8d47db0433060906dda0b56c68eb89e8",
"assets/assets/sdf.png": "9b0476f6889ecd47e887d0bd9f44cf94",
"assets/assets/sdfdfg.png": "51234798814cf682415f928d001072ff",
"assets/assets/sp.png": "900fde08d619f0f3480c9c0cac4322a5",
"assets/assets/youtube.png": "391b007106fcc5db0512cf533cfe2e92",
"assets/FontManifest.json": "167ef7e2dbc89df166a27146817414a8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a9b44648331f473e6ecf176393ef3b98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4beb402e5f82df436ae35b5dc0302a52",
"/": "4beb402e5f82df436ae35b5dc0302a52",
"main.dart.js": "309a57bdcc88a727a717f9358e342122",
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
