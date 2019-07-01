function printingLoadingBar(loadingBarProcent) {
    if (loadingBarProcent < 100) {
        console.log(loadingBarProcent + `% ` + loadingBar(loadingBarProcent));
        console.log(`Still loading...`);
    }
    else{
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }

    function loadingBar(loadingBarProcent) {
        let procent = ``;
        let dot = ``;
        loadingBarProcent = loadingBarProcent / 10;
        let dotCounter = 10 - loadingBarProcent;
    
        for (let x = 1; x <= loadingBarProcent; x++) {
            procent += `%`;
        }
    
        for (let x1 = 1; x1 <= dotCounter; x1++) {
            dot += `.`
        }
    
        let loading = `[` + procent + dot + `]`;
    
        return loading;
    }
}
printingLoadingBar(50)