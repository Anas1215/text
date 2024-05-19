const editor = document.getElementById('editor');
const toolbarButtons = document.querySelectorAll('.toolbar button');
const fontSizeSelect = document.getElementById('font-size');
const fontFamilySelect = document.getElementById('font-family');
const textColorInput = document.getElementById('text-color');


toolbarButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		switch ((link available)) {
			case 'bold':
				
				editor.value = toggleFormat(editor.value, '**');
				break;
			case 'italic':
				
				editor.value = toggleFormat(editor.value, '*');
				break;
			case 'underline':
				
				editor.value = toggleFormat(editor.value, '__');
				break;
		}
	});
});


fontSizeSelect.addEventListener('change', (event) => {
	editor.style.fontSize = ${event.target.value}px;
});

fontFamilySelect.addEventListener('change', (event) => {
	editor.style.fontFamily = event.target.value;
});


textColorInput.addEventListener('input', (event) => {
	editor.style.color = event.target.value;
});


function toggleFormat(text, format) {
	if (text.startsWith(format) && text.endsWith(format)) {
		return text.slice(format.length, -format.length);
	} else {
		return format + text + format;
	}
}