var both = new Map();

both.set('dh', '<span class="digraph">dh</span>');
both.set('H', '<span class="thick">h</span>');
both.set('ch', '<span class="digraph">ch</span>');
both.set('kh', '<span class="digraph">kh</span>');
both.set('T', '<span class="thick">t</span>');
both.set('KH', '<span class="digraph">k<span class="hebrew">h</span></span>');
both.set('AA', '<span class="ayin digraph">aa</span>');
both.set('gh', '<span class="digraph">gh</span>');
both.set('S', '<span class="thick">s</span>');
both.set('D', '<span class="thick">d</span>');
both.set('DH', '<span class="digraph thick">dh</span>');
both.set('sh', '<span class="digraph">sh</span>');
both.set('th', '<span class="digraph">th</span>');
both.set('E', '<span class="thin-e">e</span>');
both.set('eh', '<span class="tsere-trans">eh</span>');
both.set('OO', '<span class="long">-o-</span>');

both.set('v', 'b');
both.set('g-', both.get('gh'));
both.set('d-', both.get('dh'));
both.set('t-', both.get('th'));
both.set('j', 'g');
both.set('ts', both.get('S'));
both.set('-', '.');

function transcribeBoth(transcription) {
	var output = '';
	for (let i = 0; i < transcription.length; i++) {
		let items = transcription[i];
		let endOfSyllable = (i == transcription.length - 1 || transcription[i + 1][0] == '-');
		output = output + `<td colspan="${items.length}" class="english-char`;
		if (endOfSyllable && i > 0) {
			output = output + ' align-left';
		}
		output = output + '">';

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
