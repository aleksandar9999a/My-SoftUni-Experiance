const catchForm = {
    createElement: function(type, content){
        let e = document.createElement(type);

        if (typeof content === "string") {
            e.innerHTML = content;
        }
        if (typeof content === "object") {
            e.appendChild(content);
        }
    
        return e;
    },

    div: function (dataId) {
        let div = this.createElement('div');
        div.className = 'catch';
        div.setAttribute('data-id', dataId);
        return div;
    },

    label: function (content) {
        const label = this.createElement('label', content);
        return label;
    },

    input: function (type, className, value) {
        const input = this.createElement('input');
        input.setAttribute('type', type);
        input.className = className;
        input.value = value;
        return input
    },

    btn: function (id, content) {
        const btn = this.createElement('button', content);
        btn.id = id;
        return btn;
    },

    hr: function () {
        const hr = this.createElement('hr');
        return hr;
    },

    appendElements: function (parent, e) {
        if (Array.isArray(e)) {
            e.map(x => parent.appendChild(x));
        }
        else {
            parent.appendChild(e);
        }
    },

    generateCatch: function (data) {
        if (data.length != 2) {
            throw new Error('Input data is invalid!');
        }
        let newCatch = this.div(data[0]);
        this.appendElements(newCatch,
            [
                this.label('Angler'),
                this.input('text', 'angler', data[1].angler),
                this.hr(),
                this.label('Weight'),
                this.input('number', 'weight', data[1].weight),
                this.hr(),
                this.label('Species'),
                this.input('text', 'species', data[1].species),
                this.hr(),
                this.label('Location'),
                this.input('text', 'location', data[1].location),
                this.hr(),
                this.label('Bait'),
                this.input('text', 'bait', data[1].bait),
                this.hr(),
                this.label('Capture Time'),
                this.input('number', 'captureTime', data[1].captureTime),
                this.hr(),
                this.btn('update', 'Update'),
                this.btn('delete', 'Delete')
            ]);

        return newCatch;
    }
}

export default catchForm;