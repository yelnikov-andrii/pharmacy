import medicinesImg from '../images/medicines.png';
import beautyImg from '../images/beauty.png';

export const arrMainItems = [
  {
    id: 0,
    name: 'Лікарські засоби',
    url: 'medicines',
    img: medicinesImg
  },
  {
    id: 1,
    name: 'Краса та догляд',
    url: 'beauty',
    img: beautyImg,
  }
];

export const arrmedicinesGroups = [
  {
    id: 0,
    name: 'Лікування алергії',
  },
  {
    id: 1,
    name: 'Застуда і грип',
    subgroups: [
      {
      name: 'Від кашлю',
      subgroups2: ['Протикашльові', 'Відхаркувальні', 'Від сухого кашлю', 'Від мокрого кашлю']
    }, 
    {
      name: 'Лікування нежитю',
      subgroups2: ['Протинабрякові препарати', 'Судинозвужувальні', 'Сольові розчини при нежиті']
    },
    {
      name: 'Від болю у горлі',
      subgroups2: ['Ангіна', 'Бронхіальна астма']
    },
    {
      name: 'Жарознижуючі',
    },
    {
      name: 'Зігрівальні мазі'
    },
    {
      name: 'Противірусні'
    },
    {
      name: 'Герпес'
    },
  ],
  },
  {
    id: 2,
    name: 'Серцево-судинні захворювання',
    url: 'heart and vessels',
    subgroups: [
      {name: 'Від підвищенного тиску'},
      {name: 'Лікування серця'},
      {name: 'Судинорозширювальні'},
      {name: 'Низький тиск'},
      {name: 'Стенокардія'},
      {name: 'Аритмія'},
      {name: 'Тахікардія'},
      {name: 'Препарати для покращення мозкового кровообігу'},
      {name: 'Препарати при підвищеному холестерині (статини)'},
      {name: 'Діуретики'},
      {name: 'Кардіопротектори'},
      {name: 'Бета-блокатори'},
    ]
  },
  {
    id: 3,
    name: 'Кровотворення та кров',
    url: 'vessels and blood'
  },
  {
    id: 4,
    name: 'Травний тракт',
    url: 'gastrointestinal'
  },
  {
    id: 5,
    name: 'Знеболюючі',
    url: 'analgetic'
  }
];

export const arrSelect = [
  'За рейтингом',
  'Від дешевих',
  'Від дорогих'
];

export const getData = () => {
  return fetch('https://storedata-project.herokuapp.com/medicines')
  .then(promise => {
    return promise.json()
      .then(result => {
        return result;
      })
  })
}