// Nome do cache
const CACHE_NAME = 'project-anime-cache-V6';

// Lista de recursos a serem armazenados em cache
const urlsToCache = [
    '/',
    '/styleoffline.css',
    '/personagemlogo.jpeg',
    '/naruto-ramen-.jpg',
    '/indexoffline.html', // Inclua a página offline no cache
];

// Instalação do Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Intercepta as solicitações de rede
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Retorna a resposta do cache se estiver disponível
                } else {
                    return fetch(event.request)
                        .then(response => {
                            if (!response || response.status !== 200) {
                                // Quando não há conexão, redirecione para a página offline
                                return caches.match('/indexoffline.html');
                            }
                            // Armazena em cache a resposta da rede
                            return caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, response.clone());
                                return response;
                            });
                        })
                        .catch(() => {
                            // Quando não há conexão, redirecione para a página offline
                            return caches.match('/indexoffline.html');
                        });
                }
            })
    );
});

// Limpa caches antigos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );
});
