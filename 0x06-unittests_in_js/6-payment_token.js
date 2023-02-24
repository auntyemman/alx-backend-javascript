// Async test that returns a promise

function getPaymentTokenFromAPI(success) {
    return success = new Promise (function(myResolve, myReject) {
        if ( success === true) {
            myResolve({ data: 'Successful response from the API' });
        }
        else {
            myReject();
        }
    });
};

module.exports = getPaymentTokenFromAPI;