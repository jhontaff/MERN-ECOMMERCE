const data = {
    products: [

        //SWITCHES

        {
            name: 'Switch TP-Link TL-SG1024DE',
            slug: 'switch-tp-link-sg1024de',
            category: 'Switches',
            image: '/img/sw-tpl-tl.png',
            price: 91,
            inStock: 10,
            brand: 'TP-Link',
            rating: 4.5,
            numReviewes: 10,
            description: 'Tipo de telecomunicación: Store and forward. Capacidad de conmutación: 48 Gbps. Incluye: 24 puertos RJ-45. Tiene 294 mm de ancho, 44 mm de alto y 180 mm de profundidad. Se puede colocar en la pared o instalar fácilmente en el escritorio. Práctico tanto para uso personal como profesional.'
        },

        {
            name: 'Switch TP-Link LS1005G serie LiteWave',
            slug: 'switch-tp-link-ls1005g-lite-wave',
            category: 'Switches',
            image: '/img/sw-tpl-ls.png',
            price: 50,
            inStock: 7,
            brand: 'TP-Link',
            rating: 3.9,
            numReviewes: 12,
            description: 'Tipo de telecomunicación: Store and forward. Capacidad de conmutación: 10 Gbps. Incluye: 5 puertos RJ-45. Tiene 90 mm de ancho, 23 mm de alto y 72 mm de profundidad. Se puede instalar fácilmente en el escritorio. Práctico tanto para uso personal como profesional. '
        },

        {
            name: 'Cisco Business Cbs350-48t-4g Managed Switch',
            slug: 'cisco-cbs350-48t-4g-switch',
            category: 'Switches',
            image: '/img/sw-cs-cbs.png',
            price: 999,
            inStock: 5,
            brand: 'Cisco',
            rating: 4.7,
            numReviewes: 9,
            description: 'Comparte archivos, impresoras y conexión a Internet con múltiples equipos simultáneamente.Gracias a Cisco Designed Cbs350-48t-4g-na, podrás conectar diferentes dispositivos a través de sus puertos y optimizar su rendimiento, velocidad y seguridad.'
        },

        {
            name: 'Cisco Sf300-08',
            slug: 'cisco-sf300-08',
            category: 'Switches',
            image: '/img/sw-cs-sf.png',
            price: 48,
            inStock: 15,
            brand: 'Cisco',
            rating: 4.3,
            numReviewes: 21,
            description: 'Switch CISCO de 8 puertos administrable'
        },

        {
            name: 'Netgear Gs316 16-port Switch',
            slug: 'netgear-gs316-16-port-switch',
            category: 'Switches',
            image: '/img/sw-ng-gs.png',
            price: 60,
            inStock: 16,
            brand: 'Netgear',
            rating: 4.8,
            numReviewes: 7,
            description: 'Los switches no gestionados Ethernet para oficina en casa de NETGEAR ofrecen una conectividad de red fácil y asequible para oficinas pequeñas y oficinas domésticas. Son fáciles de usar, fiables y resistentes gracias a sus carcasas de metal. La compatibilidad con alimentación a través de Ethernet (PoE) también está disponible para proporcionar alimentación y datos a través de un único cable Ethernet de categoría 5 a dispositivos como cámaras de seguridad IP, teléfonos VoIP, puntos de acceso inalámbricos, etc.'
        },
        

        //Routers

        {
            name: 'Router Tenda AC8 negro 100V/240V',
            slug: 'router-tenda-ac8-negro',
            category: 'Routers',
            image: '/img/rt-td-ac8.png',
            price: 42,
            inStock: 9,
            brand: 'Tenda',
            rating: 4.4,
            numReviewes: 26,
            description: 'Con el router Tenda AC8 podrás establecer redes potentes para enviar y recibir información a gran velocidad. Con este equipo inalámbrico podrás desplazarte con total libertad por tu casa u oficina y disfrutar de la conexión sin estar pendiente de los cables. Con este dispositivo, las paredes y techos no son un obstáculo: los múltiples receptores garantizan un mejor rendimiento en lugares con gran nivel de interferencia'
        },
        
        {
            name: 'Router Tenda F3 blanco',
            slug: 'router-tenda-f3-blanco',
            category: 'Routers',
            image: '/img/rt-td-f3.png',
            price: 24,
            inStock: 18,
            brand: 'Tenda',
            rating: 4.5,
            numReviewes: 10,
            description: 'Conexión inalámbrica. Ofrece una velocidad de 300Mbps. Banda única de 2.4 GHz. Posee 3 antenas externas. Tiene 4 puertos para conectarse. Dispositivo que facilita conexión a la red.'
        },

        {
            name: 'Router Asus V2 RT-AC1200_V2 negro 110V/240V',
            slug: 'router-asus-v2-rt-ac1200',
            category: 'Routers',
            image: '/img/rt-as-ac12.png',
            price: 36,
            inStock: 13,
            brand: 'Asus',
            rating: 4.7,
            numReviewes: 15,
            description: 'Ofrece una velocidad de 1167Mbps. Banda doble de 2.4 GHz y 5 GHz. Posee 4 antenas externas. Tiene 5 puertos para conectarse. Con firewall integrado. Soporta los protocolos de seguridad WPS, DMZ, WPA, WPA2, NAT. Dispositivo que facilita conexión a la red.'
        },

        {
            name: 'Router Gamer Asus Rapture Gt-ac2900',
            slug: 'router-gamer-asus-rapture-gt-ac29',
            category: 'Routers',
            image: '/img/rt-as-gamer.png',
            price: 207,
            inStock: 7,
            brand: 'Asus',
            rating: 4.8,
            numReviewes: 21,
            description: 'Con el router Asus GT-AC2900 podrás establecer redes potentes para enviar y recibir información a gran velocidad. Con este equipo inalámbrico podrás desplazarte con total libertad por tu casa u oficina y disfrutar de la conexión sin estar pendiente de los cables. Con este dispositivo, las paredes y techos no son un obstáculo: los múltiples receptores garantizan un mejor rendimiento en lugares con gran nivel de interferencia.'
        },

        //RADIOS
        {
            name: 'Cambium Networks Epmp 5 Ghz Force 300-16 Radio',
            slug: 'cambium-network-epmp-5-ghz-force-300-16-radio',
            category: 'Radios',
            image: '/img/rad-cn-300.png',
            price: 167,
            inStock: 11,
            brand: 'Cambium Networks',
            rating: 4.1,
            numReviewes: 14,
            description: 'Ofrece un rendimiento, resistencia y alcance superiores en los entornos más congestionados. Combinando lo último Chipset 802.11ac Wave 2 y el TDD MAC probado en el campo de ePMP, el Force 300-16 ofrece un producto punto a punto convincente pero asequible y un módulo de abonado de ganancia media para el ePMP 3000 y ePMP Puntos de acceso 3000L.'
        },

        {
            name: 'Radio Tenda O3 Radio Enlace 5km Cpe 2.4 Ghz',
            slug: 'radio-tenda-o3',
            category: 'Radios',
            image: '/img/rad-td-03.png',
            price: 104,
            inStock: 8,
            brand: 'Tenda',
            rating: 3.8,
            numReviewes: 9,
            description: 'O3 2.4GHz Outdoor CPE está diseñado para soluciones WISP CPE y soluciones de red inalámbrica de larga distancia para video vigilancia y transmisión de datos. Cuenta con una antena direccional de 12dBi para proporcionar una manera eficiente de captar y mantener una señal estable para una red inalámbrica. Adopta la tecnología de puente automático, dos CPE pueden conectarse entre sí automáticamente para facilitar la configuración.'
        },

        //ANTENAS
        {
            name: 'Antena Ubiquiti Powerbeam 5 Ghz 25 km',
            slug: 'antena-ubiquiti-powerbeam',
            category: 'Antenas',
            image: '/img/at-ub-pb.png',
            price: 334,
            inStock: 7,
            brand: 'Ubiquiti',
            rating: 4.0,
            numReviewes: 14,
            description: 'El PowerBeam 5AC Gen 2 dirige la energía de RF en un ancho de haz más ajustado. Con el foco en una dirección, el PowerBeam 5AC Gen 2 bloquea o espacia el ruido, por lo que se mejora la inmunidad al ruido. Esta característica es especialmente importante en un área atestada de otras señales de RF de la misma frecuencia o similar.'
        },

        {
            name: 'Litebeam Lbe-m5-23 Airmax Antena Ubiquiti',
            slug: 'antena-litebeam-m5-23-ubiquiti',
            category: 'Antenas',
            image: '/img/at-ub-lb.png',
            price: 84,
            inStock: 11,
            brand: 'Ubiquiti',
            rating: 4.2,
            numReviewes: 7,
            description: 'Antena direccional de alta ganancia: El LiteBeam M provee de 23 dBi de ganancia para largas distancias y usa un patrón direccional mejorado para evitar ruidos. Diseño industrial que rompe moldes: Se ajusta en segundos sin necesidad de herramientas. Tamaño compacto, muy ligero y a un precio muy competitivo.'
        },

        {
            name: 'Antena Satelital Banda Ku 75cm Lnb Universal',
            slug: 'antena-satelital-movi-lnb-universal',
            category: 'Antenas',
            image: '/img/at-mv-sat.png',
            price: 42,
            inStock: 22,
            brand: 'Movi',
            rating: 3.5,
            numReviewes: 18,
            description: 'Antena satelital 78 centímetros incluye LNB universal de 2 salidas'        
        },

        {
            name: 'Antena Satelital Eurostars 90 Cm Banda Ku',
            slug: 'antena-satelital-eurostars-90-cm',
            category: 'Antenas',
            image: '/img/at-eu-sat.png',
            price: 71,
            inStock: 11,
            brand: 'Eurostars',
            rating: 4.1,
            numReviewes: 14,
            description: 'Antena Satelital Eurostars 90 Cm Banda Ku Lnb Incluido'        
        },
        
    ],
};

export default data;