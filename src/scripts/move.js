window.move = (function($){
	function move(handle){

		$(handle).mousedown(this.mdown);
	}

	var moveTo = function(handle,x,y){
		$(handle).css('left',x);
		$(handle).css('top',y);
	};

	move.prototype.mdown = function(e){
		var _this = this;
		var x = e.pageX;
		var y = e.pageY;

		var offset = $(this).offset();

		var left = offset.left;
		var top = offset.top;
		var m = function(ev){
			var _x = left + (ev.pageX - x);
			var _y = top + (ev.pageY - y);
			moveTo(_this, _x, _y);
		};

		$('body').mousemove(m);

		$(this).mouseup(function(){
			$('body').unbind('mousemove', m);
		});
	}

	function construct(handle){
		return new move(handle);
	}
	return construct;
})(jQuery);