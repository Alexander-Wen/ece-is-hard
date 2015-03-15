var txt = ['Total Unsolicited Penetrations',
			'Total Butt Fucks',
			'Total Ass Violations',
			'Total Cactus Insertions',
			'Total Fuckings',
			'Total Pineapple Insertions',
			'Total Backdoor Smashings',
			'Total Turd Burglings',
			'Total Sausage Brownings',
			'Total Fudge Packings',
			'Total Arse Spelunkings'],
	n = txt.length,
	$course = $('#course'),
	$span,
	c = -1;

// CREATE SPANS INSIDE SPAN
for(var i=0; i<txt.length; i++) $course.append($('<span />',{text:txt[i]}));
// HIDE AND COLLECT THEM
$span = $("span", $course).hide();

(function loop(){
	c = ++c % n;
	$course.animate({width: $span.eq( c ).width() });
	$span.stop().fadeOut().eq(c).fadeIn().delay(1500).show(0, loop);
}());

$(function() {
	$('.className').css({
		'position' : 'absolute',
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$(this).width()/2,
		'margin-top' : -$(this).height()/2
	});
});
