$(function() {
	$('#submit').click(function(e) {
		e.preventDefault();
		var building = $('#building').val();
		var roomNum = $('#roomNum').val();
		var floorNum = $('#floorNum').val();
		var location = $('#location').val();
		var description = $('#description').val();
		// var photo = $('#')
		console.log('here');
		$.ajax({
			url: 'song/'+title+'/'+album+'/'+artist,
			type: 'PUT',
			success: function(result) {
				$('#exRequests').html(JSON.stringify(result));
			}
		})
		return false;
	})
