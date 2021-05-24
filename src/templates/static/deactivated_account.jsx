import React from 'react';

const DeactivatedAccount = () => (
    <div id='msg_main' className='center-text gr-gutter gr-padding-30 close-user-account'>
        <div className='msg_main_modal'>
            <div className='notice-msg'>
                <img className='responsive lock-deactivated-account' src={it.url_for('images/pages/deactivated_account/lock.svg')} alt='Lock image' />
                <h1>
                    {it.L('We\'re sorry to see you leave.')}
                </h1>
                <p>
                    {it.L('Your account is now deactivated.')}
                </p>
                <br />
            </div>
        </div>
    </div>
);

export default DeactivatedAccount;
