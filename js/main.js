/*id, число — идентификатор опубликованной фотографии. Это число от 1 до 25.
Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg,
где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии.
Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. С
лучайное число от 15 до 200.

comments, массив объектов — список комментариев,
оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии — случайное число от 0 до 30.
Все комментарии генерируются случайным образом.
{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
*/
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const PHOTOS_COUNT = 25;
const DESCRIPTIONS = [
  'Стремитесь не к успеху, а к ценностям, которые он дает',
  'Надо любить жизнь больше, чем смысл жизни.',
  'Либо вы управляете вашим днем, либо день управляет вами.',
  ' Если нет ветра, беритесь за вёсла.',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_COUNT = 6;
const MESSAGES = [
  'Фотография — это медитация в мгновении',
  'Фотография — это поиск того, что может попасть в кадр',
  'Хорошая фотография, как хорошая гончая — немая, но выразительная.',
  'Фотография — это не спорт. У нее нет правил. Все должно быть испробовано.',
  'Технически совершенная фотография может быть самой скучной картинкой в мире',
  'Я ищу неожиданное. Ищу вещи, которые никогда не видел раньше.',
  'Фотографии некоторых людей — искусство',
  'Тема определяет интерес фотографа',
  'Думать следует до и после съёмки, никогда во время её',
  'Художник призван изображать не оригинал, но отношение к нему.',
  'Искусство не изображает видимое, но делает его видимым',
];

const NAME = [
  'Велики критик',
  'Тюкавкин',
  'Аполинарий',
  'Акакий Акакиевич',
  'Роза Люксембург',
  'Гумберт',
  'Слесарь Белинский',
  'Клара Цеткин',
  'Ученый кот',
  'Мама бы так не сделала',
  'Серый волк',
  'Эйлин Уорнос',
]

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandomInteger = (a, b) => {
  const arr = [];
  return function () {
    let flag = true;
    let randomInteger;
    while (flag) {
      randomInteger = getRandomInteger(a, b);
      if (!arr.includes(randomInteger)){
        arr.push (randomInteger);
        flag = false;
        return randomInteger;
      }
    }
  };
};
const getCommentId = getUniqueRandomInteger(0, 999);
const getAvatarId = getUniqueRandomInteger(1, AVATAR_COUNT);
const getComment=()=>({
  id: getCommentId(),
  avatar: `img/avatar-${getAvatarId()}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length)],
  name: NAME [getRandomInteger(0, NAME.length)]
});

const getComments = (n)=> Array.from({length: n}, getComment);

const getPhotoId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getImageId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getImageId()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0,DESCRIPTIONS.length)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});
const getPhotos = (n) => {
  const photos = [];
  for (let i = 0; i < n; i++) {
    photos.push(getPhoto());
  }
  return photos;
};

console.log(getPhotos(PHOTOS_COUNT));
