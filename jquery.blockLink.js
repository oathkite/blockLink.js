(function($) {
	$.fn.blockLink = function() {
		var self = this;
		return self.each(function() {
			var url = $(this).find('a:first').attr('href');
			$(this).css('cursor', 'pointer').click(function() {
				location = url;
			});
		});
	}
})(jQuery);