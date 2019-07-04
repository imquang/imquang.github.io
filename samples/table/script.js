let products = [];

$.ajax({
  url: 'data.json',
  type: 'get',
  dataType: 'json'
}).done(function (data) {
  products = data;
  renderContent();
})

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

  $('i.fas').attr('class', 'fas fa-sort');

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