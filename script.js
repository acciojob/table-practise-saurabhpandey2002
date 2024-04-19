//your JS code here. If required.
let rows = 1;


function insert_Row() {
    let cells = 0;
  const table = document.querySelector("#sampleTable");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  rows++;


  td1.innerText = `Row${rows} cell${cells+1}`;

  td2.innerText = `Row${rows} cell${cells+2}`;

  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
}
