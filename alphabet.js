$('.dagesh').each(function (index, element) {
	element.innerHTML = element.innerHTML[0] + 'ּ';
});

$('.color1').css('background-color', 'DarkOrange');
$('.color2').css('background-color', '#ea4335');
$('.color2a').css('background', 'linear-gradient(135deg, rgb(234, 67, 53), transparent 60%)');
$('.color3').css('background-color', '#4488f4');
$('.color4').css('background-color', '#33a855');

$('#false-faa').css('visibility', 'hidden');
$('#faa').show();

$('.color5').css('background-color', '#f3f300');

$('#soft-transliteration .arabic').hide();
$('#soft-gimel').html('g<span class="arabic overprint">ˇ</span>');

$('.make-arabic').addClass('arabic');

$('#soft-tav-trans-alt').show();
$('#soft-tav-trans').css('float', 'right');

$('#za').hide();
$('#za-alt').show();

$('#sin-shin').hide();
$('#sin').show();
$('#shin').show();

var arabicInternal = $('#arabic-internal');
var arabicInput = $('#arabic-input');
var arabicTransliteration = $('#arabic-transliteration');
var tajweed = $('#tajweed');

var hebrewInternal = $('#hebrew-internal');
var hebrewInput = $('#hebrew-input');

function addArabicTrans(internal) {
	var transcription = printArabicTrans(internal);
	arabicTransliteration.html(transcription.text);

	tajweed.html('');
	for (let item of transcription.process) {
		tajweed.append(item);
	}
}

arabicInput.on('input', function (event) {
	var input = event.target.value;
	var internal = parseArabic(input);
	arabicInternal.html(printCommon(internal));
	arabicInternal.data('common-rep', JSON.stringify(internal));

	addArabicTrans(internal);
});

$('#copy-to-arabic').on('click', function (event) {
	var json = hebrewInternal.data('common-rep');
	var internal = JSON.parse(json);
	arabicInternal.html(hebrewInternal.html());
	arabicInternal.data('common-rep', json);

	arabicInput.val(printArabic(internal));

	addArabicTrans(internal);
});

hebrewInput.on('input', function (event) {
	var input = event.target.value;
	var internal = parseHebrew(input);
	hebrewInternal.html(printCommon(internal));
	hebrewInternal.data('common-rep', JSON.stringify(internal));
});
