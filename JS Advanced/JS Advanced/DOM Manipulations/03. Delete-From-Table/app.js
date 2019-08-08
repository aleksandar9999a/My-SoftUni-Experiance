function deleteByEmail(){
    const SELECTORS = {
        email: '[name=email]',
        rows: '#customers tbody tr',
        emailCell: '.email-cell',
        notification: '#result'
    };
    
    const NOTIFICATION_TEXT = {
        success: 'Deleted.',
        error: 'Not found'
    }
    
    const getEmail = () => document.querySelector(SELECTORS.email).value;
    const getRows = () => document.querySelectorAll(SELECTORS.rows);
    
    const getRowToDelete = (rows, email) => 
        [...rows].find(row => 
            row.querySelector(SELECTORS.emailCell).innerHTML == email);
    
    const deleteRow = (row) => row.remove();
    
    const clearEmail = () => document.querySelector(SELECTORS.email).value = '';
    
    const setNotification = (text) => 
            document.querySelector(SELECTORS.notification)
            .innerHTML = text;
    
    const setSuccessfullNotification = () => {
        setNotification(NOTIFICATION_TEXT.success);
    };
    
    const setUnsuccessfullNotification = () => {
        setNotification(NOTIFICATION_TEXT.error);
    };

    const email = getEmail();
    const rows = getRows();
    const rowToDelete = getRowToDelete(rows, email);

    if (rowToDelete) {
        deleteRow(rowToDelete);
        setSuccessfullNotification();
    }
    else{
        setUnsuccessfullNotification();
    }

    clearEmail();
};