var both = new Map();
both.set('S', '<span class="thick">s</span>');
both.set('D', '<span class="thick">d</span>');
both.set('KH', 'k<span class="hebrew">h</span>');
both.set('AA', '<span class="ayin digraph">aa</span>');
both.set('SH', '<span class="digraph">sh</span>');
both.set('v', 'b');
both.set('eh', '<span class="tsere-trans">eh</span>');
both.set('OO', '<span class="long">-o-</span>');
both.set('-', '.');

function transcribeBoth(transcription) {
	var output = '';
	for (let items of transcription) {
		output = output + `<td colspan="${items.length}"class="english-char">`;
		for (let phone of items) {
			var html = both.get(phone);
			if (html === undefined) {
				html = phone;
			}
			output = output + html;
		}
		output = output + '</td>';
	}
	return output;
}

$('tr[data-transcribe]').each(function (index, element) {
	var jqElem = $(element);
	var cells = transcribeBoth(JSON.parse('[' + element.dataset.transcribe + ']'))
	jqElem.append(cells);
});
