<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>GEOLOCALOZACIÓN</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
	<section>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<button id="encuentrame">Encuéntrame</button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 col-sm-12" id="map">
				
			</div>
		</div>
	</section>

<script async defer src="http://maps.googleapis.com/maps/api/js?key=AIzaSyD96EfGps4ayV2z_Ky4esiSPjD_eFt0PvE&callback=initMap&libraries=places"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="assets/js/app.js"></script>
</body>
</html>