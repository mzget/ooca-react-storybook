import React from 'react';
import Label from './Label';
import Error from './Error';
import { dataToMask } from '../../helpers/mask';

// for storybook
export let _newCardForm = {
    errors: {
        cvv: null
    },
    cvv: '',
    clearApiError: () => { },
}

export default class PaymentInput extends React.Component {
    onInput(e) {
        const { newCardForm, inputProps, name, mask, nextField } = this.props;
        let value = e.target.value;
        if (!!mask && typeof mask == 'string' && mask != '') {
            // previousValue for delete text
            const _el$dataset = e.target.dataset,
                _el$dataset$previousV = _el$dataset.previousValue,
                previousValue = _el$dataset$previousV === undefined ? "" : _el$dataset$previousV;
    
            // do mask when adding new text
            if (value !== previousValue && value.length > previousValue.length) {
                value = dataToMask(value, mask);
            }
            e.target.dataset.previousValue = value;
        }

        newCardForm[name] = value;
        if (!!newCardForm.touch) { // in vue
            e.persist();
            newCardForm.touch(e);
        }
        else { // in storybook
            this.forceUpdate();
        }

        if ((!!mask && mask.length == value.length) || inputProps.maxLength == value.length) {
            let nextFieldEl = document.getElementById(nextField);
            !!nextFieldEl && nextFieldEl.focus();
            // if (!!nextFieldEl) {
            //   nextFieldEl.focus();
            // }
        }
    }

    render() {
        const { newCardForm, label, inputProps, name } = this.props;
        let hasError = !!newCardForm.errors && !!newCardForm.errors[name];
        return (
            <div className="ooca-form-input">
                <Label text={label} htmlFor={name} />
                <div className={`input-wrapper row items-center${hasError ? ' has-error' : ''}`}>
                    <input
                        name={name}
                        id={name}
                        className="input auto text-color-primary text-body-large"
                        {...inputProps}
                        value={newCardForm[name]}
                        onInput={this.onInput.bind(this)}
                        onBlur={(e) => newCardForm.clearApiError(e)} />
                </div>
                <Error errorText={hasError ? newCardForm.errors[name] : null} />
            </div>
        );
    }
}

// export default PaymentInput;