const wtf = require('./src/index');
// const wtf = require('./builds/wtf_wikipedia.min');
// const readFile = require('./tests/lib/_cachedPage');
// const wtf = require('./builds/wtf_wikipedia');
// const wtf = require('./build');

// (async () => {
//   var doc = await wtf.fetch('Template:2014 Stanley Cup playoffs');
//   // var doc = await wtf.random();
//   console.log(doc.templates());
// })();

// let doc = readFile('BBDO');
// console.log(doc.infoboxes(0).data);

// wtf.fetch('Taylor%20Swift', 'en', {
//   'Api-User-Agent': 'obfuscated@gmail.com'
// }).then(docList => {
//   console.warn(docList);
// });

// let doc = wtf('{{some_template|link=[https://google.com google]}}');
let str = `[[File:Volkswagen W12.jpg|thumb|upright|[[Volkswagen Group]] W12 engine from the [[Volkswagen Phaeton|Volkswagen Phaeton W12]]]]`;
let doc = wtf(str);
console.log(doc.images(0).json());
// console.log(wtf.version);

// console.log(doc.templates(0).rounds[0]);
// console.log(doc.tables(0).keyValue());
// console.log(doc.images(0).json());
// console.log(wtf(str).sections('roster').templates('mlbplayer'));
// console.log(doc.text());
// Alan Bean marriage template
