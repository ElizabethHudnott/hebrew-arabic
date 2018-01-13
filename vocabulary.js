var both = new Map();

both.set('-', '.');
both.set('dh', '<span class="digraph">dh</span>');
both.set('H', '<span class="thick">h</span>');
both.set('ch', '<span class="digraph">ch</span>');
both.set('kh', '<span class="digraph">kh</span>');
both.set('T', '<span class="thick">t</span>');
both.set('KH', '<span class="digraph">k<span class="hebrew">h</span></span>');
both.set('L', '<span class="thick">l</span>');
both.set('AA', '<span class="ayin digraph">aa</span>');
both.set('gh', '<span class="digraph">gh</span>');
both.set('S', '<span class="thick">s</span>');
both.set('D', '<span class="thick">d</span>');
both.set('DH', '<span class="digraph thick">dh</span>');
both.set('sh', '<span class="digraph">sh</span>');
both.set('th', '<span class="digraph" style="width: 0.5em">th</span>');
both.set('aai', 'a' + both.get('-') + 'ai');
both.set('OOi', 'o' + both.get('-') + 'oi');
both.set('E', '<span class="thin-e">e</span>');
both.set('e.', '<span class="thin-e">e&#x306;</span>');
both.set('eh', '<span class="tsere-trans">eh</span>');
both.set('OO', '<span class="long">-o-</span>');
both.set(' ', '<span style="display: inline-block; width: 15px;">&nbsp;</span>');

both.set('v', 'b');
both.set('g-', both.get('gh'));
both.set('d-', 'd');
both.set('D-', 'd');
both.set('t-', 't');
both.set('j', 'g');
both.set('ts', both.get('S'));
both.set('-', '.');

var hebrewOverrides = new Map();
hebrewOverrides.set('w', 'v');
hebrewOverrides.set('AA', both.get('AA'));
hebrewOverrides.set('q', 'q');

function transcribeBoth(language, transcription) {
	var output = '';
	var startOfSyllable = true;
	var endOfSyllable;
	for (let i = 0; i < transcription.length; i++) {
		let items = transcription[i];
		output = output + `<td colspan="${items.length}" class="english-char`;
		endOfSyllable = false;
		if (items[1] == 'e.') {
			output = output + ' align-left';
		} else if (startOfSyllable && i < transcription.length - 1) {
			output = output + ' align-right';
		} else {
			endOfSyllable = (
				i == transcription.length - 1 ||
				transcription[i + 1][0] == '-' ||
				transcription[i + 1][0] == ' ' ||
				items[items.length - 1] == '-'
			);
			if (endOfSyllable && i > 0) {
				output = output + ' align-left';
			}
		}
		output = output + '"';
		output = output + '>';

		for (let phone of items) {
			var html = undefined;
			if (language == 'hebrew') {
				html = hebrewOverrides.get(phone);
			}
			if (html === undefined) {
				html = both.get(phone);
			}
			if (html === undefined) {
				html = phone;
			}
			output = output + html;
			startOfSyllable = (phone == '-' || phone == ' ');
		}
		output = output + '</td>';
	}
	return output;
}

function transcribePage() {
	$('tr[data-transcribe]').each(function (index, element) {
		var jqElem = $(element);
		var word = jqElem.children('.hebrew-char, .arabic-char');
		var language;
		if (word.hasClass('hebrew-char')) {
			language = 'hebrew';
		} else {
			language = 'arabic'
		}
		jqElem.children('.english-char').remove();
		var phones = JSON.parse('[' + element.dataset.transcribe + ']');
		var cells = transcribeBoth(language, phones)
		jqElem.append(cells);
	});
}

/* Options implemented:
 *		vet, gimel, jim, gimelWithoutDagesh, dhalet, tawWithoutDagesh, waw, tsade, qof, qaf
*/
function transcribeOption(optionName, value) {
	if (optionName == 'vet') {
		both.set('v', value);
	} else if (optionName == 'gimel') {
		both.set('g', value);
	} else if (optionName == 'jim') {
		both.set('j', value);
	} else if (optionName == 'gimelWithoutDagesh') {
		if (value == 'gh') {
			both.set('g-', both.get('gh'));
		} else {
			both.set('g-', 'g');
		}
	} else if (optionName == 'dhalet') {
		if (value == 'alwaysDh') {
			both.set('d-', both.get('dh'));
			both.set('D-', both.get('dh'));			
		} else if (value == 'sometimesDh') {
			both.set('d-', 'd');
			both.set('D-', both.get('dh'));
		} else {
			both.set('d-', 'd');
			both.set('D-', 'd');
		}
	} else if (optionName == 'tawWithoutDagesh') {
		if (value.length > 1) {
			both.set('t-', both.get(value));
		} else {
			both.set('t-', value);
		}
	} else if (optionName == 'waw') {
		hebrewOverrides.set('w', value);
	} else if (optionName == 'ayin') {
		if (value == 'AA') {
			hebrewOverrides.set('AA', '<span class="ayin digraph">aa</span>');
		} else if (value == 'ʼ') {
			hebrewOverrides.set('AA', both.get('ʼ'));
		} else {
			hebrewOverrides.set('AA', value);
		}
	} else if (optionName == 'ayn') {
		if (value == 'AA') {
			both.set('AA', '<span class="ayin digraph">aa</span>');
		} else {
			both.set('AA', 'ʻ');
		}		
	} else if (optionName == 'tsade') {
		if (value == 'S') {
			both.set('ts', both.get('S'));
		} else {
			both.set('ts', `<span class="digraph" style="width: 0.5em;">${value}</span>`);
		}
	} else if (optionName == 'dhaal') {
		if (value == "DH") {
			both.set('DH', '<span class="digraph thick">dh</span>');
		} else {
			both.set('DH', '<span class="digraph thick">z</span>');
		}
	} else if (optionName == 'qof') {
		if (value == 'K') {
			hebrewOverrides.set('q', '<span class="thick">k</span>');
		} else {
			hebrewOverrides.set('q', value);
		}
	} else if (optionName == 'qaf') {
		if (value == 'K') {
			both.set('q', '<span class="thick">k</span>');
		} else {
			both.set('q', 'q');
		}
	}
}

function addTranscribeOptions(optionNames) {
	function makeOption(optionName) {
		return function (event) {
			transcribeOption(optionName, event.target.value);
			transcribePage();
		}
	}
	for (let optionName of optionNames) {
		$(`#option-${optionName}`).on('change', makeOption(optionName));
	}
}

addTranscribeOptions([
	'vet',
	'gimel', 'jim',
	'gimelWithoutDagesh',
	'dhalet',
	'tawWithoutDagesh',
	'waw',
	'ayin', 'ayn',
	'tsade', 'dhaal',
	'qof', 'qaf'
]);

transcribePage();