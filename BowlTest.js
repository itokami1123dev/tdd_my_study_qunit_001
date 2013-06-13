module("Bowl Test Module A", {
	setup: function(){
		this.bowl = new Bowl();
		this.sbowl = new SuperBowl();
	}
});


test("こんにちわ",function(){
	equal( this.bowl.getName(), "bowl");	
	equal( this.sbowl.getName(), "sbowl");	

});

