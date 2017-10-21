import React from 'react';
import PaymentInput, { _newCardForm } from './paymentInput';

const PaymentForm = () => {
    return (
        <div className="payment-information row justify-center sm-no-gutter gutter wrap page-view">
            <div className="width-1of2 lt-bg-auto">
                <div className="column full-height">
                    <form method="post" id="new-card-form" className="column auto">
                        <div className="panel bg-white auto">
                            <div className="row gutter" style={{ marginBottom: 0 }}>
                                <div className="auto">
                                    <PaymentInput name="expiry" label="หมดอายุ"
                                        newCardForm={_newCardForm}
                                        inputProps={{
                                            type: 'text',
                                            placeholder: 'XX / XX',
                                            maxLength: 7,
                                            autoComplete: 'off',
                                            'data-encrypt': 'cvv',
                                        }}
                                        mask="## / ##"
                                        nextField="cvv" />
                                </div>
                                <div className="auto">
                                    <PaymentInput name="cvv" label="CVV"
                                        newCardForm={_newCardForm}
                                        inputProps={{
                                            type: 'password',
                                            placeholder: 'CVV',
                                            maxLength: 3,
                                            autoComplete: 'off',
                                            'data-encrypt': 'cvv',
                                        }} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;