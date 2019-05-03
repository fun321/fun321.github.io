var res = [
'Spicity',
'The Cellar',
'Cabo',
'Bradens a bitch',
'Prateeks a bitch',
'Marco & Luca',
'Blacksburg No. 1',
'Souvlaki',
'Zeppollis',
'Macados',
'Greens',
'Bennys',
'Italianos',
'Taco Bell',
'El Rods',
'PKs',
'China Inn',
'DP Dough',
'Wendys',
'bdubs',
'moes',
'chipotle',
'five guys',
'ho house',
'the beast',
'aids',
'Boudreaux',
'panda express',
'zaxbys',
'tropical smoothie',
'subways',
'firehouse subs',
'waffle house',
'panera',
'mcdonalds',
'hardees',
'bojangles'
]

function newRes() {
var randomNum = Math.floor(Math.random() * (res.length));
document.getElementById('quoteDisplay').innerHTML = res[randomNum];
}