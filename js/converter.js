// ここからコードを書いてください
export default function setupConverter() {
  // 要素の取得
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const from = document.querySelector(".converter-from");
  const to = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  //単位データ
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  //単位初期化
  lengthUnit.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.base;
    option.text = e.name;

    from.appendChild(option.cloneNode(true));
    to.appendChild(option.cloneNode(true));
  });
  if (from.options.length > 0) {
    from.selectedIndex = 0;
  }
  if (to.options.length > 0) {
    to.selectedIndex = 1;
  }

  //変換処理
  function convert() {
    //数値以外を入力時エラー
    const inputVal = parseFloat(converterInput.value);
    if (isNaN(inputVal)) {
      result.textContent = "Please enter a valid number";
      return;
    }
    const fromBase = from.value;
    const toBase = to.value;
    const resultVal = (inputVal * fromBase) / toBase;

    result.textContent = `${inputVal} ${
      lengthUnit.find((x) => x.base == fromBase)?.name
    } = ${resultVal.toFixed(3)} ${
      lengthUnit.find((x) => x.base == toBase)?.name
    }`;
  }

  converterForm.addEventListener("input", convert);

  convert();
}
