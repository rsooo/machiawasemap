var map;

  // 初期化。bodyのonloadでinit()を指定することで呼び出してます

  /*
  function init() {
     // (1) Google Mapで利用する初期設定用の変数
    var latlng = new google.maps.LatLng(39, 138);
    var opts = {
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: latlng
    };

      // (2) Mapオブジェクトの生成
      // getElementById("map")の"map"は、body内の<div id="map">より
      map = new google.maps.Map(document.getElementById("map"), opts);
         window.alert("init");
     $('map').live('pageshow',function(){
             google.maps.event.trigger(map, 'resize');
             map.setCenter(Latlng);
     });


  }
  */

     // getCurrentPositionで行われる処理を記述
     function handleGeolocation(position) {

     // 位置情報を取得
         var latlng = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);

      // ふきだしで表示する文字列を設定
         var str = "W3C Geolocationを利用して取得した位置情報";

         showInfoWindow(latlng, str);
     }

      // ふきだしの位置と中身を設定
      function showInfoWindow(latlng, str) {
        // 地図の中心位置を設定
        map.setCenter(latlng);

        // ふきだしの中身と位置を設定
        infowindow.setContent(str);
        infowindow.setPosition(latlng);
        infowindow.open(map);
      }

      // エラーの内容を表示。getCurrentPosition失敗時に呼び出されます
      function handleNoGeolocation(err) {
            var errCodeStr;

            // エラー内容を示す文字列を用意。
            // エラーコード解説用なので必ずしも必要ではありません。
            if (err.code == 0) {
              errCodeStr = "UNKNOWN_ERROR";
            } else if (err.code == 1) {
              errCodeStr = "PERMISSION_DENIED";
            } else if (err.code == 2) {
              errCodeStr = "POSITION_UNAVAILABLE";
            } else if (err.code == 3) {
              errCodeStr = "TIMEOUT";
            } else {
              errCodeStr = "想定外";
            }

            var errStr = "失敗 [" + err.code + "] " + errCodeStr;

            // 失敗内容をふきだしで表示。位置はいい加減。
            showInfoWindow(new google.maps.LatLng(37, 143), errStr);
      }

$(function() {
    var latlng = new google.maps.LatLng(35.69167,139.700211);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var marker = new google.maps.Marker({
        position:latlng,
        map: map,
        title: 'test marker'

    });

    var infowindow = new google.maps.InfoWindow({
       content: 'fukidasi'
    });


      // W3C Geolocationを使う
     if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleGeolocation, handleNoGeolocation);

      } else {
        alert("W3C Geolocationがありません");
      }


/*
    google.maps.event.addListener(marker, 'click', function(){
       map.setZoom(8);
       map.setCenter(marker.getPosition());
       infowindow.open(map, marker);
    });
*/
    $('#map_content').live('pageshow',function(){
        google.maps.event.trigger(map, 'resize');
        map.setCenter(Latlng);
    });
});