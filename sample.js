<!--

function sampleFunction() {
  var text = document.getElementById('text').value;

  if (text == null || text == '') {
    // do something
    alert(`値を入力してください`);

  } else {
    if (!isNaN(text)) {
      alert(`入力された数値は${text}です。`);

    } else {
      alert(`入力された文字列は${text}です。`);
    }
  }
}

function sampleAPIFunction() {

  var result = document.getElementById("result");
  var request = new XMLHttpRequest();

  request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true);
  request.responseType = 'json';

  request.onload = function() {
    var data = this.response;
    console.log(data);

    var title = `${data.chartName} <br> ${data.disclaimer} <br><br>`;
    var time = `updated time :: ${data.time.updated} <br><br>`;
    var text = `${data.bpi.EUR.description} / ${data.bpi.EUR.rate}`;

    result.innerHTML = title + time + text;

  };

  request.send();

}

-->
