import iconSki from '/assets/icon/Лыжи.svg'
import iconSign from '/assets/icon/Знак.svg'
import type { City } from './MapCanvas'
import type { TourCardProps } from '../TourCard/TourCard'

export const cities: City[] = [
    { name: 'г. Петропаловск', top: 132, left: 889, status: 'orange' },
    { name: 'г. Костанай', top: 191, left: 735 },
    { name: 'г. Рудный', top: 257, left: 712 },
    { name: 'г. Кокшетау', top: 250, left: 891 },
    { name: 'г. Астана', top: 354, left: 944, status: 'green' },
    { name: 'г. Караганда', top: 410, left: 1029, status: 'green' },
    { name: 'г. Жезказган', top: 511, left: 854 },
    { name: 'г. Кызылорда', top: 630, left: 805 },
    { name: 'г. Байконур', top: 576, left: 686 },
    { name: 'г. Актау', top: 672, left: 375 },
    { name: 'г. Атырау', top: 484, left: 362 },
    { name: 'г. Уральск', top: 324, left: 368 },
    { name: 'г. Актобе', top: 374, left: 549 },
    { name: 'г. Талдыкорган', top: 587, left: 1165 },
    { name: 'г. Алма-Ата', top: 686, left: 1123, status: 'green' },
    { name: 'г. Тараз', top: 708, left: 981 },
    { name: 'г. Шымкент', top: 760, left: 902, status: 'orange' },
    { name: 'г. Павлодар', top: 258, left: 1174 },
    { name: 'г. Экибастуз', top: 317, left: 1111 },
    { name: 'г. Усть-Каменогрск', top: 362, left: 1306 },
    { name: 'г. Семей', top: 400, left: 1236 },
];

export const tours: TourCardProps[] = [
    {
        title: "Зимний поход",
        difficulty: { label: 'Лёгкий', type: 'easy' },
        tags: [
            { icon: iconSki, label: 'Лыжи и сноуборд' },
            { icon: iconSign, label: 'Экспедиции' }
        ],
        route: "Медеу → Шымбулак → Ущелье → Алматинское озеро → Аюсай",
        image: "/Tour.png"
    },
    {
        title: "Зимний поход",
        difficulty: { label: 'Средний', type: 'middle' },
        tags: [
            { icon: iconSki, label: 'Лыжи и сноуборд' },
            { icon: iconSign, label: 'Экспедиции' }
        ],
        route: "Медеу → Шымбулак → Ущелье → Алматинское озеро → Аюсай",
        image: "/Tour.png"
    },
    {
        title: "Зимний поход",
        difficulty: { label: 'Сложный', type: 'hard' },
        tags: [
            { icon: iconSki, label: 'Лыжи и сноуборд' },
            { icon: iconSign, label: 'Экспедиции' }
        ],
        route: "Медеу → Шымбулак → Ущелье → Алматинское озеро → Аюсай",
        image: "/Tour.png"
    },
    {
        title: "Зимний поход",
        difficulty: { label: 'Средний', type: 'middle' },
        tags: [
            { icon: iconSki, label: 'Лыжи и сноуборд' },
            { icon: iconSign, label: 'Экспедиции' }
        ],
        route: "Медеу → Шымбулак → Ущелье → Алматинское озеро → Аюсай",
        image: "/Tour.png"
    },
    {
        title: "Зимний поход",
        difficulty: { label: 'Лёгкий', type: 'easy' },
        tags: [
            { icon: iconSki, label: 'Лыжи и сноуборд' },
            { icon: iconSign, label: 'Экспедиции' }
        ],
        route: "Медеу → Шымбулак → Ущелье → Алматинское озеро → Аюсай",
        image: "/Tour.png"
    },
    {
        title: "Зимний поход",
        difficulty: { label: 'Средний', type: 'middle' },
        tags: [
            { icon: iconSki, label: 'Лыжи и сноуборд' },
            { icon: iconSign, label: 'Экспедиции' }
        ],
        route: "Медеу → Шымбулак → Ущелье → Алматинское озеро → Аюсай",
        image: "/Tour.png"
    },
    {
        title: "Зимний поход",
        difficulty: { label: 'Сложный', type: 'hard' },
        tags: [
            { icon: iconSki, label: 'Лыжи и сноуборд' },
            { icon: iconSign, label: 'Экспедиции' }
        ],
        route: "Медеу → Шымбулак → Ущелье → Алматинское озеро → Аюсай",
        image: "/Tour.png"
    }
];
