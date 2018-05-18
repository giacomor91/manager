/**
 *
 * v-jsoneditor directive to activate jsoneditor on element
 *
 */

import JSONEditor from 'jsoneditor/dist/jsoneditor-minimalist';
import 'jsoneditor/dist/jsoneditor.min.css';

const jsonEditorOptions = {
    "mode": "code",
    "modes": ["tree", "code"],
    "history": true,
    "search": true,
    onChange: function (element) {
        if (element) {
            const json = element.jsonEditor.get();

            try {
                element.value = JSON.stringify(json);
            } catch(e) {
                console.error(e);
            }
        }
    },
    onModeChange: function(element ,a,b,c) {
        this.editor.setOptions({maxLines: Infinity});

        // element.jsonEditor.editor.setOptions({maxLines: Infinity});
    }
};

export default {
    install(Vue) {
        Vue.directive('jsoneditor', {
            // element: null,

            /**
             * create jsoneditor instance when element is inserted
             *
             * @param {Object} element DOM object
             */
            inserted (element, binding, vnode, oldVnode) {
                const content = element.value;
                try {
                    const json = JSON.parse(content) || {};

                    if (json) {
                        element.style.display = "none";
                        let jsonEditor = document.createElement('div');
                        jsonEditor.className = "jsoneditor-container";
                        element.parentElement.insertBefore(jsonEditor, element);
                        element.jsonEditor = new JSONEditor(jsonEditor, jsonEditorOptions);
                        element.jsonEditor.set(json);
                        // this.el = element;
                    }
                } catch (err) {
                    console.error(err);
                }
            },
        })
    }
}
