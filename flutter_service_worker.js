'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f2ae5ec371a15661a77652283e5c2a5a",
"index.html": "585d65ed7bd8aa0a8c666a219a106499",
"/": "585d65ed7bd8aa0a8c666a219a106499",
"main.dart.js": "56ae84841132eb1237b622c29ce1993c",
"404.html": "c70c9a90cfc7dd4e54b2f61eeacd17ed",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b9c0695f6cbf82cc055bd96eab1d9fc7",
".git/config": "1e06d659048cc227ceea88f698702785",
".git/objects/0d/8e9350783eab4cd81c9fb790a6019593192cc9": "3cbabc8af0dfa1dcbc75ff5fcedf7a59",
".git/objects/50/fbba1ccab3feeafa5084d915651afc41bdb5b2": "4972fa0d165977b6795de3d415e7a1f9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/60/424e0e9a909dad9774c7678100029f409e562b": "91f624e9413df5ede0c0bd13698bc0b0",
".git/objects/a3/d5838481a701ee7bdc44f1ba82bcdaeed79894": "1dec882398aaa3f506ccb357d45d5268",
".git/objects/ac/39d477e7e310d4f8e72859f9b62098f3aba26c": "6634179baff73a5e34a0ba401ff007c9",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/8fef2c88bf594a61fd560868a0afa6050f686d": "93fb281163c5f0154baf7b92df083f2e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/bd/6477c300b406b2a6fd796c1cf55ab9c3573dea": "2165fd50a7984f5ba0fb82d21ba6f44a",
".git/objects/d6/022765b1c819eb2cd0b79c9735a99cd86ba040": "58888c727988b815852cb6f7e6856f5b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/3ad6af5e7902b2193a848c357870768de58379": "f3c5930b8674a76bf1bf81c80f92b59a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c6/f08f006a826c0ce6f81b5b6af4c4140cc6b09b": "7259500bd4c06d4c0a2fe1cbc6dcad10",
".git/objects/29/a8ea70b963184a14dff5d19250b5474928569e": "3bb9d392b4f334843c47bffd1452433e",
".git/objects/16/07fcb7e533eb57923b869908ca47bb3401723b": "058209d6286abcc84d84dcefee6d568b",
".git/objects/73/c317fdd6a5def432f6bf4bfdd48d7b39f34927": "20aec612d64635edad8addab7d02b182",
".git/objects/87/6aeae7db77f6e22912837a58c88f85279cb577": "7d005b7a662b8777e96effd45e6833d5",
".git/objects/74/19f4c8cd189de036f7c5a90cc57f687549cbab": "6162595b121714e71a5ed17ae847d83b",
".git/objects/8f/52dd72f3b37647ad8020be2b8dd2b3801c0c7e": "91ec2fd4e4534e2de8bf25d306b02d18",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/43/2511c2d480e97f6195b820a7d7eaa5ce43bc69": "5134f1af40f1ec21e197a2d1bb547c20",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/05291084781650c777a72d12cbec2e5727a86e": "2afcdf097e1e1b191639c3b2a13c38ab",
".git/objects/36/b79b8db6d7dfccc66784548906aeca8c512ef0": "0da8ab2708defee981eabf31c2b80923",
".git/objects/91/611c3d2c9b27117660f8530ff8f8cfa08b61a5": "8972653e58f727278c5e0c0eb16507ab",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/f71c3aa4f56216ab26a66a1beffb64c52301f9": "a94af522103170ba22327f80e1ba02a6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/acc136758a1e7bd506463f7c39dde0f82dda3e": "1380410a436bb346d569b68090f028b2",
".git/objects/b8/04f0ce8b227c7978e7b448094f6ec6f047a8a3": "a95bd100c1074655ee5357967d01a932",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/2a1b190f2fbdf65e12b8b9c2471b98c7fc1e89": "e275ab114c8857a4f8335f36fb6af723",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/81084950a2543ee1a9e60869265701259b0a72": "d3f57e5c7e969dcb8fabefe948dfd06c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/ad6faf31b4571ba5bc71b4dc2662ad5baef3ba": "1fcb2e9e41d6bc649f710230284760e3",
".git/objects/e7/5c3d2197d87e7c9387ac0735992edea4604e31": "57c7216d42884c4911da712f4e649abb",
".git/objects/cb/96f198034092200511411b23b72d7bab609a9f": "bd6155e8bcb4c992815950c3b0da1c81",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/c2dd106a55f5fab221786b5fdc0cad7b7774d5": "5aee8e5aa83410bdcf5afde19bfead44",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/70/940f3637243978606d5977d5a0d5c3142e70aa": "3e727f81d24eb6e0c896bc8bc935f7a9",
".git/objects/4a/c70e002f4656c7e5a5b0478a756aa913498ee2": "4b58112fff711db61b68f72d505dd6be",
".git/objects/15/8b666502670e6fda4fe33cf74afd1881c0c19b": "8bb3cf6bc1251fb1341ea94a83f2b642",
".git/objects/2e/2de8015ea30b1686cf319823aaabe8755d162a": "bb8e32a8620264fdaa153c83b43263ea",
".git/objects/7f/97f7cbcb21c2068e34f11a7b5638b5da47def5": "ac51ac19a06d7c69b4ddf22b3d45ed5f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e0be03492e696f5c127cbeabf798ef3",
".git/logs/refs/heads/main": "4e0be03492e696f5c127cbeabf798ef3",
".git/logs/refs/remotes/origin/main": "7d14cb357cdee2b2f6722acf4ff6ccd8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f407dc45024646459f2fb0f8a8d0fe36",
".git/refs/remotes/origin/main": "f407dc45024646459f2fb0f8a8d0fe36",
".git/index": "e6251983c4929730e051b84603d01c85",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
"assets/AssetManifest.json": "aa504890f07f2f8dbbcdd7db2636da21",
"assets/NOTICES": "ef13e4ce4301d0a58b063aaa4dc400c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "34ff7abca0a71fe9d3fb2b09f0d09583",
"assets/fonts/MaterialIcons-Regular.otf": "585c08daf4e787d1b85302bc73d9e639",
"assets/assets/images/t_J_logo.png": "c9279514f0c7db1196815b6ff5592124",
"assets/assets/images/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
