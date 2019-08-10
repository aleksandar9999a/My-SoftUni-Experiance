function notify(message) {
    document.getElementById('notification').textContent = message;
    document.getElementById('notification').style.display = 'block';
    
    setTimeout(function(){
        document.getElementById('notification').style.display = 'none';
    }, 2000)
}