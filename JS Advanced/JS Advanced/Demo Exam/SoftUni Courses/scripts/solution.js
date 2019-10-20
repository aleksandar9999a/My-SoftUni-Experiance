const courses = {
   'js-fundamentals': "JS Fundamentals - January",
   'js-advanced': "JS Advanced - February",
   'js-applications': "JS Applications - March",
   'js-web': "JS Web - April"
}

function addElementToMyCourses() {
   if (this.checked == true) {
      addToMyCourses(this.value)
   }else{
      removeFromMyCourses(this.value)
   }
}

function myEducationForm() {
   console.log("gei");
   
}

function addEventsToInputs(x) {
   if (x.type === "checkbox") {
      return x.addEventListener("click", addElementToMyCourses)
   } else if(x.type === "radio"){
      return x.addEventListener("click", myEducationForm)
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
function solve() {
   Array.from(document.getElementsByTagName("input")).map(addEventsToInputs);
   
}

solve();