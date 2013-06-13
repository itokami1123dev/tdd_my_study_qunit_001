var Bowl = (function(){
	
	var Bowl = function(){
		this.name="bowl";
		
		console.log('hello');
		//this.init.apply( this, arguments);
		//this.init.apply( this, arguments);
	};

	var p= Bowl.prototype;

	p.init=function(){
		return this;
	};

	p.getName=function(){
		return this.name;
	};

	return Bowl;
})();

var SuperBowl = (function(){

	var SuperBowl = function(){
		Bowl.call( this);
		this.superName = this.name;

		this.name="sbowl";
	};

	SuperBowl.prototype =new Bowl();
	

	return SuperBowl;
	
	// this.superName=this.name;
	// this.name="superBowl";

	// this.init();
})();

