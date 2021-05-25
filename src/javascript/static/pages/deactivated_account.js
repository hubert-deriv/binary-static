const urlFor = require('../../_common/url').urlFor;
const Client = require('../../app/base/client');

const DeactivatedAccount = (() => {
    const onLoad = () => {
        const redirect_home = urlFor('home');
        const redirect_trading = urlFor('trading');
        setTimeout(() => {
            if (Client.isLoggedIn()) {
                window.location.href = redirect_trading;
            } else {
                window.location.href = redirect_home;
            }
        }, 5000);
    };

    return {
        onLoad,
    };
})();

module.exports = DeactivatedAccount;
