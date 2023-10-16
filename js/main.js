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
  'комментарии',
  'случайным',
  'каждой',
  'фотографии — случайное',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

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

const getComment=()=>({
  id: getCommentId(),
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём'
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
