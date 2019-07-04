let products = [
  {
    th: 'nokia105.jpg',
    name: 'Điện thoại Nokia 105 Single Sim (2017)',
    id: 'MS001',
    price: 327000,
    quantity: 1
  },
  {
    th: 'nokia8110.jpg',
    name: 'Điện thoại Nokia 8110 4G	',
    id: 'MS002',
    price: 660000,
    quantity: 3
  },
  {
    th: 'nokia106.jpg',
    name: 'Điện thoại Nokia 106 Dual Sim	',
    id: 'MS003',
    price: 368000,
    quantity: 2
  },
  {
    th: 'nokia150.jpg',
    name: 'Điện thoại Nokia 150 Dual Sim',
    id: 'MS004',
    price: 589000,
    quantity: 4
  },
  {
    th: 'nokia3310.jpg',
    name: 'Điện thoại Nokia 3310 Dual Sim	',
    id: 'MS005',
    price: 890000,
    quantity: 5
  }
];

function sumPrice() {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price * products[i].quantity;
  }
  return sum;
}

function renderContent() {
  let content = '';
  for (let i = 0; i < products.length; i++) {
    content += `<tbody>
      <tr class="_ro">
        <td class="_im"><img src="images/${products[i].th}"></td>
        <td class="_na">${products[i].name}</td>
        <td class="_ms">${products[i].id}</td>
        <td class="_co">${products[i].price}</td>
        <td class="_sl">${products[i].quantity}</td>
      </tr>
    </tbody>`
  }
  document.getElementsByClassName('detail')[0].innerHTML = content;
}

function sortColumn(thElement) {
  thElement = $(thElement);
  const column = thElement.attr('data-column');
  if (thElement.attr('data-order') === 'asc') {
    thElement.attr('data-order', 'desc');
    thElement.children().addClass('fa-sort-up').removeClass('fa-sort-down');
    sortAz(column);
  } else {
    thElement.attr('data-order', 'asc');
    thElement.children().addClass('fa-sort-down').removeClass('fa-sort-up');
    sortZa(column);
  }
  renderContent()
}

function sortAz(column) {
  products.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return -1;
    if (x > y) return 1;

    return 0;
  })
}

function sortZa(column) {
  products.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return 1;
    if (x > y) return -1;

    return 0;
  })
}

renderContent();
$('#_va').text(sumPrice());