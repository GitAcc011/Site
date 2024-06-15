// let path = "./data/campuses.csv";
// let fileReader = new FileReader(path);

// console.log();
// campusesPrev = document.querySelector('#preview');

// data.split(/\r\n|\r|\n/)
// .forEach(function(row, index) {
//   let trow = document.createElement('tr');
  
//   row.split(/;/).forEach(function(cell) {
//     let tcell = document.createElement(index > 0 ? 'td' : 'th');
//     tcell.textContent = cell;
//     trow.appendChild(tcell);
//   });
  
//   index > 0 ? tbody.appendChild(trow) : thead.appendChild(trow);
// });


// campusesPrev.innerHTML = '';
// campusesPrev.appendChild(table);

const INPUT = document.querySelector('input[name="readable"]');
const PREVIEW = document.querySelector('#preview');
const REGEX = new RegExp('(.*?)\.(csv)$', 'i');

function handleFile(event) {
  const file = event.target.files[0];
  if (file && REGEX.test(file.name)) {
    const reader = new FileReader();
    reader.onload = (e) => renderTable(e.target.result);

    reader.readAsText(file);
  } else {
    alert('Файл не выбран либо его формат не поддерживается.');
    event.target.value = '';
  }
}
function renderTable(data) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  
  table.classList.add('table');
  
  data.split(/\r\n|\r|\n/)
    .forEach(function(row, index) {
      let trow = document.createElement('tr');
      
      row.split(/;/).forEach(function(cell) {
        let tcell = document.createElement(index > 0 ? 'td' : 'th');
        tcell.textContent = cell;
        trow.appendChild(tcell);
      });
      
      index > 0 ? tbody.appendChild(trow) : thead.appendChild(trow);
    });

  table.appendChild(thead);
  table.appendChild(tbody);
  
  PREVIEW.innerHTML = '';
  PREVIEW.appendChild(table);
}
INPUT.addEventListener('change', handleFile);