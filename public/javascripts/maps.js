var map;

  // 初期化。bodyのonloadでinit()を指定することで呼び出してます
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

$(function() {
    var latlng = new google.maps.LatLng(35.69167,139.700211);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var marker = new google.maps.Marker({
        position:latlng,
        map: map,
        title: 'test marker'

    });

    var infowindow = new google.maps.InfoWindow({
       content: 'fukidasi'
    });

    google.maps.event.addListener(marker, 'click', function(){
       map.setZoom(8);
       map.setCenter(marker.getPosition());
       infowindow.open(map, marker);
    });

    $('#map_content').live('pageshow',function(){
        google.maps.event.trigger(map, 'resize');
        map.setCenter(Latlng);
    });
});