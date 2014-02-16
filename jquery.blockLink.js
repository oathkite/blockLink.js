(function($) {
	$.fn.blockLink = function() {
		var self = this;
		return self.each(function() {
			var url = $(this).find('a:first').attr('href');
			$(this).css('cursor', 'pointer').click(function(e) {
				if ($(this).find('a:first').attr('target') === '_blank' || e.metaKey) {
					window.open(url, '_blank');
					return false;
				} else {
					location = url;
				}
			});
		});
	};
})(jQuery);