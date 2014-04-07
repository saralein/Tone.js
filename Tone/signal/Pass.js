///////////////////////////////////////////////////////////////////////////////
//
//	PASS
//
//	Passes signal through
///////////////////////////////////////////////////////////////////////////////

define(["Tone/core/Tone"], function(Tone){

	Tone.Pass = function(){
		Tone.call(this);

		this.input.connect(this.output);
	}

	Tone.extend(Tone.Pass);

	return Tone.Pass;
})
