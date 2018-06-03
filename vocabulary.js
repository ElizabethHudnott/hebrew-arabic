var both = new Map();

//Punctuation
both.set('-', '.'); //Syllable break
both.set(' ', '<span style="display: inline-block; width: 15px;">&nbsp;</span>'); //Space

//Diagraphs
both.set('dh', '<span class="digraph">dh</span>');
both.set('kh', '<span class="digraph">kh</span>');
both.set('AA', '<span class="ayin digraph">aa</span>');
both.set('gh', '<span class="digraph">gh</span>');
both.set('sh', '<span class="digraph">sh</span>');
both.set('th', '<span class="digraph" style="width: 0.5em">th</span>');

//Heavy letters distinguished using different formatting
both.set('H', '<span class="thick">h</span>');
both.set('T', '<span class="thick">t</span>');
both.set('L', '<span class="thick">l</span>');
both.set('S', '<span class="thick">s</span>');
both.set('D', '<span class="thick">d</span>');
both.set('DH', '<span class="digraph thick">dh</span>');

//Very short vowels
both.set('e.', '');
//both.set('e.', '<span class="thin-e">e&#x306;</span>');

//Typographical variants
both.set('E', '<span class="thin-e">e</span>'); //Squished e

//Long vowels
both.set('aa', 'aa');
both.set('eh', '<span class="tsere-trans">eh</span>');
both.set('ee', 'ee');
both.set('OO', '<span class="long">-o-</span>');
both.set('oo', 'oo');

//Diphthongs
both.set('ai', 'ai');
both.set('oi', 'oi');
both.set('ui', 'ui');
both.set('aai', 'a.' + both.get('ai'));
both.set('OOi', 'o.' + both.get('oi'));
both.set('ooi', 'oo.i');

//Begadkefat letters
both.set('KH', '<span class="digraph">kh</span>');

var hebrewOverrides = new Map();
//Post-Biblical consonant pronunciation changes.
hebrewOverrides.set('kh', both.get('H')); // Merged

function transcribeBoth(language, transcription) {
	var output = '';
	var startOfSyllable = true;
	var shva = false;
	var endOfSyllable, phone;
	for (let i = 0; i < transcription.length; i++) {
		let items = transcription[i];
		if ((phone === undefined || (phone === ' ' && language !== 'arabic')) &&
			items[0] === 'ʼ'
		) {
			items.shift();
		}
		output = output + `<td colspan="${items.length}" class="english-char`;
		endOfSyllable = false;
		if (startOfSyllable && i < transcription.length - 1) {
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
		output = output + '">';

		for (phone of items) {
			var html = undefined;
			if (language == 'hebrew') {
				html = hebrewOverrides.get(phone);
			}
			if (html === undefined &&
				(language !== undefined || phone === '-' || phone.length > 1 || phone != phone.toLowerCase())
			) {
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
		} else if (word.hasClass('arabic-char')) {
			language = 'arabic'
		}
		jqElem.children('.english-char').remove();
		var phones = JSON.parse('[' + element.dataset.transcribe + ']');
		var cells = transcribeBoth(language, phones)
		jqElem.append(cells);
	});
}

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
		if (value == 'dh') {
			both.set('d-', both.get('dh'));
		} else {
			both.set('d-', 'd');
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
			hebrewOverrides.set('S', both.get('S'));
		} else {
			hebrewOverrides.set('S', `<span class="digraph" style="width: 0.5em;">${value}</span>`);
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

function setOption(optionName, value) {
	$(`#option-${optionName}`).val(value);
	transcribeOption(optionName, value);
}

addTranscribeOptions([
	'vet',
	'gimel', 'gimelWithoutDagesh', 'jim',
	'dhalet',
	'tawWithoutDagesh',
	'waw',
	'ayin', 'ayn',
	'tsade', 'dhaal',
	'qof', 'qaf'
]);

setOption('vet', 'b');
setOption('gimel', 'g');
setOption('gimelWithoutDagesh', 'gh')
setOption('jim', 'j');
setOption('dhalet', 'd');
setOption('tawWithoutDagesh', 't');
setOption('waw', 'v');
setOption('ayin', 'AA');
setOption('ayn', 'AA');
setOption('tsade', 'S');
setOption('dhaal', 'DH');
setOption('qof', 'q');
setOption('qaf', 'q');

transcribePage();
