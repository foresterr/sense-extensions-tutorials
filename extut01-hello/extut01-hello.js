define([
    'jquery'
    ],
    function ($) {
        'use strict';

        return {
            definition: {
                type: 'items',
                component: 'accordion',
                items: {
                    appearance: {
                        uses: 'settings',
                        items: {
                            extensionString: {
                                ref: 'extensionString',
                                type: 'string',
                                label: 'Hello World text',
                                defaultValue: 'So long, suckers!'
                            }
                        }
                    }
                }
            },
            paint: function ($element, layout) {
                var id = 'qid_' + layout.qInfo.qId;
                var $hello = $('#' + id);
                if(!$hello.length) {
                    $hello = $(document.createElement('div'));
                    $hello.attr('id', id);
                    $hello.html(layout.extensionString);
                    $element.append($hello);
                } else {
                    $hello.html(layout.extensionString);
                }
            }
        }
    }
);