define([],
    function () {
        'use strict';

        return {
            definition: {
                type: 'items',
                component: 'accordion',
                items: {
                    dimensions: {
                        uses: 'dimensions'
                    },
                    measures: {
                        uses: 'measures'
                    },
                    sorting: {
                        uses: 'sorting'
                    },
                    appearance: {
                        uses: 'settings'
                    }
                }
            },
            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [
                        {
                            qWidth: 10,
                            qHeight: 100
                        }
                    ]
                }
            },
            paint: function($element, layout) {
                var data = layout.qHyperCube;
                // console.log('Returned data: ', data);

                $element.empty();
                var table = '<table border="1">';
                table += '<thead>';
                    table += '<tr>';
                    for (var i = 0; i < data.qDimensionInfo.length; i++) {
                        table += '<th>' + data.qDimensionInfo[i].qFallbackTitle + '</th>';
                    }
                    for (var i = 0; i < data.qMeasureInfo.length; i++) {
                        table += '<th>' + data.qMeasureInfo[i].qFallbackTitle + '</th>';
                    }
                    table += '<tr>';
                table += '</thead>';
                table += '<tbody>';
                for (var row = 0; row < data.qDataPages[0].qArea.qHeight; row++) {
                    table += '<tr>';
                    for (var col = 0; col < data.qDataPages[0].qArea.qWidth; col++) {
                        table += '<td>';
                        table += data.qDataPages[0].qMatrix[row][col].qText;
                        table += '</td>';
                    }
                    table += '</tr>';
                }
                table += '</tbody>';
                table += '</table>';
                $element.append(table);

            }
        };
    }
);