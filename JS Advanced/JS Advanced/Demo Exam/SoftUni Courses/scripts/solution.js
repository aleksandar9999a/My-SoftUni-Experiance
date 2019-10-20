const courses = {
   'js-fundamentals': "JS Fundamentals - January",
   'js-advanced': "JS Advanced - February",
   'js-applications': "JS Applications - March",
   'js-web': "JS Web - April",
   'bonus': "HTML and CSS"
}

const prices = {
   "JS Fundamentals - January": 170,
   "JS Advanced - February": 180,
   "JS Applications - March": 190,
   "JS Web - April": 490
}

function addElementToMyCourses() {
   if (this.checked == true) {
      addToMyCourses(this.value);
      calculateFullPrice();
   }else{
      removeFromMyCourses(this.value);
      calculateFullPrice();
   }
}

function addEventsToInputs(x) {
   if (x.type === "checkbox") {
      return x.addEventListener("click", addElementToMyCourses)
   }
}

function createElement(type, content) {
   let el = document.createElement(type);
   el.innerHTML = content;
   return el;
}

function addToMyCourses(option) {
   let ul = document.querySelector('#myCourses').getElementsByTagName('ul')[0];
   let li = createElement('li', courses[option])
   ul.appendChild(li);
}

function removeOption(option, element) {
      if (element.innerHTML === courses[option]) {
         element.remove()
      }
}

function removeFromMyCourses(option) {
   let li = document.querySelector('#myCourses').getElementsByTagName('li');
   Array.from(li).map(removeOption.bind(undefined, option));
}

function calculateFullPrice() {
   let fullPrice = 0;
   let list = document.getElementById('myCourses').getElementsByTagName('li');
   let isFund = false;
   let isAdv = false;
   let isApp = false;
   let isWeb = false;

   Array.from(list).map(x => {
      fullPrice += prices[x.innerHTML];
      if (x.innerHTML === "JS Fundamentals - January") {
         isFund = true;
      } else if(x.innerHTML === "JS Advanced - February"){
         isAdv = true;
      }
      else if(x.innerHTML === "JS Applications - March"){
         isApp = true;
      }
      else if(x.innerHTML === "JS Web - April"){
         isWeb = true;
      }
   })
   
   if (isAdv && isFund && isApp && isWeb) {
      addToMyCourses('bonus');
      fullPrice -= 540 * 0.06;
   }else if(isAdv && isFund && isApp && !isWeb){
      fullPrice *= 0.94;
   } else if (isAdv && isFund && !isApp && !isWeb) {
      fullPrice -= 180 * 0.1;
   }
   
   if (document.getElementById('educationForm').getElementsByTagName('input')[1].checked == true) {
      fullPrice *= 0.94;
   }
   
   printPrice(fullPrice)
}

function printPrice(price) {
   document.getElementsByClassName('courseFoot')[1].getElementsByTagName('p')[0].innerHTML = `Cost: ${Math.floor(price).toFixed(2)} BGN`;
}
function solve() {
   Array.from(document.getElementsByTagName("input")).map(addEventsToInputs);
}

solve();