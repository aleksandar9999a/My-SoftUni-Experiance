const app = {
   handleEvent: function (e) {
      if (e.target.tagName === 'TD') {
         this.addOrRemoveBackground(e);
      }
   },

   removeBackgroundColor: function (x) {
      return x.style.backgroundColor = "";
   },

   addOrRemoveBackground: function (e) {
      let tr = e.target.parentElement;
      if (tr.style.backgroundColor === "") {
         Array.from(document.getElementsByTagName('tr')).map(this.removeBackgroundColor);
         tr.style.backgroundColor = "rgb(65, 63, 94)";
      } else {
         this.removeBackgroundColor(tr);
      }
   }
}

function solve() {
   document.addEventListener('DOMContentLoaded', function () {
      document.addEventListener('click', app)
   })
}
