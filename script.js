// V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

// 1.Vypište do stránky počet znaků názvu.
// 2.Vypište název filmu převedený na velká písmena.
// 3.Vypište z názvu prvních pět písmen.
// 4.Vypište z názvu posledních pět písmen.

const title = 'Hobit - Neočekávaná cesta'
document.body.innerHTML += title;
document.body.innerHTML += '<br>';
document.body.innerHTML += title.length;
document.body.innerHTML += '<br>';
document.body.innerHTML += title.toUpperCase();
document.body.innerHTML += '<br>';
document.body.innerHTML += title.slice(0, 5);
document.body.innerHTML += '<br>';
document.body.innerHTML += title.slice(title.length - 5, title.length);
document.body.innerHTML += '<br>';



// const title = "Lord of the Rings";
// document.body.innerHTML += title.length;
// document.body.innerHTML += `<br>`;
// document.body.innerHTML += title.toUpperCase();
// document.body.innerHTML += `<br>`;
// document.body.innerHTML += title.slice(0, 5);
// document.body.innerHTML += `<br>`;
// document.body.innerHTML += title.slice(title.length - 5, title.length)