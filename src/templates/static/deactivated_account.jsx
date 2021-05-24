import React from 'react';

const DeactivatedAccount = () => (
    <div id='msg_main' className='center-text gr-gutter gr-padding-30 invisible close-user-account'>
        <div className='msg_main_modal'>
            <div className='notice-msg'>
                <p>
                    {it.L('We\'re sorry to see you leave.')}
                    <br />
                    {it.L('Your account is now deactivated.')}
                    <br />
                </p>
            </div>
        </div>
    </div>
);

export default DeactivatedAccount;
