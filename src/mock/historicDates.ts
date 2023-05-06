export interface IHistoricDateGroup {
  title: string;
  from: number;
  to: number;
  dates: IHistoricDate[];
}

interface IHistoricDate {
  text: string;
  year: number;
}

const science1 = {
  year: 2015,
  text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
}
const science2 = {
  year: 2016,
  text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
}
const science3 = {
  year: 2017,
  text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
}
const science4 = {
  year: 2018,
  text: 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца'
}
const science5 = {
  year: 2019,
  text: 'Google объявил о создании 53-кубитного квантового компьютера'
}
const science6 = {
  year: 2020,
  text: 'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта'
}

const literature1 = {
  year: 1992,
  text: 'Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'
}
const literature2 = {
  year: 1994,
  text: '«Бессонница» - роман Стивена Кинга.'
}
const literature3 = {
  year: 1994,
  text: 'Нобелевская премия по литературе - Шеймас Хини.'
}
const literature4 = {
  year: 1997,
  text: 'Гарри Поттер и философский камень - Джоан Роулинг.'
}

const cinema1 = {
  year: 1987,
  text: '«Хищник»/Predator, США (реж. Джон Мактирнан)'
}
const cinema2 = {
  year: 1988,
  text: '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)'
}
const cinema3 = {
  year: 1989,
  text: '«Назад в будущее 2»/Back to the Future 2, США (реж. Роберт Земекис)'
}
const cinema4 = {
  year: 1990,
  text: '«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин)'
}
const cinema5 = {
  year: 1991,
  text: '«Семейка Аддамс»/The Addams Family, США (реж. Барри Зонненфельд)'
}

const theatre1 = {
  year: 1999,
  text: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона'
}
const theatre2 = {
  year: 2000,
  text: 'Возобновлено издание журнала «Театр».'
}
const theatre3 = {
  year: 2002,
  text: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон'
}
const theatre4 = {
  year: 2003,
  text: 'Что-то ещё крутое в мире театра'
}


const scienceGroup: IHistoricDateGroup = {
  title: 'Наука',
  from: 2015,
  to: 2022,
  dates: [science1, science2, science3, science4, science5, science6]
};
const literatureGroup: IHistoricDateGroup = {
  title: 'Литература',
  from: 1992,
  to: 1997,
  dates: [literature1, literature2, literature3, literature4]
};
const cinemaGroup: IHistoricDateGroup = {
  title: 'Кино',
  from: 1987,
  to: 1991,
  dates: [cinema1, cinema2, cinema3, cinema4, cinema5]
};
const theatreGroup: IHistoricDateGroup = {
  title: 'Театр',
  from: 1999,
  to: 2004,
  dates: [theatre1, theatre2, theatre3, theatre4]
};



export const datesGroups: IHistoricDateGroup[] = [scienceGroup, cinemaGroup, scienceGroup, literatureGroup, cinemaGroup, theatreGroup];