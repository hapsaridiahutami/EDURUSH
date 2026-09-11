(function () {
"use strict";

function getBank() {
if (
Array.isArray(window.EDURUSH_BANK) &&
window.EDURUSH_BANK.length
) {
return window.EDURUSH_BANK;
}

```
return [];
```

}

function loadQuestionBank() {
const bank = getBank();

```
if (!bank.length) {
  return Promise.reject(
    new Error("Bank soal kosong.")
  );
}

return Promise.resolve(bank);
```

}

function countQuestions(bank, filters = {}) {
return getQuestions(bank, {
...filters,
limit: Infinity,
}).length;
}

function getQuestions(bank, filters = {}) {
const {
jenjang,
mapel,
tipe,
limit = Infinity,
} = filters;

```
let result = Array.isArray(bank)
  ? [...bank]
  : [];

if (jenjang) {
  result = result.filter(
    (q) => q.jenjang === jenjang
  );
}

if (mapel) {
  result = result.filter(
    (q) => q.mapel === mapel
  );
}

if (tipe) {
  result = result.filter(
    (q) => q.tipe === tipe
  );
}

if (
  window.EduRush &&
  typeof EduRush.shuffle === "function"
) {
  result = EduRush.shuffle(result);
}

return result.slice(0, limit);
```

}

window.EduRushQuestions = {
loadQuestionBank,
countQuestions,
getQuestions,
};

})();
