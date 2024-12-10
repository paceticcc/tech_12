import glassCase from './../img/cases/glass_case.png';
import leatherCase from './../img/cases/leather_case.png';
import silicone_case from './../img/cases/silicone_case.png';
import headphonesCard1 from './../img/headphones/Apple BYZ S852I.png';
import headphonesCard2 from './../img/headphones/Apple EarPods.png';
import headphonesCard3 from './../img/headphones/Apple EarPods1.png';
import wireless_headphonesCard1 from './../img/wireless_headphones/Apple AirPods.png';
import wireless_headphonesCard2 from './../img/wireless_headphones/BOROFONE BO4.png';
import wireless_headphonesCard3 from './../img/wireless_headphones/GERLAX GH-04.png';

const cards = [
    // Чехлы
    {
        id: 1,
        title: 'Стеклянные',
        img: glassCase,
        price: '100$',
        raiting: '3',
        category: 'Чехлы',
    },
    {
        id: 2,
        title: 'Силиконовые',
        img: leatherCase,
        price: '130$',
        raiting: '4',
        category: 'Чехлы',
    },
    {
        id: 3,
        title: 'Кожаные',
        img: silicone_case,
        price: '150$',
        raiting: '5',
        category: 'Чехлы',
    },

    // Наушники
    {
        id: 4,
        title: 'Apple BYZ S852I',
        img: headphonesCard1,
        price: '500$',
        raiting: '1',
        category: 'Наушники',
    },
    {
        id: 5,
        title: 'Apple EarPods',
        img: headphonesCard2,
        price: '500$',
        raiting: '2',
        category: 'Наушники',
    },
    {
        id: 6,
        title: 'Apple EarPods',
        img: headphonesCard3,
        price: '500$',
        raiting: '3',
        category: 'Наушники',
    },
    {
        id: 7,
        title: 'Apple BYZ S852I',
        img: headphonesCard1,
        price: '500$',
        raiting: '4',
        category: 'Наушники',
    },
    {
        id: 8,
        title: 'Apple EarPods',
        img: headphonesCard2,
        price: '500$',
        raiting: '5',
        category: 'Наушники',
    },
    {
        id: 9,
        title: 'Apple EarPods',
        img: headphonesCard3,
        price: '500$',
        raiting: '6',
        category: 'Наушники',
    },

    // Беспроводные наушники
    {
        id: 10,
        title: 'Apple AirPods',
        img: wireless_headphonesCard1,
        price: '500$',
        raiting: '1',
        category: 'Беспроводные наушники',
    },
    {
        id: 11,
        title: 'BOROFONE BO4',
        img: wireless_headphonesCard2,
        price: '500$',
        raiting: '2',
        category: 'Беспроводные наушники',
    },
    {
        id: 12,
        title: 'GERLAX GH-04',
        img: wireless_headphonesCard3,
        price: '500$',
        raiting: '3',
        category: 'Беспроводные наушники',
    },
];

export { cards };