"use strict";

/** Bring on a real test-runner */
const Mocha = require("mocha");
const Chai  = require("chai");
Chai.should();


/** Check if an element contains one or more CSS classes */
Chai.Assertion.addMethod("class", function(classNames){
	const subject   = Chai.util.flag(this, "object");
	const classList = subject.classList;
	
	if(!Array.isArray(classNames))
		classNames = classNames.split(/\s+/g);
	
	for(let name of classNames){
		this.assert(
			classList.contains(name),
			"expected classList '" + subject.className + "' to include #{exp}",
			"expected classList '" + subject.className + "' not to include #{exp}",
			name
		);
	}
});


/** Connect with Atom */
module.exports = require("./lib/main.js");
