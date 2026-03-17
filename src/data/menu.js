export const menuCategories = [
  {
    id: 'coffee',
    name: 'Кофе',
    icon: '☕',
    items: [
      {
        id: 'espresso',
        name: 'Эспрессо',
        description: 'Классический крепкий кофе из 100% арабики',
        price: 150,
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
        badges: ['popular']
      },
      {
        id: 'americano',
        name: 'Американо',
        description: 'Эспрессо с горячей водой',
        price: 180,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
        badges: []
      },
      {
        id: 'cappuccino',
        name: 'Капучино',
        description: 'Эспрессо с нежной молочной пенкой',
        price: 220,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
        badges: ['popular']
      },
      {
        id: 'latte',
        name: 'Латте',
        description: 'Мягкий кофе с большим количеством молока',
        price: 240,
        image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=600&q=80',
        badges: []
      },
      {
        id: 'flatwhite',
        name: 'Флэт Уайт',
        description: 'Двойной эспрессо с микропенкой',
        price: 250,
        image: 'https://images.unsplash.com/photo-1542841791-1925b02a2bbb?w=600&q=80',
        badges: ['new']
      },
      {
        id: 'raff',
        name: 'Раф кофе',
        description: 'Эспрессо со сливками и ванильным сахаром',
        price: 280,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80',
        badges: ['popular']
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Напитки',
    icon: '🥤',
    items: [
      {
        id: 'tea-black',
        name: 'Чёрный чай',
        description: 'Классический чёрный чай',
        price: 120,
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80',
        badges: []
      },
      {
        id: 'tea-green',
        name: 'Зелёный чай',
        description: 'Освежающий зелёный чай',
        price: 130,
        image: 'https://images.unsplash.com/photo-1627435601361-ec71706b8da1?w=600&q=80',
        badges: []
      },
      {
        id: 'matcha',
        name: 'Матча латте',
        description: 'Японский зелёный чай с молоком',
        price: 280,
        image: 'https://images.unsplash.com/photo-1536013664833-b8e909b9b2c7?w=600&q=80',
        badges: ['new', 'hot']
      },
      {
        id: 'cacao',
        name: 'Какао',
        description: 'Горячий шоколад на молоке',
        price: 200,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80',
        badges: []
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Десерты',
    icon: '🍰',
    items: [
      {
        id: 'croissant',
        name: 'Круассан',
        description: 'Свежий французский круассан',
        price: 150,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
        badges: []
      },
      {
        id: 'cheesecake',
        name: 'Чизкейк',
        description: 'Нежный творожный торт',
        price: 280,
        image: 'https://images.unsplash.com/photo-1533134242221-89d7de97f2f5?w=600&q=80',
        badges: ['popular']
      },
      {
        id: 'brownie',
        name: 'Брауни',
        description: 'Шоколадный пирог с орехами',
        price: 220,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
        badges: []
      },
      {
        id: 'tiramisu',
        name: 'Тирамису',
        description: 'Итальянский десерт с кофе и маскарпоне',
        price: 320,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
        badges: ['popular']
      }
    ]
  },
  {
    id: 'food',
    name: 'Еда',
    icon: '🥐',
    items: [
      {
        id: 'sandwich',
        name: 'Сэндвич',
        description: 'С курицей, сыром и овощами',
        price: 280,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
        badges: []
      },
      {
        id: 'bagel',
        name: 'Бейгл с лососем',
        description: 'С сливочным сыром и красной рыбой',
        price: 350,
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80',
        badges: ['new']
      },
      {
        id: 'salad',
        name: 'Цезарь',
        description: 'Классический салат с курицей',
        price: 380,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80',
        badges: []
      }
    ]
  }
];

export const getMenuItemById = (id) => {
  for (const category of menuCategories) {
    const item = category.items.find(item => item.id === id);
    if (item) return item;
  }
  return null;
};

export const getCategoryById = (id) => {
  return menuCategories.find(cat => cat.id === id);
};
