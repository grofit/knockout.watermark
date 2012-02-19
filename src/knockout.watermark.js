ko.bindingHandlers.watermark = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
		var allBindings = allBindingsAccessor();
		var text, options;
		var watermark = allBindings.watermark;
		
		if (typeof watermark == "string")
		{ text = watermark; }
		else
		{
			text = watermark.text;
			options = watermark.options;
		}
        $(element).watermark(text, options);
    }
};