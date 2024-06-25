'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "470158ef7e6b8dc3b20c5d8144c74b86",
"version.json": "f2ae5ec371a15661a77652283e5c2a5a",
"index.html": "c6a06de09e779ad56470191fcb346183",
"/": "c6a06de09e779ad56470191fcb346183",
"main.dart.js": "ac4ab49409d8c817b6c6366522bcf3e0",
"404.html": "7b001e5b8a028058df36fd6082f10846",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b9c0695f6cbf82cc055bd96eab1d9fc7",
".git/config": "1e06d659048cc227ceea88f698702785",
".git/objects/61/b760fcc1ddcf8d9e36a39b1242a507428f998f": "8393ce2095d2393556d3d36ef2982cb7",
".git/objects/0d/8e9350783eab4cd81c9fb790a6019593192cc9": "3cbabc8af0dfa1dcbc75ff5fcedf7a59",
".git/objects/59/496965781b95ab43eafba5c8fc377c0e495bc4": "787210f39870100e211bf736f5d6ff5d",
".git/objects/0c/674de86efc6cb6d8846e3bccba3918b241e5f3": "f6b843b5d8d2fe0ba0d886e7cc555ac9",
".git/objects/50/fbba1ccab3feeafa5084d915651afc41bdb5b2": "4972fa0d165977b6795de3d415e7a1f9",
".git/objects/57/348c978b5a2ce0205be87dad709c5c59f3b9de": "763abe5786a9ac3732a73b736243e926",
".git/objects/3b/446d9cf3fec551abba0ef3215da21f4c188b44": "a4d7bcafc08bbfe1e1e0dc1c403a08fa",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/b598d97a94a3e863ebfa98d0ce9825abe6fbb9": "3b920f7a54e3e06c8172e0c0b7e2ee02",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/93/d1c1ef96709e6c84740e5e083954c21fb0b29d": "70730f3e4f6c5b55ebcec45c399579ef",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/424e0e9a909dad9774c7678100029f409e562b": "91f624e9413df5ede0c0bd13698bc0b0",
".git/objects/5a/e2edb0c25624e64899c43b025d300fd9664ffe": "b091137dfb44b819777ad5deefa8ea74",
".git/objects/a3/d5838481a701ee7bdc44f1ba82bcdaeed79894": "1dec882398aaa3f506ccb357d45d5268",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ac/39d477e7e310d4f8e72859f9b62098f3aba26c": "6634179baff73a5e34a0ba401ff007c9",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/8fef2c88bf594a61fd560868a0afa6050f686d": "93fb281163c5f0154baf7b92df083f2e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/61a8fd5220356e6025bcb9f5dae59748e523ad": "4e254f7512d9770350bd8bab62b1acbe",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/77a0c2de5169ca80d6358f49a6a4421a81d15c": "6ffaa0dfce62655ed9173c4212bef4b5",
".git/objects/bd/6477c300b406b2a6fd796c1cf55ab9c3573dea": "2165fd50a7984f5ba0fb82d21ba6f44a",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/3bc3593679accb5877c9aff1ba9f3b27491500": "ee5e4f01787ccbd8adbb8dea9db3b6e4",
".git/objects/d6/022765b1c819eb2cd0b79c9735a99cd86ba040": "58888c727988b815852cb6f7e6856f5b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/3ad6af5e7902b2193a848c357870768de58379": "f3c5930b8674a76bf1bf81c80f92b59a",
".git/objects/ee/f7e5f5e38a464213945363b7ecbb6ebeb46ac8": "e81017b7b3fdeda3478ccfcef982b980",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/f08f006a826c0ce6f81b5b6af4c4140cc6b09b": "7259500bd4c06d4c0a2fe1cbc6dcad10",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/11/b0e8a3edf969b6191a4345eabc0b3173b052ba": "cea4a594150a922f9e29a91aba6e6d98",
".git/objects/29/a8ea70b963184a14dff5d19250b5474928569e": "3bb9d392b4f334843c47bffd1452433e",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/07fcb7e533eb57923b869908ca47bb3401723b": "058209d6286abcc84d84dcefee6d568b",
".git/objects/45/f616f6c64b06d0860fe3a1c5ed84140f6892bb": "2685ce8c79c33fc0f1a3c3f99550a6e6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/78f0ac6e5e88cb25f82972710c9577b4968220": "5204cf635e625b01483d8cd72a667087",
".git/objects/73/c317fdd6a5def432f6bf4bfdd48d7b39f34927": "20aec612d64635edad8addab7d02b182",
".git/objects/87/6aeae7db77f6e22912837a58c88f85279cb577": "7d005b7a662b8777e96effd45e6833d5",
".git/objects/74/19f4c8cd189de036f7c5a90cc57f687549cbab": "6162595b121714e71a5ed17ae847d83b",
".git/objects/28/1bbaa6dd126451f711e145b08eb9e8625063e7": "e24903c6c9a35ea0f1f098274874bc2c",
".git/objects/8f/52dd72f3b37647ad8020be2b8dd2b3801c0c7e": "91ec2fd4e4534e2de8bf25d306b02d18",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/387cf5b28d84ee9f90e77c4c35a6d6cd25097c": "c6c4aaca823e748b857f023f04c23da2",
".git/objects/4c/04cb2fbce119b97127507a995772d657293dc3": "2e361cb02bfb425ec3fb6efbc917e2f9",
".git/objects/81/1e3fb5f4f5af65a2199cfdcf3cd2c4e238df82": "d7cd85d2687a275b5b8ce57f9a0ca0f3",
".git/objects/2f/f1e0e3f663f9883b81b231a8e0189951dfb605": "45d153442d07088a7bdccbe8b071f9fd",
".git/objects/2f/d37bd463dd79eeb530e03e2f2b84d017224682": "cb7f8a89f39aa1142ffbcb6da5f97930",
".git/objects/43/2511c2d480e97f6195b820a7d7eaa5ce43bc69": "5134f1af40f1ec21e197a2d1bb547c20",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/0359c3ca13d074e7a364da78c1f94438bdfd17": "eee539f10f40740cbbcab7dcd227921c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/05291084781650c777a72d12cbec2e5727a86e": "2afcdf097e1e1b191639c3b2a13c38ab",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/36/b79b8db6d7dfccc66784548906aeca8c512ef0": "0da8ab2708defee981eabf31c2b80923",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/611c3d2c9b27117660f8530ff8f8cfa08b61a5": "8972653e58f727278c5e0c0eb16507ab",
".git/objects/65/b1323aa135d9c9a8033502f5e194c3555a9d7a": "62bc0dd3e7a0413197349480dd1123d7",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/3a/ab7a0531d3d05848f8f00aab4bbcaca93318ec": "6b147edc638b4c96bf3a3806aa53cad3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/f71c3aa4f56216ab26a66a1beffb64c52301f9": "a94af522103170ba22327f80e1ba02a6",
".git/objects/01/78befc831cdcea3947e90792b0f1188811b2a1": "426108219322fb3d255149a625b097a5",
".git/objects/52/a9d84153ea9a17d0d2c136a74b3ef4eddf7a2c": "c442096163bc9940452680802a304131",
".git/objects/97/89d7c178467293d493e6f132399aa8160c9c5b": "3ceda3be6f857caaca3a72eaf81b4cbf",
".git/objects/64/754276de4750c6b3c624e740ce26c7177772dd": "1d207c42d90eed4368a96f6ae16cde25",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/acc136758a1e7bd506463f7c39dde0f82dda3e": "1380410a436bb346d569b68090f028b2",
".git/objects/b8/04f0ce8b227c7978e7b448094f6ec6f047a8a3": "a95bd100c1074655ee5357967d01a932",
".git/objects/a9/abf786cef70887b43af00f761c1f5ef9018f8a": "d4a6f623d0a189520e178bbf42cf305c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/4fa3e0714027647ce92c2f6e45a67fea7cb510": "ced1c987a02161d090975dc9377ad214",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/2a1b190f2fbdf65e12b8b9c2471b98c7fc1e89": "e275ab114c8857a4f8335f36fb6af723",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/81084950a2543ee1a9e60869265701259b0a72": "d3f57e5c7e969dcb8fabefe948dfd06c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/bfb06114a944bdf9b33360887fc47e754b1b32": "3381d1a93f8c8d5c206f295008d5be27",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/876e612d8145c7ca6106b0401f032e13108af2": "fbae123559ad879bcfb68bd89d233c27",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/ad6faf31b4571ba5bc71b4dc2662ad5baef3ba": "1fcb2e9e41d6bc649f710230284760e3",
".git/objects/e9/7e049f5e66da3fa63c102f93a02f8def1c9a6d": "b9d0d5e55cfb64b524b5b0a6938bdb42",
".git/objects/e7/5c3d2197d87e7c9387ac0735992edea4604e31": "57c7216d42884c4911da712f4e649abb",
".git/objects/cb/96f198034092200511411b23b72d7bab609a9f": "bd6155e8bcb4c992815950c3b0da1c81",
".git/objects/ce/b42cd1bedfc600efe60c47965ce5a2846ed3d0": "1f4040573007f08cf4cb865bdd088e0f",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/dee3183a9ed32a63c030b90723a4d31bd4dbaa": "7f4347d6565e41339f65b838576d072d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/c2dd106a55f5fab221786b5fdc0cad7b7774d5": "5aee8e5aa83410bdcf5afde19bfead44",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/70/940f3637243978606d5977d5a0d5c3142e70aa": "3e727f81d24eb6e0c896bc8bc935f7a9",
".git/objects/4a/c70e002f4656c7e5a5b0478a756aa913498ee2": "4b58112fff711db61b68f72d505dd6be",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/15/8b666502670e6fda4fe33cf74afd1881c0c19b": "8bb3cf6bc1251fb1341ea94a83f2b642",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/ee954985619dbe7db30298e82a4ba6e4766965": "9ac6ab03a49e721bd51c023a9db484b4",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/c9c345ac1ea32f328c1e5b7a7a70053b1501d7": "99570f40caaf9742506e3b5e98084692",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/2de8015ea30b1686cf319823aaabe8755d162a": "bb8e32a8620264fdaa153c83b43263ea",
".git/objects/7f/97f7cbcb21c2068e34f11a7b5638b5da47def5": "ac51ac19a06d7c69b4ddf22b3d45ed5f",
".git/objects/7f/16e1e399ad5d4b1a87dfa7169e400ebe34f221": "b60670810271499130ddcea329b931a6",
".git/objects/25/6fa5d3c344961a7dc587d0395e9e92b35485fc": "db4b7fa79055ac08ad3ff5c418edbdcb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "50ade5022dbf5e9d81c448e3311fe341",
".git/logs/refs/heads/main": "50ade5022dbf5e9d81c448e3311fe341",
".git/logs/refs/remotes/origin/main": "4561a838735a7c4876ad2c298e4fadf6",
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
".git/refs/heads/main": "b93a09d152a9cceff7ac37248e3268b2",
".git/refs/remotes/origin/main": "b93a09d152a9cceff7ac37248e3268b2",
".git/index": "e6bd747d58910bb749f2b2b8d64afbd4",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
"assets/AssetManifest.json": "aa504890f07f2f8dbbcdd7db2636da21",
"assets/NOTICES": "e15d3f2c923bd9d7db3973eb895efc60",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "82fe6fc02579cf3f2c486f6cf9613551",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "34ff7abca0a71fe9d3fb2b09f0d09583",
"assets/fonts/MaterialIcons-Regular.otf": "73c592a5109ec9a9c44c54e321c08320",
"assets/assets/images/t_J_logo.png": "c9279514f0c7db1196815b6ff5592124",
"assets/assets/images/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
