var txt = ['Total Posterior Porcupine Invasions',
			'Total Unsolicited Penetrations',
			'Total Butt Fucks',
			'Total Ass Violations',
			'Total Cactus Insertions',
			'Total Fuckings',
			'Total Anal Pufferfish Infiltrations',
			'Total Pineapple Insertions',
			'Total Backdoor Smashings',
			'Total Exit Doors Entered',
			'Total Turd Burglings',
			'Total Sausage Brownings',
			'Total Backdoor Sonic Screwings',
			'Total Fudge Packings',
			'Total Reverse Dumps',
			'Total Arse Spelunkings',
			'Total Pineapple Penetrations'],
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
