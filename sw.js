// Just Do PWA Service Worker
const CACHE_NAME = 'just-do-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// 瀹夎浜嬩欢
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// 婵€娲讳簨浠?self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 璇锋眰鎷︽埅
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 缂撳瓨鍛戒腑
        if (response) {
          return response;
        }
        
        // 鍏嬮殕璇锋眰
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // 妫€鏌ユ槸鍚︿负鏈夋晥鍝嶅簲
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // 鍏嬮殕鍝嶅簲
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // 绂荤嚎鏃惰繑鍥炵紦瀛樼殑棣栭〉
          return caches.match('./index.html');
        });
      })
  );
});

// 鎺ㄩ€侀€氱煡锛堥鐣欙級
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : '浣犳湁鏂扮殑寰呭姙浠诲姟',
    vibrate: [200, 100, 200],
    tag: 'just-do-notification'
  };
  
  event.waitUntil(
    self.registration.showNotification('Just Do', options)
  );
});

// 鐐瑰嚮閫氱煡
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('./')
  );
});
