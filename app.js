function onOpen(e) {
	
	//The main body of the active doc
	var body = DocumentApp.getActiveDocument.getBody();

	// Use editAsText to obtain a single text element containing
 	// all the characters in the document.

 	var text = body.editAsText();

}