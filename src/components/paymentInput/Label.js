import React from 'react';

const Label = (props) => {
    const { htmlFor = '', text = null } = props;
    if (!text) return null;
    return (
        <label htmlFor={htmlFor} className="input-label float-label text-color-body text-body-large">
            {text}
        </label>
    );
};

export default Label;