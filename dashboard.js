//USER = user
function request(url)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            return JSON.parse(xhr.responseText);                       
        }
    };
}

$(document).ready(function() {
    
   var getExchanges = request('http://cors.io/?http://35.156.51.182:8000/sphoin/crypto/user/exchanges/');
   console.log(getExchanges);
   //var getExchanges = ['FXCM', 'BINANCE'];
   // data to populate first selector + FXCM
   $('.select-exchange').select2({
        placeholder: "Select exchange",
        data: getExchanges
        //data from getExchanges
    });
    $('.select-COIN1').select2();
    $('.select-COIN2').select2();
    $('.select-interval').select2();
});



$('#select-exchange').on('select2:select', function (e) {
    // alert(Cookies.get('user'));
   //---data from routes---
   if (e.params.data.text == 'FXCM') {
    var getFxcmCoins = 'http://35.156.51.182:8000/sphoin/fxcm/USER/basecoin/';
    var getFxcmIntervals = 'http://35.156.51.182:8000/sphoin/fxcm/USER/intervals/';
    var fxcm_coin1 = ['FCOIN1', 'FCOIN2'];
    var fxcm_coin2 = ['FCOIN3', 'FCOIN4'];
    var fxcm_interval = ['FXCMINTERVAL1','FXCMINTERVAL2'];
    /* get data fxcm coins
       intervals   
    */
   $('.select-COIN1').empty();
   $(".select-COIN1").select2({
    data: fxcm_coin1 // result from exchanges
  })
  $('.select-COIN2').empty();
  $(".select-COIN2").select2({
    data: fxcm_coin2 // result from exchanges
  })
  $('.select-interval').empty();
  $('.select-interval').select2({
      data: fxcm_interval //result from interval 
  });
  
 }
   else {
    var getCryptoCoins = 'http://35.156.51.182:8000/sphoin/crypto/USER/EXCHANGE/basecoin/'; // get data from this url BINANCE = EXCHANGE
    var getCryptoIntervals = 'http://35.156.51.182:8000/sphoin/crypto/USER/intervals/';
    var crypto_interval = ['CRYPTOINTERVAL1', 'CRYPTOINTERVAL2'];
    var crypto_coin1 = ['BTC1', 'ETH1'];
    var crypto_coin2 = ['BTC2', 'ETH2'];
    /* get data crypto_coin1
       crypto_coin2
       crypto_interval     
    */
    $('.select-COIN1').empty();
    $(".select-COIN1").select2({
        data: crypto_coin1 //result from exchanges
      })

    $('.select-COIN2').empty();
    $(".select-COIN2").select2({
    data: crypto_coin2 //result from exchanges
    })

    $('.select-interval').empty();
    $('.select-interval').select2({
        data: crypto_interval // result from intervals
    });
    // .4  /sphoin/crypto/USER/EXCHANGE/COIN1/COIN2/INTERVAL/
    // sau /sphoin/fxcm/USER/COIN1/COIN2/INTERVAL/
    // BINANCE nume de exchange
    // EXCHANGE  nume de magazin
   }
});