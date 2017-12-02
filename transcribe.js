var fromHebrew = new Map();
//Only put consonants in this table.
fromHebrew.set('א', 'aleph');
fromHebrew.set('ב', 'bet');
fromHebrew.set('ג', 'gimel');
fromHebrew.set('ד', 'dalat');
fromHebrew.set('ה', 'he');
fromHebrew.set('ו', 'waw');
fromHebrew.set('ז', 'zayin');
fromHebrew.set('ח', 'het');
fromHebrew.set('ט', 'tet');
fromHebrew.set('י', 'yod');
fromHebrew.set('כ', 'kaf');
fromHebrew.set('ך', 'kaf');
fromHebrew.set('ל', 'lamed');
fromHebrew.set('מ', 'mem');
fromHebrew.set('ם', 'mem');
fromHebrew.set('נ', 'nun');
fromHebrew.set('ן', 'nun');
fromHebrew.set('ס', 'samekh');
fromHebrew.set('ע', 'ayin');
fromHebrew.set('פ', 'pe');
fromHebrew.set('צ', 'tsadi');
fromHebrew.set('ץ', 'tsadi');
fromHebrew.set('ק', 'qof');
fromHebrew.set('ר', 'resh');
fromHebrew.set('ש', 'shin');
fromHebrew.set('ת', 'tav');

var fromArabic = new Map();
fromArabic.set('ء', 'aleph');
fromArabic.set('ب', 'bet');
fromArabic.set('ج', 'gimel');
fromArabic.set('د', 'dalat');
fromArabic.set('ه', 'he');
fromArabic.set('و', 'waw');
fromArabic.set('ز', 'zayin');
fromArabic.set('ذ', 'dhalat');
fromArabic.set('ح', 'het');
fromArabic.set('خ', 'kha');
fromArabic.set('ط', 'tet');
fromArabic.set('ي', 'yod');
fromArabic.set('ك', 'kaf');
fromArabic.set('ل', 'lamed');
fromArabic.set('م', 'mem');
fromArabic.set('ن', 'nun');
fromArabic.set('ع', 'ayin');
fromArabic.set('غ', 'ghayn');
fromArabic.set('ف', 'pe');
fromArabic.set('ص', 'tsadi');
fromArabic.set('ض', 'daad');
fromArabic.set('ظ', 'zaa');
fromArabic.set('ق', 'qof');
fromArabic.set('ر', 'resh');
fromArabic.set('س', 'shin');
fromArabic.set('ث', 'thaa');
fromArabic.set('ش', 'sin');
fromArabic.set('ت', 'tav');
fromArabic.set('ا', 'long-a');
fromArabic.set('ى', 'long-a');
fromArabic.set('َ', 'a');
fromArabic.set('ِ', 'i');
fromArabic.set('ُ', 'u');
fromArabic.set('ّ', 'gemination');
fromArabic.set('ٰ', 'long-a'); // dagger alif

var toCommon = new Map();
toCommon.set('aleph', 'ʼ');
toCommon.set('bet', 'b');
toCommon.set('gimel', '<span class="arabic">j</span><br/><span class="hebrew">g</span>');
toCommon.set('dalat', 'd');
toCommon.set('he', 'h');
toCommon.set('waw', '<span class="arial">v<span class="arabic">v</span></span>');
toCommon.set('zayin', 'z');
toCommon.set('dhalat', '<span class="arabic">dh</span><br/><span class="hebrew">z</span>');
toCommon.set('het', '<span class="hebrew">c</span><span class="thick">h</span>');
toCommon.set('kha', 'kh');
toCommon.set('tet', '<span class="thick">t</span>');
toCommon.set('yod', 'y');
toCommon.set('kaf', 'k');
toCommon.set('lamed', 'l');
toCommon.set('mem', 'm');
toCommon.set('nun', 'n');
toCommon.set('ayin', 'ʻ');
toCommon.set('ghayn', '<span class="arabic">gh</span><br/><span class="hebrew">ʻ</span>');
toCommon.set('pe', '<span class="arabic">f</span><br/><span class="hebrew">p</span>');
toCommon.set('tsadi', '<span class="hebrew">t</span><span class="thick">s</span>');
toCommon.set('daad', '<span class="arabic thick">d</span><br/><span class="hebrew">ts</span>');
toCommon.set('zaa', '<span class="hebrew">t</span><span class="thick">z</span>');
toCommon.set('qof', '<span class="thick">k</span>');
toCommon.set('resh', 'r');
toCommon.set('samekh', 's');
toCommon.set('shin', 's<span class="hebrew">h</span>');
toCommon.set('thaa', '<span class="arabic">th</span><br/><span class="hebrew">sh</span>');
toCommon.set('sin', 's<span class="arabic">h</span>');
toCommon.set('tav', 't');
toCommon.set('feminine-noun', '<span class="diacritic">feminine noun</span>');
toCommon.set('long-a', '<span class="arabic long">a</span><br/><span class="hebrew">o</span>');
toCommon.set('long-a-or-aw-or-u', '<span class="arabic"><span class="long">a</span>/aw/u</span><br/><span class="hebrew">o</span>');
toCommon.set('long-i', '<span class="long">i</span>');
toCommon.set('long-u', '<span class="long">u</span>');
toCommon.set('a', 'a');
toCommon.set('i', 'i');
toCommon.set('u', 'u');
toCommon.set('ai', 'ay');
toCommon.set('aw', 'aw<br/><span class="hebrew">o</span>');
toCommon.set('sukoon', '<span class="english">no-vowel</span>');
toCommon.set('space', '&nbsp;');
toCommon.set('gemination', '<span class="diacritic">2</span>');
toCommon.set('affix-the', '<span class="english">the</span>');
toCommon.set('affix-and', '<span class="english">and</span>');
toCommon.set('affix-accusative', '<span class="english">acc.</span>');
toCommon.set('affix-genitive', '<span class="english">gen.</span>');
toCommon.set('affix-nominative', '<span class="english">nom.</span>');
toCommon.set('affix-unmarked-definiteness', '<span class="english">unk. def.</span>');
toCommon.set('soft', '<span class="diacritic">soft</span>');
toCommon.set('hard', '<span class="diacritic">hard</span>');

var toArabicTrans = new Map();
toArabicTrans.set('aleph', '’');
toArabicTrans.set('bet', 'b');
toArabicTrans.set('gimel', 'j');
toArabicTrans.set('dalat', 'd');
toArabicTrans.set('he', 'h');
toArabicTrans.set('waw', 'w');
toArabicTrans.set('zayin', 'z');
toArabicTrans.set('dhalat', 'dh');
toArabicTrans.set('het', '<span class="thick">h</span>');
toArabicTrans.set('kha', 'kh');
toArabicTrans.set('tet', '<span class="thick">t</span>');
toArabicTrans.set('yod', 'y');
toArabicTrans.set('kaf', 'k');
toArabicTrans.set('lamed', 'l');
toArabicTrans.set('mem', 'm');
toArabicTrans.set('nun', 'n');
toArabicTrans.set('ayin', '‘');
toArabicTrans.set('ghayn', 'gh');
toArabicTrans.set('pe', 'f');
toArabicTrans.set('tsadi', '<span class="thick">s</span>');
toArabicTrans.set('daad', '<span class="thick">d</span>');
toArabicTrans.set('zaa', '<span class="thick">z</span>');
toArabicTrans.set('qof', 'q');
toArabicTrans.set('resh', 'r');
toArabicTrans.set('samekh', 's');
toArabicTrans.set('shin', 's');
toArabicTrans.set('thaa', 'th');
toArabicTrans.set('sin', 'sh');
toArabicTrans.set('tav', 't');
toArabicTrans.set('long-a', '<span class="long">a</span>');
toArabicTrans.set('long-i', '<span class="long">i</span>');
toArabicTrans.set('long-u', '<span class="long">u</span>');
toArabicTrans.set('a', 'a');
toArabicTrans.set('i', 'i');
toArabicTrans.set('u', 'u');
toArabicTrans.set('ai', 'ay');
toArabicTrans.set('aw', 'aw');
toArabicTrans.set('sukoon', '');
toArabicTrans.set('space', ' ');
toArabicTrans.set('affix-and', 'wa');
toArabicTrans.set('affix-the', 'al-');
toArabicTrans.set('affix-accusative', 'a');
toArabicTrans.set('affix-genitive', 'i');
toArabicTrans.set('affix-nominative', 'u');
toArabicTrans.set('affix-unmarked-definiteness', 'n');

var toArabic = new Map();
toArabic.set('bet', 'ب');
toArabic.set('gimel', 'ج');
toArabic.set('dalat', 'د');
toArabic.set('he', 'ه');
toArabic.set('waw', 'و');
toArabic.set('zayin', 'ز');
toArabic.set('dhalat', 'ذ');
toArabic.set('het', 'ح');
toArabic.set('kha', 'خ');
toArabic.set('tet', 'ط');
toArabic.set('yod', 'ي');
toArabic.set('kaf', 'ك');
toArabic.set('lamed', 'ل');
toArabic.set('mem', 'م');
toArabic.set('nun', 'ن');
toArabic.set('ayin', 'ع');
toArabic.set('ghayn', 'غ');
toArabic.set('pe', 'ف');
toArabic.set('tsadi', 'ص');
toArabic.set('daad', 'ض');
toArabic.set('zaa', 'ظ');
toArabic.set('qof', 'ق');
toArabic.set('resh', 'ر');
toArabic.set('samekh', 'س');
toArabic.set('shin', 'س');
toArabic.set('thaa', 'ث');
toArabic.set('sin', 'ش');
toArabic.set('tav', 'ت');
toArabic.set('feminine-noun', 'َة');
toArabic.set('long-a', 'َا');
toArabic.set('long-i', 'ِيْ');
toArabic.set('long-u', 'ُوْ');
toArabic.set('a', 'َ');
toArabic.set('i', 'ِ');
toArabic.set('u', 'ُ');
toArabic.set('ai', 'َيْ');
toArabic.set('aw', 'َوْ');
toArabic.set('sukoon', 'ْ');
toArabic.set('space', ' ');
toArabic.set('gemination', 'ّ');
toArabic.set('affix-the', 'ٱل');
toArabic.set('affix-and', 'وَ');
toArabic.set('affix-accusative', 'َ');
toArabic.set('affix-genitive', 'ِ');
toArabic.set('affix-nominative', 'ُ');
toArabic.set('soft', '');
toArabic.set('hard', '');

var shamsiyah = new Set();
shamsiyah.add('tav');
shamsiyah.add('thaa');
shamsiyah.add('dalat');
shamsiyah.add('dhalat');
shamsiyah.add('resh');
shamsiyah.add('zayin');
shamsiyah.add('samekh');
shamsiyah.add('shin');
shamsiyah.add('sin');
shamsiyah.add('tsadi');
shamsiyah.add('daad');
shamsiyah.add('tet');
shamsiyah.add('zaa');
shamsiyah.add('nun');
shamsiyah.add('lamed');

function parseArabic(input) {
	var output = [];
	var letter, lastOutput;
	var firstConsonant = true;
	var initialAlif = false;
	var initialAlifLam = false;
	var initialWaw = false;
	input = input.normalize('NFD').trim();

	for (let i = 0; i < input.length; i++) {
		letter = input[i];

		if (lastOutput == 'long-a' || lastOutput == 'a') {
			//hamzah qata’
			if (letter == 'َ' || letter == 'ِ' || letter == 'ُ') {
				lastOutput = fromArabic.get(letter);
				output.splice(-1, 1, 'aleph', lastOutput);
				if (input[i + 1] == 'ٔ' || input[i + 1] == 'ٕ') {
					i++;
				}
				initialAlif = false;
				continue;
			} else if (letter == 'ٔ') {
				output.splice(-1, 1, 'aleph');
				initialAlif = false;
				if (input[i + 1] != 'َ' && input[i + 1] != 'ُ') {
					output.push('a');
					lastOutput = 'a';
				}
				continue;
			} else if (letter == 'ٕ') {
				output.splice(-1, 1, 'aleph');
				initialAlif = false;
				if (input[i + 1] != 'ِ') {
					output.push('i');
					lastOutput = 'i';
				}
				continue;				
			}
		}

		if (letter == 'ً') {
			//fathan
			output.push('affix-accusative')
			lastOutput = 'affix-unmarked-definiteness';
		} else if (letter == 'ٍ') {
			//kasrahan
			output.push('affix-genitive')
			lastOutput = 'affix-unmarked-definiteness';
		} else if (letter == 'ٌ') {
			//dammahan
			output.push('affix-nominative')
			lastOutput = 'affix-unmarked-definiteness';
		} else if (letter == 'ٱ' || (firstConsonant && letter == 'ا')) {
			//hamzatu l-waṣli
			if (output.length == 0) {
				lastOutput = 'i';
			} else {
				lastOutput = undefined;
			}
			initialAlif = true;
		} else if (firstConsonant && initialAlif && !initialAlifLam && letter == 'ل') {
			//Al-
			lastOutput = 'affix-the';
			initialAlifLam = true;
			if (output.length == 1 && output[0] == 'i') {
				output.pop();
			}
		} else if (letter == 'ّ') {
			//shaddah
			if (lastOutput == 'a' || lastOutput == 'i' || lastOutput == 'u') {
				output.splice(-1, 0, 'gemination');
			} else {
				output.push('gemination');
			}
			lastOutput = undefined;
		} else if (letter == ' ') {
			//space
			lastOutput = 'space';
			firstConsonant = true;
			initialAlif = false;
			initialAlifLam = false;
			initialWaw = false;
		} else if (letter == 'ـ') {
			//joiner
			lastOutput = undefined;
		} else if (letter == 'ْ') {
			//sukoon
			lastOutput = 'sukoon';
		} else if (letter == 'ة') {
			//ta marbutah
			if (output[output.length - 1] == 'a') {
				output.pop();
			}
			lastOutput = 'feminine-noun';
		} else if (firstConsonant && letter == 'و') {
			lastOutput = 'waw';
			initialWaw = true;
		} else if (firstConsonant && initialWaw && letter == 'َ') {
			output.pop();
			lastOutput = 'affix-and';
		} else {
			lastOutput = fromArabic.get(letter);
			if (lastOutput === undefined) {
				lastOutput = '?';
			}
			if (firstConsonant && lastOutput != 'a' && lastOutput != 'i' && lastOutput != 'u') {
				firstConsonant = false;
			}
		}
		if (lastOutput !== undefined) {
			output.push(lastOutput);
		}
	}

	for (let i = 1; i < output.length; i++) {
		letter = output[i];
		if (letter == 'space') {
			i++;
			continue;
		}

		prevLetter = output[i - 1];
		nextLetter = output[i + 1];
		replaced = false;

		if (letter == 'long-a' && prevLetter == 'a') {
			output.splice(i - 1, 1);
			i--;
		} else if (letter == 'yod' && nextLetter != 'a' && nextLetter != 'i' && nextLetter != 'u') {
			if (prevLetter == 'a') {
				output.splice(i - 1, 1);
				i--;
				output.splice(i, 1, 'ai');
				replaced = true;
			} else if (prevLetter != 'sukoon' && prevLetter != 'u' && prevLetter != 'nunation') {
				output.splice(i - 1, 1);
				i--;
				output.splice(i, 1, 'long-i');
				replaced = true;
			}
			if (replaced && nextLetter == 'gemination') {
				output.splice(i + 1, 1, 'yod');
			}
		} else if (letter == 'waw' && nextLetter != 'a' && nextLetter != 'i' && nextLetter != 'u') {
			if (prevLetter == 'a') {
				output.splice(i - 1, 1);
				i--;
				output.splice(i, 1, 'aw');
				replaced = true;		
			} else if (prevLetter != 'sukoon' && prevLetter != 'i' && prevLetter != 'nunation') {
				output.splice(i - 1, 1);
				i--;
				output.splice(i, 1, 'long-u');
				replaced = true;
			}
			if (replaced && nextLetter == 'gemination') {
				output.splice(i + 1, 1, 'waw');
			}
		}

		if (letter != 'space' && prevLetter == 'sukoon') {
			output.splice(i - 1, 1);
			i--;
		}
	}
	if (letter == 'sukoon') {
		output.splice(-1, 1);
	}
	return output;
}

function Transcription(transcription, process) {
	this.text = transcription;
	this.process = process;
}

function printArabicTrans(input) {
	var output = '';
	var process = [];
	var item, nextItem, prevOutput;
	for (let i = 0; i < input.length; i++) {
		item = input[i];
		if (item == 'long-a-or-aw-or-u') {
			item = 'long-a';
		}

		if (prevOutput == ' ') {
			nextItem = input[i + 1];
			if (nextItem != 'a' && nextItem != 'i' && nextItem != 'u' && nextItem != 'ai' && nextItem != 'aw') {
				if (item == 'long-a' && output.endsWith(toArabicTrans.get('a') + ' ')) {
					process.push('<span class="rule">madd</span>');
					output = output.slice(0, -2);
				} else if (item == 'yod' && output.endsWith(toArabicTrans.get('i') + ' ')) {
					process.push('<span class="rule">madd</span>');
					output = output.slice(0, -2) + toArabicTrans.get('long-i');
					prevOutput = toArabicTrans.get('yod');
					if (nextItem == 'gemination') {
						output = output + ' ';
					}
					continue;
				} else if (item == 'waw' && output.endsWith(toArabicTrans.get('u') + ' ')) {
					process.push('<span class="rule">madd</span>');
					output = output.slice(0, -2) + toArabicTrans.get('long-u');
					prevOutput = toArabicTrans.get('waw');
					if (nextItem == 'gemination') {
						output = output + ' ';
					}
					continue;
				}
			}
		}

		if (item == 'affix-the') {
			nextItem = input[i + 1];
			if (shamsiyah.has(nextItem)) {
				process.push('<span class="rule">lam shamsiyah</span>');
				if (output == '') {
					output = toArabicTrans.get('i');
					prevOutput = toArabicTrans.get('lamed');
				}
				continue;
			} else {
				process.push('<span class="rule">lam qamariyah</span>');
				if (output.endsWith(toArabicTrans.get('a') + ' ') ||
					output.endsWith(toArabicTrans.get('long-a') + ' ')
				) {
					output = output.slice(0, -1) + '<span class="invisible"> a</span>';
					prevOutput = toArabicTrans.get('lamed');
					output = output + prevOutput + ' ';
				} else if (
					output.endsWith(toArabicTrans.get('i') + ' ') ||
					output.endsWith(toArabicTrans.get('u') + ' ') ||
					output.endsWith(toArabicTrans.get('long-i') + ' ') ||
					output.endsWith(toArabicTrans.get('long-u') + ' ')
				) {
					output = output.slice(0, -1);
					prevOutput = toArabicTrans.get('lamed');
					output = output + prevOutput + ' ';
				} else {
					output = output + toArabicTrans.get('affix-the');
					prevOutput = toArabicTrans.get('lamed');
				}
				continue;
			}
		} else if (item == 'gemination') {
			//same output as previously.
			var separate =
				prevOutput == toArabicTrans.get('mem') ||
				prevOutput == toArabicTrans.get('nun') ||
				prevOutput == toArabicTrans.get('pe') ||
				prevOutput == toArabicTrans.get('thaa') ||
				prevOutput == toArabicTrans.get('samekh') ||
				prevOutput == toArabicTrans.get('shin') ||
				prevOutput == toArabicTrans.get('tsadi') ||
				prevOutput == toArabicTrans.get('sin') ||
				prevOutput == toArabicTrans.get('zayin') ||
				prevOutput == toArabicTrans.get('resh') ||
				prevOutput == toArabicTrans.get('lamed') ||
				prevOutput == toArabicTrans.get('waw');
			
			if (output.endsWith(' ' + prevOutput)) {
				if (separate) {
					output = output.slice(0, -(prevOutput.length + 1)) + prevOutput + '&#x203f;';
				} else {
					continue;
				}
			} else if (separate && output.slice(-1) != ' ' && prevOutput != toArabicTrans.get('affix-the')) {
				output = output + '<span class="no-copy-undertie"></span>';
			}
		} else if (item == 'feminine-noun') {
			if (input.length == i + 1 || input[i + 1] == 'space') {
				prevOutput = toArabicTrans.get('he');
			} else {
				prevOutput = toArabicTrans.get('tav');
			}
			output = output + toArabicTrans.get('a');
		} else if (item == 'soft' || item == 'hard') {
			//skip
		} else {
			if (item == 'long-a' || item == 'long-i' || item == 'long-u') {
				process.push('<span class="rule">madd</span>');
			}
			prevOutput = toArabicTrans.get(item);
		}
		output = output + prevOutput;
		process.push(prevOutput);
	}

	if (prevOutput == toArabicTrans.get('a') ||
		prevOutput == toArabicTrans.get('i') ||
		prevOutput == toArabicTrans.get('u')
	) {
		output = output.slice(0, -1);
		if (input[input.length - 2] == 'feminine-noun') {
			output = output.slice(0, -toArabicTrans.get('tav').length) + toArabicTrans.get('he');
		}
		process.splice(-1, 1, '<span class="rule">unoriginal sukoon</span>');
	}

	return new Transcription(output, process);
}

function parseHebrew(input) {
	var output = [];
	var letter, lastOutput, lastConsonant;
	var vcPattern = [];
	input = input.normalize('NFD').trim();

	for (let i = 0; i < input.length; i++) {
		letter = input[i];
		if (letter == 'ּ') {
			//dagesh or shuruk
			if (lastOutput == 'waw' &&
				(vcPattern.length == 1 || vcPattern[vcPattern.length - 2] == 'consonant')
			) {
				output.pop();
				lastOutput = 'long-u'
				vcPattern.splice(-1, 1, 'vowel');
			} else if (
				lastConsonant == 'bet' || lastConsonant == 'gimel' ||
				lastConsonant == 'dalat' || lastConsonant == 'kaf' ||
				lastConsonant == 'pe' || lastConsonant == 'tav'
			) {
				lastOutput = 'dagesh';
				vcPattern.push('other');
			} else {
				lastOutput = 'gemination';
				vcPattern.push('other');
			}
		} else if (letter == 'ִ') {
			//hiriq
			lastOutput = 'i';
			vcPattern.push('vowel');
		} else if (letter == 'י' && lastOutput == 'i') {
			output.pop();
			lastOutput = 'long-i'
		} else if (letter == 'ֹ') {
			//holam
			if (lastOutput == 'waw') {
				output.pop();
				vcPattern.pop();
			}
			lastOutput = 'long-a-or-aw-or-u';
			vcPattern.push('vowel');
		} else if (letter == 'ף') {
			//fe
			output.push('pe');
			lastOutput = 'soft';
			vcPattern.push('consonant', 'other');
		} else if (letter == 'ֻ') {
			//kubutz
			lastOutput = 'u';
			vcPattern.push('vowel');
		} else if (letter == 'ָ') {
			//kamatz
			//TODO Kamatz Katan
			lastOutput = 'a';
			vcPattern.push('vowel');
		} else if (letter == 'ׁ') {
			//shin dot
			continue;
		} else if (letter == 'ׂ') {
			//sin dot
			output.pop();
			lastOutput = 'sin';
		} else if (letter == ' ') {
			//space
			lastOutput = 'space';
			vcPattern.push('other');
		} else {
			//consonant
			lastOutput = fromHebrew.get(letter);
			vcPattern.push('consonant');
			lastConsonant = lastOutput;
			if (lastOutput === undefined) {
				lastOutput = '?';
			}
		}

		if ((lastOutput == 'dagesh' || lastOutput == 'gemination') &&
			vcPattern[vcPattern.length - 2] == 'vowel'
		) {
			output.splice(-1, 0, lastOutput);
			vcPattern.splice(-2, 2, 'other', 'vowel');
			lastOutput = output[output.length - 1];
		} else if (lastOutput !== undefined) {
			output.push(lastOutput);
		}
	}

	var prevVowelPos = -1;
	var found;
	for (let i = 0; i < output.length; i++) {
		if (output[i] == 'dagesh') {
			if (i < 2) {
				output[i] = 'hard';
			} else {
				found = false;
				for (let j = prevVowelPos + 1; j < i - 1; j++) {
					if (vcPattern[j] == 'consonant') {
						output[i] = 'hard';
						found = true;
						break;
					}
				}
				if (!found) {
					output[i] = 'gemination';
				}
			}
		} else if (vcPattern[i] == 'vowel') {
			prevVowelPos = i;
		}
	}
	return output;
}

function printArabic(input) {
	var item, prevItem, nextItem, toOutput;
	var output = '';
	var item;
	for (let i = 0; i < input.length; i++) {
		prevItem = input[i - 1];
		item = input[i];
		nextItem = input[i + 1];
		if (item == 'long-a-or-aw-or-u') {
			item = 'long-a';
		}
		if (nextItem == 'long-a-or-aw-or-u') {
			nextItem = 'long-a';
		}
		toOutput = undefined;

		if (item == 'aleph') {
			if (prevItem == 'space' || i == 0) {
				if (nextItem == 'a') {
					toOutput = 'أ';
					i++;
				} else if (nextItem == 'long-a') {
					toOutput = 'آ';
					i++;
				} else if (nextItem == 'i') {
					toOutput = 'إ';
					i++
				} else if (nextItem == 'long-i') {
					toOutput = 'إي';
					i++;
				} else {
					toOutput = 'أ';
				}
			}
		} else if (item == 'affix-unmarked-definiteness') {
			output = output.slice(0, -1);
			if (prevItem == 'affix-accusative') {
				toOutput = 'ً';
			} else if (prevItem == 'affix-genitive') {
				toOutput = 'ٍ';
			} else if (prevItem == 'affix-nominative') {
				toOutput = 'ٌ';
			}
		} else {
			toOutput = toArabic.get(item);
		}

		output = output + toOutput;

	}
	return output;
}

function printCommon(input) {
	var output = '';
	for (let item of input) {
		output = output + '<div class="common">' + toCommon.get(item) + '</div>';
	}
	return output;
}
