'use strict';

function getElementWidth(content, padding, border) {
  const contentWitdh = Number.parseFloat(content);
  const paddingWitdh = Number.parseFloat(padding);
  const borderWitdh = Number.parseFloat(border);

  const result = contentWitdh + paddingWitdh * 2 + borderWitdh * 2;
  return result;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
