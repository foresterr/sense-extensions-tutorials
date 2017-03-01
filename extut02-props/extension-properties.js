define([], function () {
    'use strict';

    var aTextBox = {
        ref: 'props.aTextBox',
        label: 'a text box',
        type: 'string',
        expression: 'optional'
    };
    var aColorPicker = {
        ref: 'props.aColorPicker',
        label: 'a color picker',
        type: 'integer',
        component: 'color-picker'
    };
    var aButtonGroup = {
        type: 'string',
        component: 'buttongroup',
        label: 'a button group',
        ref: 'props.aButtonGroup',
        defaultValue: '1',
        options: [{
            value: '1',
            label: 'Option 1'
        },{
            value: '2',
            label: 'Option 2'
        }]
    };
    var aCheckBox = {
        type: 'boolean',
        label: 'optional option',
        ref: 'props.checkBox',
        defaultValue: false
    };
    var aRadioButton = {
        type: 'string',
        component: 'radiobuttons',
        label: 'mandatory option',
        ref: 'props.radio',
        defaultValue: '1',
        options: [{
            value: '1',
            label: 'Option 1'
        },{
            value: '2',
            label: 'Option 2'
        }]
    };

    var dimensions = {
        uses: 'dimensions',
        max: 1,
        min: 0
    };
    var measures = {
        uses: 'measures',
        max: 1,
        min: 0
    };
    var appearance = {
        uses: 'settings'
    };
    
    var sectionOverview = {
        type: 'items',
        label: 'Sections overview',
        items: {
            item01: {label: 'Item 01', ref: 'props.item01', type: 'string'},
            item02: {label: 'Item 02', ref: 'props.item02', type: 'string'},
            expandableItems: {
                type: 'items',
                component: 'expandable-items',
                items: {
                    header1: {
                        label: 'Section 1',
                        type: 'items',
                        items: {
                            item1: {label: 'Item 1', ref: 'props.item1', type: 'string'},
                            item2: {label: 'Item 2', ref: 'props.item2', type: 'string'},
                            item3: {label: 'Item 3', ref: 'props.item3', type: 'string'}
                        }
                    },
                    header2: {
                        label: 'Section 2',
                        type: 'items',
                        items: {
                            item1: {label: 'Item 1', ref: 'props.item4', type: 'string'},
                            item2: {label: 'Item 2', ref: 'props.item5', type: 'string'},
                            item3: {label: 'Item 3', ref: 'props.item6', type: 'string'}
                        }
                    },
                }
            },
        }
    }
    var compOverview = {
        type: 'items',
        component: 'items',
        label: 'Component overview',
        items: {
            item1: aTextBox,
            item2: aColorPicker,
            item3: aButtonGroup,
            item4: aCheckBox,
            item5: aRadioButton
        }
    }
    

    return {
        type: 'items',
        component: 'accordion',
        items: {
            dimensions: dimensions,
            measures: measures,
            appearance: appearance,
            custom1: sectionOverview,
            custom2: compOverview
        }
    };
});