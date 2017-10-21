import React from 'react';

const Error = ({ errorText = null }) => {
    if (!errorText) return null;
    return (
        <div className="ooca-form-input-error">
            <span className="text-body-small text-negative">
                {errorText}
            </span>
        </div>
    );
};

export default Error;