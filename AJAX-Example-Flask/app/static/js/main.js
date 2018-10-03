$(document).ready(function(){

	$('form').on('submit', function(e){
		
		$.ajax({
			data : {
				name : $("#nameInput").val(),
				email : $("#emailInput").val(),
			}
			type : 'post',
			url : '/process'
		})
		.done(function(data){

			if(data.error){
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else{
				$('#successAlert').text(data.name).show();
				$('#errorAlert').text(data.error).hide();
			}
		});



		e.preventDefault();
	});
});