// По общепринятому соглашению, lodash импортируется под именем _
import _ from 'lodash';

// eslint-disable-next-line no-console
console.log('Hello, Hexlet!');

// Пересечение массивов
_.intersection([2, 1], [2, 3]); // => [2]

// capitalize делает первую букву заглавной
_.capitalize('hello'); // Hello

// eslint-disable-next-line no-console
console.log(_.last(['one', 'two']));
