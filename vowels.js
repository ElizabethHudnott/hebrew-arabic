$('#merge-sounds').on('click', function () {
	$('#segol-ipa').hide();
	$('#tsere-ipa').attr('colspan', '2');
	$('#tsere-ipa').html('e');
	$('#kamatz-katan-ipa').hide();
	$('#holam-ipa').attr('colspan', '2');
	$('#holam-ipa').html('o');
	$('.tsere').addClass('no-rb');
	$('.kamatz-katan').addClass('no-rb');
	$('.ipa-footnote').hide();
});

$('#lengthen-hataf').on('click', function () {
	$('.hataf').removeClass('no-tb');
	$('#vocal-shewa td').removeClass('no-bb');
	$('#short-label').attr('rowspan', '1');
	$('#short-label').removeClass('no-bb');
	$('#hataf-label').css('display', 'table-cell');
});

$('#fix-shewa').on('click', function () {
	$('#kubutz-shewa').removeClass('no-rb');
	$('#segol-shewa').removeClass('no-rb');
});
