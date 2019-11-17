const tr = {
    createElement: function (type, content) {
        let e = document.createElement(type);

        if (typeof content === "string") {
            e.innerHTML = content;
        }
        if (typeof content === "object") {
            e.appendChild(content);
        }

        return e;
    },

    appendElements: function (parent, e) {
        if (Array.isArray(e)) {
            e.map(x => parent.appendChild(x));
        } else {
            parent.appendChild(e);
        }
    },

    tr: function (content) {
        return this.createElement('tr', content);
    },

    td: function (content) {
        return this.createElement('td', content);
    },

    button: function (content) {
        return this.createElement('button', content);
    },

    createTr: function (data) {
        const currTr = this.tr();
        currTr.setAttribute('data-id', data._id)
        const title = this.td(data.title);
        const author = this.td(data.author);
        const isbn = this.td(data.isbn);

        const btnTd = this.td();

        const edit = this.button('Edit');
        edit.className = 'edit';
        const del = this.button('Delete');
        del.className = 'delete';

        this.appendElements(btnTd, [edit, del]);
        this.appendElements(currTr, [title, author, isbn, btnTd]);

        return currTr
    }
}

export default tr;