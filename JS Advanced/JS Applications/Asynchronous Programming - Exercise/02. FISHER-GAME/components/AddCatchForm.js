const addCatchForm = {
    angler: document.getElementById('angler'),
    weight: document.getElementById('weight'),
    species: document.getElementById('species'),
    location: document.getElementById('location'),
    bait: document.getElementById('bait'),
    captureTime: document.getElementById('captureTime'),
    reset: function(){
        this.angler.value = '';
        this.weight.value = '';
        this.species.value = '';
        this.location.value = '';
        this.bait.value = '';
        this.captureTime.value = '';
    }
}

export default addCatchForm;