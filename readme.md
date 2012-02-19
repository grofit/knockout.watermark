# Knockout.Watermark

A simple binding for knockout 2.0 to enable watermarks via data bindings.

## Installing

Just add the jquery.watermark, then knockout.watermark.js to your project, as it relies upone the jquery watermark library, which in turn relies upon Jquery.

## Example

A simple example of adding a watermark:
<input id="some-input-element" type="text" data-bind="watermark: 'Enter some data here'" /> 

A more complicated example with options ( all options can be found within the jquery watermark | http://code.google.com/p/jquery-watermark ):
<input id="some-input-element" type="text" data-bind="watermark: { text: 'Enter some data here', options: { useNative: false } }" /> 