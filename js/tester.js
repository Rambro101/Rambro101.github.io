$(function() {
	
	Parse.initialize("NymCupYowmx2wbMjvFUYYInwrfhzOwVdU4HceO0A", "qpEcp0ORxYP2NbtwLgbxPNT0ErhUpzcp5V1OsWFk");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
	  alert("yay! it worked");
	});

})