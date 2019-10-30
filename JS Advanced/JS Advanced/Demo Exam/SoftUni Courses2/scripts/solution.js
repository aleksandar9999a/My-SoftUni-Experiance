const courses = {
   'js-fundamentals': "JS Fundamentals - January",
   'js-advanced': "JS Advanced - February",
   'js-applications': "JS Applications - March",
   'js-web': "JS Web - April",
   'bonus': "HTML and CSS"
}

let combinationTypes = {
   "JS Fundamentals - January": 170,
   "JS Advanced - February": 180,
   "JS Applications - March": 190,
   "JS Web - April": 490,
   "JS Fundamentals - January + JS Advanced - February": 180 * 0.9 + 170,
   "JS Fundamentals - January + JS Advanced - February + JS Applications - March": (170 + 180 + 190) * 0.94,
   "JS Fundamentals - January + JS Advanced - February + JS Applications - March + JS Web - April": 170 + 180 + 190 + 490
}

function myApp(avCoursesList, myCoursesList, totalPriceElement, onlineRadioBtn) {
   return {
      handleEvent: function (e) {
         if (e.target.tagName === 'INPUT' && e.target.type === "checkbox") {
            if (e.target.checked == true) {
               this.addToMyCourses(courses[e.target.value]);
            } else {
               this.removeFromMyCourses(courses[e.target.value])
            }
         }

         this.updatePrice();
      },

      addToMyCourses: function (course) {
         let li = this.createElement('li', course);
         myCoursesList.appendChild(li);
      },

      removeFromMyCourses: function (course) {
         Array.from(myCoursesList.getElementsByTagName('li')).map(x => {
            if (x.innerHTML === course) {
               x.remove();
            }
         })
      },

      updatePrice: function () {
         let newPrice = this.calculateTotalPrice();
         totalPriceElement.innerHTML = `Cost: ${newPrice.toFixed(2)} BGN`;
      },

      calculateTotalPrice: function () {
         let combination = this.searchCheckedCourses();
         let price = 0;

         if (combinationTypes[combination.join(' + ')]) {
            price = combinationTypes[combination.join(' + ')];
         }else{
            combination.map(x => price += combinationTypes[x]);
         }

         if (combination.length < 4) {
            this.removeFromMyCourses('HTML and CSS');
         }else{
            this.removeFromMyCourses('HTML and CSS');
            this.addToMyCourses('HTML and CSS')
         }

         if (onlineRadioBtn.checked == true) {
            price *= 0.94;
         }

         return price
      },

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

      searchCheckedCourses: function () {
         return Array.from(avCoursesList).map(this.isChecked).filter(this.filterUndefined);
      },

      isChecked: function (x) {
         if (x.checked == true) {
            return courses[x.value]
         }
      },

      filterUndefined: function (x) {
         return x != undefined
      }
   }
}

document.addEventListener("DOMContentLoaded", function () {
   document.addEventListener('click', myApp(
      document.getElementsByClassName('courseBody')[0].getElementsByTagName('input'),
      document.getElementsByClassName('courseBody')[1].getElementsByTagName('ul')[0],
      document.getElementsByClassName('courseFoot')[1].getElementsByTagName('p')[0],
      document.getElementById('educationForm').getElementsByTagName('input')[1]
   ))
})