define(
    [
        'jquery',
        './extension-properties'
    ],
    function ($, extProps) {
        'use strict';

        return {
            definition: extProps,
            paint: function ($element, layout) {
                console.info('paint >> layout >> ', layout);
                $element.empty();
                var $msg = $(document.createElement('div'));
                var html = '<b>Property values:</b><br>';
                html += 'Title: ' + layout.title + '<br>';
                html += 'Subtitle: ' + layout.subtitle + '<br>';
                html += 'Footnote: ' + layout.footnote + '<br>';
                $msg.html(html);
                $element.append($msg);
            }
        };
    }
);