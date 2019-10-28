function app(ul, box, dropDown, listItemClassMatcher) {
    return {
        ul: ul,
        box: box,
        dropDown: dropDown,

        handleEvent: function (e) {
            if (typeof this[e.target.id] === "function") {
                this[e.target.id]()
            }

            if (listItemClassMatcher) {
                this.deep(e.target.textContent)
            }

        },

        setBoxColor: function (color) {
            this.box.style.backgroundColor = color;
        },

        dropdown: function () {
            if (this.ul.style.display === "block") {
                this.ul.style.display = "none";
                this.setBoxColor("")
            } else {
                this.ul.style.display = "block"
            }
        },

        deep: function (color) {
            this.box.style.backgroundColor = color;
        }
    }
}

function solve() {
    document.addEventListener('DOMContentLoaded', function () {
        document.addEventListener('click', app(
            document.getElementById('dropdown-ul'),
            document.getElementById('box'),
            document.getElementById('dropdown'),
            domNode => domNode.classList.value.match('deep')
        ));
    })
}