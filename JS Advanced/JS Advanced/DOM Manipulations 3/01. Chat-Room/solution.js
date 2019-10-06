function solve() {
   const SELECTORS = {
      sentBtn: '#send',
      textarea: '#chat_input',
      chatDiv: '#chat_messages',
      chatInput: '#chat_input'
   }

   function clear(){
      document.querySelector(SELECTORS.chatInput).value = "";
   }

   function addMessages(){
      let text = document.querySelector(SELECTORS.textarea);
      let chatDiv = document.querySelector(SELECTORS.chatDiv);
   
      let newMessage = document.createElement("div");
      newMessage.className = "message my-message";
      newMessage.innerHTML = text.value;
      chatDiv.appendChild(newMessage);
   
      clear();
   }

   document.querySelector(SELECTORS.sentBtn).addEventListener('click', addMessages);
}
