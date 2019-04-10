var tbody = document.getElementsByTagName('tbody')[0];
var mainRow = document.getElementById('headRow');
var xml = new XMLHttpRequest();

xml.open('GET', 'https://mysafeinfo.com/api/data?list=bestnovels7&format=json&abbreviate=false&case=default&token=Z4q5YFmLCgeNFxNsAG7PF7IsL25qXjV0');
xml.addEventListener('readystatechange',function () {
  if (xml.readyState === 4 && xml.status === 200) {
    displayTable();
  }
})
xml.send();

function displayTable() {
  var data = JSON.parse(xml.responseText);
  var text1 = '';
  var first = data[0];
  for (prop in first) {
    text1 += '<th>'+prop+'</th>'
  }
  mainRow.innerHTML = text1;
  var text = '';
  for (var i = 0; i < data.length; i++) {
  text += '<tr>';
  for(prop in data[i]) {
    text += '<td>'+data[i][prop]+'</td>'
  }
  text += '</tr>';
  }
  tbody.innerHTML = text;
}
