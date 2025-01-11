import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Scalable Backend Application',
      created_at: '10 January, 2025',
      category: {
        id: 1,
        title: {
          en: 'Backend Development',
          tr: 'Backend Geliştirme',
        },
      },
      content: {
        en: 'Developed a microservices-based application using Docker and Docker Compose. The system comprises services for account management, catalog handling, order processing, and a GraphQL API gateway. Each service is containerized and connected to its respective database, ensuring modularity and scalability.',
        tr: 'Docker ve Docker Compose kullanarak mikro hizmet tabanlı bir uygulama geliştirildi. Sistem, hesap yönetimi, katalog işlemleri, sipariş işlemleri ve bir GraphQL API geçidi için hizmetler içeriyor. Her hizmet modüler ve ölçeklenebilirlik sağlamak için kapsülenmiştir.',
      },
      image: '/images/project-1.jpg',
      github_link: 'https://github.com/Algo-Voyager/scalable-backend-application',
    },
    {
      id: 2,
      title: 'TSP-CWOA-SA',
      created_at: '05 December, 2024',
      category: {
        id: 1,
        title: {
          en: 'Algorithm Development',
          tr: 'Algoritma Geliştirme',
        },
      },
      content: {
        en: 'Created a solver for the Traveling Salesman Problem utilizing Simulated Annealing, integrated with Streamlit for interactive visualization. The application provides a real-time animation of the TSP solution process, displaying both the current and optimal tours.',
        tr: 'Simulated Annealing kullanarak Gezgin Satıcı Problemi için bir çözücü geliştirildi ve Streamlit ile etkileşimli görselleştirme entegre edildi. Uygulama, hem mevcut hem de optimal turlara görsellik sağlayan gerçek zamanlı bir animasyon sunar.',
      },
      image: '/images/tsp.png',
      github_link: 'https://github.com/Algo-Voyager/TSP-CWOA-SA',
    },
    {
      id: 3,
      title: 'P2P Botnet Detection Using Ensemble Learning',
      created_at: '15 November, 2024',
      category: {
        id: 1,
        title: {
          en: 'ML in Cybersecurity',
          tr: 'Siber Güvenlik',
        },
      },
      content: {
        en: 'Engineered a system to detect peer-to-peer botnets through network traffic analysis. Employed machine learning models, including Decision Trees, Logistic Regression, and Random Forests, to identify malicious activities.',
        tr: 'Ağ trafiği analizi yoluyla peer-to-peer botnetleri tespit etmek için bir sistem geliştirildi. Kötü niyetli faaliyetleri tespit etmek için Karar Ağaçları, Lojistik Regresyon ve Random Forests gibi makine öğrenme modelleri kullanıldı.',
      },
      image: '/images/p2p.png',
      github_link: 'https://github.com/Algo-Voyager/P2P_Botnet_Detection_Ensemble_Learning',
    },
    {
      id: 4,
      title: 'GoToDoApp',
      created_at: '01 October, 2024',
      category: {
        id: 1,
        title: {
          en: 'Backend Development',
          tr: 'Backend Geliştirme',
        },
      },
      content: {
        en: 'Built a simple Todo application using Go and MongoDB. Designed RESTful API endpoints for creating, retrieving, updating, and deleting tasks. Implemented a frontend interface to interact with the backend services.',
        tr: 'Go ve MongoDB kullanarak basit bir Todo uygulaması geliştirildi. RESTful API uç noktaları tasarlandı ve arka uç hizmetleri ile etkileşim sağlayan bir ön yüz uygulaması uygulandı.',
      },
      image: '/images/gotodo.png',
      github_link: 'https://github.com/Algo-Voyager/GoToDoApp',
    },
    {
      id: 5,
      title: 'Flex-Shop',
      created_at: '20 September, 2024',
      category: {
        id: 1,
        title: {
          en: 'Web Application',
          tr: 'Web Uygulaması',
        },
      },
      content: {
        en: 'Contributed to an e-commerce platform designed for buying and selling products. Developed features catering to both buyers and sellers, enhancing user experience.',
        tr: 'Ürün alım satımı için tasarlanan bir e-ticaret platformuna katkı sağlandı. Kullanıcı deneyimini geliştiren alıcılar ve satıcılara yönelik özellikler geliştirildi.',
      },
      image: '/images/Shop-online.png',
      github_link: 'https://github.com/Algo-Voyager/flex-shop',
    },
    {
      id: 6,
      title: 'Netflix Episode Page',
      created_at: '30 August, 2024',
      category: {
        id: 3,
        title: {
          en: 'UI/UX Design',
          tr: 'UI/UX Tasarım',
        },
      },
      content: {
        en: 'Developed a Flutter-based application replicating the Netflix episode page interface. Focused on UI/UX design to closely mimic the original layout and functionality.',
        tr: 'Flutter tabanlı bir uygulama geliştirildi ve Netflix bölüm sayfası arayüzünü taklit etti. Orijinal tasarım ve işlevselliği yakından yansıtmak için UI/UX tasarıma odaklanıldı.',
      },
      image: '/images/netflix.jpg',
      github_link: 'https://github.com/Algo-Voyager/netflix-episode-page',
    },
    {
      id: 7,
      title: 'Local-Torrent',
      created_at: '01 January, 2022',
      category: {
        id: 2,
        title: {
          en: 'Peer-to-Peer Application',
          tr: 'Eşler Arası Uygulama',
        },
      },
      content: {
        en: 'Developed a peer-to-peer desktop application enabling group chats, private messaging, and file sharing among users. Integrated socket programming and P2P protocols to achieve low-latency communication.',
        tr: 'Kullanıcılar arasında grup sohbeti, özel mesajlaşma ve dosya paylaşımını sağlayan eşler arası bir masaüstü uygulaması geliştirildi. Düşük gecikmeli iletişim sağlamak için soket programlama ve P2P protokolleri entegre edildi.',
      },
      image: '/images/torrent.png',
      github_link: 'https://github.com/Algo-Voyager/Local-Torrent',
    },
    {
      id: 8,
      title: 'Text Viewer-Editor',
      created_at: '15 July, 2024',
      category: {
        id: 2,
        title: {
          en: 'Desktop Application',
          tr: 'Masaüstü Uygulama',
        },
      },
      content: {
        en: 'Created a native application for viewing and editing text files. Implemented features to open, edit, and save text documents within a user-friendly interface.',
        tr: 'Metin dosyalarını görüntülemek ve düzenlemek için bir masaüstü uygulaması geliştirildi. Kullanıcı dostu bir arayüzde metin belgelerini açma, düzenleme ve kaydetme özellikleri eklendi.',
      },
      image: '/images/text_app.jpg',
      github_link: 'https://github.com/Algo-Voyager/Text_Viewer-Editor',
    },
    
  ];
});
