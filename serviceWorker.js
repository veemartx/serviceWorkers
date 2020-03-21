// cache 

var CACHE_NAME = 'my-site-cache-v1';

var urlsToCatch = [
    '/',
    'css/index.css',
    'js/index.js'
]




self.addEventListener('install', (e) => {

    // install events
    e.waitUntil(

        caches.open(CACHE_NAME)

            .then((cache) => {

                console.log('Opened Cache');

                return cache.addAll(urlsToCatch);

            })

    );

})



// return the cached elements
self.addEventListener('fetch', (e) => {

    e.respondWith(

        caches.match(e.request)

            .then((res) => {

                // cache hit return res 

                if (res) {

                    return res;
                }

                return fetch(e.request);
            })
    );
})

