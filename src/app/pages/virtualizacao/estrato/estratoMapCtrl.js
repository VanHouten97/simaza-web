(function () {
  'use strict';

  angular.module('SIMAZE.pages.virtualizacao')
      .controller('estratoMapCtrl', estratoMapCtrl);

  /** @ngInject */
  function estratoMapCtrl($timeout) {
        var markers = [];
    	function initialize() {
    	  var mapOptions = {
    		zoom: 16,
    		center: new google.maps.LatLng(-19.203053, -44.248349),
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	  };


    	  var map = new google.maps.Map(document.getElementById('google-maps-estrato'), mapOptions);

    	  var geocoder = new google.maps.Geocoder();

    	  var princiCoords = [
    		new google.maps.LatLng(-19.161365, -44.180215),
    		new google.maps.LatLng(-19.173262, -44.174441),
    		new google.maps.LatLng(-19.174851, -44.173077),
    		new google.maps.LatLng(-19.177513, -44.168530),
    		new google.maps.LatLng(-19.177728, -44.166620),
    		new google.maps.LatLng(-19.179059, -44.165024),
    		new google.maps.LatLng(-19.179532, -44.161164),
    		new google.maps.LatLng(-19.183139, -44.155981),
    		new google.maps.LatLng(-19.184341, -44.158020),
    		new google.maps.LatLng(-19.186660, -44.156208),
    		new google.maps.LatLng(-19.188549, -44.156663),
    		new google.maps.LatLng(-19.189194, -44.157481),
    		new google.maps.LatLng(-19.186832, -44.159891),
    		new google.maps.LatLng(-19.187089, -44.160755),
    		new google.maps.LatLng(-19.189194, -44.161619),
    		new google.maps.LatLng(-19.189752, -44.162665),
    		new google.maps.LatLng(-19.188034, -44.165938),
    		new google.maps.LatLng(-19.189924, -44.167675),
    		new google.maps.LatLng(-19.196708, -44.165029),
    		new google.maps.LatLng(-19.212251, -44.163529),
    		new google.maps.LatLng(-19.216115, -44.158891),
    		new google.maps.LatLng(-19.219121, -44.157527),
    		new google.maps.LatLng(-19.220495, -44.154526),
    		new google.maps.LatLng(-19.222899, -44.154799),
    		new google.maps.LatLng(-19.223672, -44.158345),
    		new google.maps.LatLng(-19.225475, -44.160982),
    		new google.maps.LatLng(-19.228394, -44.162119),
    		new google.maps.LatLng(-19.229897, -44.161573),
    		new google.maps.LatLng(-19.230626, -44.161028),
    		new google.maps.LatLng(-19.231356, -44.156618),
    		new google.maps.LatLng(-19.230111, -44.154890),
    		new google.maps.LatLng(-19.230584, -44.152753),
    		new google.maps.LatLng(-19.234447, -44.149252),
    		new google.maps.LatLng(-19.237667, -44.144069),
    		new google.maps.LatLng(-19.240629, -44.142932),
    		new google.maps.LatLng(-19.243162, -44.140115),
    		new google.maps.LatLng(-19.245007, -44.139613),
    		new google.maps.LatLng(-19.246081, -44.141159),
    		new google.maps.LatLng(-19.247068, -44.141068),
    		new google.maps.LatLng(-19.247454, -44.142113),
    		new google.maps.LatLng(-19.249901, -44.142105),
    		new google.maps.LatLng(-19.248785, -44.146069),
    		new google.maps.LatLng(-19.249590, -44.147864),
    		new google.maps.LatLng(-19.250532, -44.148494),
    		new google.maps.LatLng(-19.252020, -44.147311),
    		new google.maps.LatLng(-19.252813, -44.149335),
    		new google.maps.LatLng(-19.253805, -44.149755),
    		new google.maps.LatLng(-19.254797, -44.147601),
    		new google.maps.LatLng(-19.256037, -44.147181),
    		new google.maps.LatLng(-19.257128, -44.148757),
    		new google.maps.LatLng(-19.259012, -44.149230),
    		new google.maps.LatLng(-19.258563, -44.151090),
    		new google.maps.LatLng(-19.259175, -44.152496),
    		new google.maps.LatLng(-19.263616, -44.154659),
    		new google.maps.LatLng(-19.267868, -44.155344),
    		new google.maps.LatLng(-19.270357, -44.157072),
    		new google.maps.LatLng(-19.272246, -44.157343),
    		new google.maps.LatLng(-19.277181, -44.160118),
    		new google.maps.LatLng(-19.286786, -44.160391),
    		new google.maps.LatLng(-19.286537, -44.162937),
    		new google.maps.LatLng(-19.291944, -44.161892),
    		new google.maps.LatLng(-19.295635, -44.176032),
    		new google.maps.LatLng(-19.296193, -44.180170),
    		new google.maps.LatLng(-19.295892, -44.190263),
    		new google.maps.LatLng(-19.299797, -44.194173),
    		new google.maps.LatLng(-19.301219, -44.197447),
    		new google.maps.LatLng(-19.302587, -44.205404),
    		new google.maps.LatLng(-19.302758, -44.209951),
    		new google.maps.LatLng(-19.306706, -44.227001),
    		new google.maps.LatLng(-19.307607, -44.234958),
    		new google.maps.LatLng(-19.310697, -44.240459),
    		new google.maps.LatLng(-19.314816, -44.251462),
    		new google.maps.LatLng(-19.327645, -44.258282),
    		new google.maps.LatLng(-19.332364, -44.261783),
    		new google.maps.LatLng(-19.333995, -44.265102),
    		new google.maps.LatLng(-19.337899, -44.267512),
    		new google.maps.LatLng(-19.338843, -44.268785),
    		new google.maps.LatLng(-19.340087, -44.272313),
    		new google.maps.LatLng(-19.336912, -44.273195),
    		new google.maps.LatLng(-19.332836, -44.272240),
    		new google.maps.LatLng(-19.327173, -44.273195),
    		new google.maps.LatLng(-19.326830, -44.272241),
    		new google.maps.LatLng(-19.324041, -44.271241),
    		new google.maps.LatLng(-19.321939, -44.265511),
    		new google.maps.LatLng(-19.315096, -44.264586),
    		new google.maps.LatLng(-19.314452, -44.265210),
    		new google.maps.LatLng(-19.312816, -44.262590),
    		new google.maps.LatLng(-19.311725, -44.262012),
    		new google.maps.LatLng(-19.309147, -44.263010),
    		new google.maps.LatLng(-19.307957, -44.264638),
    		new google.maps.LatLng(-19.307858, -44.265742),
    		new google.maps.LatLng(-19.307015, -44.265742),
    		new google.maps.LatLng(-19.302256, -44.261697),
    		new google.maps.LatLng(-19.301213, -44.259543),
    		new google.maps.LatLng(-19.301611, -44.258545),
    		new google.maps.LatLng(-19.297149, -44.253292),
    		new google.maps.LatLng(-19.293679, -44.253502),
    		new google.maps.LatLng(-19.290952, -44.252346),
    		new google.maps.LatLng(-19.285300, -44.253239),
    		new google.maps.LatLng(-19.284605, -44.252084),
    		new google.maps.LatLng(-19.282225, -44.251926),
    		new google.maps.LatLng(-19.281432, -44.251191),
    		new google.maps.LatLng(-19.281382, -44.249142),
    		new google.maps.LatLng(-19.280490, -44.248406),
    		new google.maps.LatLng(-19.279499, -44.248879),
    		new google.maps.LatLng(-19.276870, -44.247461),
    		new google.maps.LatLng(-19.272437, -44.247251),
    		new google.maps.LatLng(-19.270523, -44.243731),
    		new google.maps.LatLng(-19.267563, -44.242980),
    		new google.maps.LatLng(-19.266228, -44.241434),
    		new google.maps.LatLng(-19.264662, -44.242715),
    		new google.maps.LatLng(-19.264644, -44.245416),
    		new google.maps.LatLng(-19.263518, -44.245940),
    		new google.maps.LatLng(-19.263509, -44.245837),
    		new google.maps.LatLng(-19.258353, -44.245633),
    		new google.maps.LatLng(-19.255704, -44.250073),
    		new google.maps.LatLng(-19.258835, -44.252880),
    		new google.maps.LatLng(-19.259992, -44.253084),
    		new google.maps.LatLng(-19.259659, -44.254258),
    		new google.maps.LatLng(-19.261871, -44.256695),
    		new google.maps.LatLng(-19.257342, -44.262832),
    		new google.maps.LatLng(-19.259270, -44.263750),
    		new google.maps.LatLng(-19.251753, -44.268905),
    		new google.maps.LatLng(-19.250500, -44.275080),
    		new google.maps.LatLng(-19.250789, -44.275948),
    		new google.maps.LatLng(-19.251849, -44.276713),
    		new google.maps.LatLng(-19.252042, -44.286847),
    		new google.maps.LatLng(-19.250500, -44.285756),
    		new google.maps.LatLng(-19.251753, -44.286900),
    		new google.maps.LatLng(-19.250307, -44.289574),
    		new google.maps.LatLng(-19.248042, -44.290034),
    		new google.maps.LatLng(-19.246311, -44.291273),
    		new google.maps.LatLng(-19.247575, -44.292810),
    		new google.maps.LatLng(-19.247162, -44.295537),
    		new google.maps.LatLng(-19.246264, -44.297620),
    		new google.maps.LatLng(-19.242987, -44.298711),
    		new google.maps.LatLng(-19.240834, -44.298215),
    		new google.maps.LatLng(-19.238349, -44.298760),
    		new google.maps.LatLng(-19.235918, -44.301090),
    		new google.maps.LatLng(-19.233531, -44.301041),
    		new google.maps.LatLng(-19.227726, -44.299256),
    		new google.maps.LatLng(-19.216115, -44.298413),
    		new google.maps.LatLng(-19.214944, -44.296281),
    		new google.maps.LatLng(-19.214804, -44.292314),
    		new google.maps.LatLng(-19.212697, -44.289885),
    		new google.maps.LatLng(-19.208015, -44.287406),
    		new google.maps.LatLng(-19.206375, -44.283152),
    		new google.maps.LatLng(-19.206193, -44.279877),
    		new google.maps.LatLng(-19.204419, -44.278384),
    		new google.maps.LatLng(-19.201871, -44.277950),
    		new google.maps.LatLng(-19.199733, -44.279299),
    		new google.maps.LatLng(-19.196321, -44.279877),
    		new google.maps.LatLng(-19.194729, -44.279491),
    		new google.maps.LatLng(-19.191726, -44.275060),
    		new google.maps.LatLng(-19.190374, -44.274317),
    		new google.maps.LatLng(-19.185779, -44.273787),
    		new google.maps.LatLng(-19.181684, -44.274895),
    		new google.maps.LatLng(-19.178727, -44.278990),
    		new google.maps.LatLng(-19.175588, -44.279905),
    		new google.maps.LatLng(-19.173449, -44.277786),
    		new google.maps.LatLng(-19.173267, -44.272342),
    		new google.maps.LatLng(-19.171038, -44.266369),
    		new google.maps.LatLng(-19.171129, -44.260781),
    		new google.maps.LatLng(-19.169354, -44.257554),
    		new google.maps.LatLng(-19.165987, -44.254085),
    		new google.maps.LatLng(-19.165896, -44.252833),
    		new google.maps.LatLng(-19.167352, -44.249654),
    		new google.maps.LatLng(-19.164593, -44.246159),
    		new google.maps.LatLng(-19.164376, -44.244383),
    		new google.maps.LatLng(-19.165459, -44.239629),
    		new google.maps.LatLng(-19.166449, -44.216428),
    		new google.maps.LatLng(-19.167948, -44.212075),
    		new google.maps.LatLng(-19.173737, -44.208580),
    		new google.maps.LatLng(-19.174224, -44.203826),
    		new google.maps.LatLng(-19.173142, -44.199816),
    		new google.maps.LatLng(-19.169084, -44.193686),
    		new google.maps.LatLng(-19.167839, -44.189390),
    		new google.maps.LatLng(-19.163024, -44.184062)

    	  ];

    	  var princiPolygon = new google.maps.Polygon({
    		// Coordenadas do seu objeto
    		paths: princiCoords,

    		// Cor do da linha
    		strokeColor: '#E12D93',

    		// Opacidade da linha
    		strokeOpacity: 0.8,

    		// Espessura da linha
    		strokeWeight: 4,

    		// Cor de preenchimento do objeto
    		fillColor: '#942E7C',

    		// Opacidade do preenchimento
    		fillOpacity: 0.15
    	  });

    	  // Insere o shape no mapa
    	  princiPolygon.setMap(map);

    	var estrato1 = [
    		new google.maps.LatLng(-19.195190, -44.249851),
    		new google.maps.LatLng(-19.194987, -44.247448),
    		new google.maps.LatLng(-19.201634, -44.242850),
    		new google.maps.LatLng(-19.201472, -44.245431),
    		new google.maps.LatLng(-19.198716, -44.246847),
    		new google.maps.LatLng(-19.199891, -44.250409),
    		new google.maps.LatLng(-19.198108, -44.251567)
    	];
    	var estrato2 = [
    		new google.maps.LatLng(-19.201634, -44.242855),
    		new google.maps.LatLng(-19.201472, -44.245436),
    		new google.maps.LatLng(-19.198716, -44.246853),
    		new google.maps.LatLng(-19.199891, -44.250414),
    		new google.maps.LatLng(-19.202607, -44.251653),
    		new google.maps.LatLng(-19.204268, -44.251525),
    		new google.maps.LatLng(-19.204998, -44.247491),
    		new google.maps.LatLng(-19.206335, -44.247619),
    		new google.maps.LatLng(-19.205484, -44.246031),
    		new google.maps.LatLng(-19.205687, -44.244358),
    		new google.maps.LatLng(-19.204633, -44.243929),
    		new google.maps.LatLng(-19.204187, -44.241611)
    	];
    	var estrato3 = [
    		new google.maps.LatLng(-19.204268, -44.251525),
    		new google.maps.LatLng(-19.204998, -44.247491),
    		new google.maps.LatLng(-19.206335, -44.247619),
    		new google.maps.LatLng(-19.209577, -44.247705),
    		new google.maps.LatLng(-19.210834, -44.250452),
    		new google.maps.LatLng(-19.209537, -44.253713)
    	];





    	 var princiPolygonEstrato1 = new google.maps.Polygon({
    		// Coordenadas do seu objeto
    		paths: estrato1,

    		// Cor do da linha
    		strokeColor: '#1E90FF',

    		// Opacidade da linha
    		strokeOpacity: 0.8,

    		// Espessura da linha
    		strokeWeight: 4,

    		// Cor de preenchimento do objeto
    		fillColor: '#00BFFF',

    		// Opacidade do preenchimento
    		fillOpacity: 0.4
    	  });

    	  // Insere o shape no mapa
    	  princiPolygonEstrato1.setMap(map);

    	  var princiPolygonEstrato2 = new google.maps.Polygon({
    		// Coordenadas do seu objeto
    		paths: estrato2,

    		// Cor do da linha
    		strokeColor: '#FFFF00',

    		// Opacidade da linha
    		strokeOpacity: 0.8,

    		// Espessura da linha
    		strokeWeight: 4,

    		// Cor de preenchimento do objeto
    		fillColor: '#FFD700',

    		// Opacidade do preenchimento
    		fillOpacity: 0.4
    	  });

    	  // Insere o shape no mapa
    	  princiPolygonEstrato2.setMap(map);


    	var princiPolygonEstrato3 = new google.maps.Polygon({
    		// Coordenadas do seu objeto
    		paths: estrato3,

    		// Cor do da linha
    		strokeColor: '#FF0000',

    		// Opacidade da linha
    		strokeOpacity: 0.8,

    		// Espessura da linha
    		strokeWeight: 4,

    		// Cor de preenchimento do objeto
    		fillColor: '#DC143C',

    		// Opacidade do preenchimento
    		fillOpacity: 0.4
    	  });

    	  // Insere o shape no mapa
    	  princiPolygonEstrato3.setMap(map);


    	  var latlngbounds = new google.maps.LatLngBounds();

    	var pontos = {
    						1:{ nome: "Estrato: Norte", Casas: 345, Latitude: -19.198068, Longitude: -44.248649},
    						2:{ nome: "Estrato: Centro", Casas: 298, Latitude: -19.203053, Longitude: -44.248349},
    						3:{ nome: "Estrato: Sul",  Casas: 578, Latitude: -19.206660, Longitude: -44.249851}
    					}
    		var image = {
    			url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    		};

    		jQuery.each(pontos, function(i, val) {

    			var marker = new google.maps.Marker({
    				position: new google.maps.LatLng(val.Latitude, val.Longitude),
    				title: "Agente de saúde, Prefeitura de araçai - Minas Gerais"
    			});



    		var contentString = '<div id="content">'+
    			'<div id="siteNotice">'+
    			'</div>'+
    			'<h1 id="firstHeading" class="firstHeading">' + val.nome + '</h1>' +
    			'<div id="bodyContent">'+ '<p> Quantidade de Residências: <strong>' +  val.Casas +  '</strong>.</p><br />' +
    			'</div>';

    		var infowindow = new google.maps.InfoWindow({
    		  content: contentString
    		});
    			marker.addListener('click', function() {
    			  infowindow.open(map, marker);
    			});

    			markers.push(marker);

    			latlngbounds.extend(marker.position);

    		});

    		var markerCluster = new MarkerClusterer(map, markers,
    			{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


    	}

        $timeout(function(){
          initialize();
        }, 100);
  }
})();
