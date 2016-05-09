(function($,window){

	var inject = function(button, godhand) {
		move(button);
	};

	var init = function() {
		$('body').append('<div id="godhand_btn" ></div><div id="godhand">text</div>');
		var button = $('#godhand_btn');
		var godhand = $('#godhand');

		inject(button, godhand);
	};

	// var rules = [{
	// 	url:[\(http|https):\/\/\detail\.tmall\.com\\item.htm.+\],

	// }];

	//ready
	$(init);
})(jQuery,window);