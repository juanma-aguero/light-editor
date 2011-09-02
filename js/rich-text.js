
function setMode(mode){
	var textSelected = getSelectedText(mode);
	if(textSelected.length > 0 ){
		$('#rich-text-area').val( textSelected);
		$('#rich-text-area').keyup();
	}else{
		$('#rich-text-area').val( $('#rich-text-area').val()+'<'+mode+'></'+mode+'>' );
	}
}

$(document).ready(function(){
	$('#rich-text-area').keyup(function(){
		$('#rich-text-div').html($('#rich-text-area').val());
	});
});


function getSelectedText(mode) {
    if (window.getSelection) {
		var e = $('#rich-text-area').get(0);
		var text = e.value.substring(e.selectionStart, e.selectionEnd);
		return e.value.substring(0,e.selectionStart) + '<'+mode+'>' + text + '</'+mode+'>' + e.value.substring(e.selectionEnd, e.value.length);
    }
    else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}