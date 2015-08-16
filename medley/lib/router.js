Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', 
	{name :'init', 
	/*waitOn: function(){
		return [IRLibLoader.load('/p5.js'),
			IRLibLoader.load('/p5.dom.js'),
			IRLibLoader.load('/sketch.js'),
		]
	}*/});
