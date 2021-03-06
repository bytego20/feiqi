importScripts("https://cdn.myun.info/workbox-v4.3.1/workbox-sw.js", "precache-manifest.f536d0cb80038164c0c14e067228f334.js");

// workbox.precaching([
//     // 注册成功后要立即缓存的资源列表
// ])
// //

// //

// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});



// vue-cli3.0 supports pwa with the help of workbox-webpack-plugin, we need to get the precacheing list through this sentence.
//
workbox.core.skipWaiting(); // 强制等待中的 Service Worker 被激活
workbox.core.clientsClaim(); // Service Worker 被激活后使其立即获得页面控制权
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    new RegExp('.*\.(?:js|css)'),
    workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.networkOnly()
);
