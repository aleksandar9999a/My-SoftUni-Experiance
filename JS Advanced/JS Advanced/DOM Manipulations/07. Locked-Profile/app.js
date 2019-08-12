function lockedProfile() {
    [...document.getElementsByTagName('button')].forEach(btn => btn.addEventListener('click', showInfo));

    function showInfo(event){
        let btn = event.target;
        let currentProfile = btn.parentNode;
        const lockStatus = currentProfile.querySelector('input[type="radio"]:checked').value;
        
        if (lockStatus === 'unlock') {
            let id = currentProfile.getElementsByTagName('div')[0].id;
            let currentContent = document.getElementById(id);

            if (currentProfile.getElementsByTagName('button')[0].textContent === 'Show more') {
                currentContent.style.display = "inline-block";
                currentProfile.getElementsByTagName('button')[0].textContent = 'Hide it';
            }
            else {
                currentContent.style.display = "none";
                currentProfile.getElementsByTagName('button')[0].textContent = 'Show more';
            }
        }
    }
}