var $radial = $('.progress-radial');

setInterval(function(){
  	var currentClass = $radial.attr('class').split(' ')[1];
  	var currentPercentage = currentClass.substring(9,12);
  	var newPercentage = (parseInt(currentPercentage) + 1);
  	if (newPercentage > 100) {
	    newPercentage = 1;
  	}
    var newClass = 'progress-' + newPercentage;
  	$radial.removeClass(currentClass).addClass(newClass);
},1000);