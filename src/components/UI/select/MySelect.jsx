import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option
                disabled={true}
                value="">{defaultValue}
            </option>
            {options.map((o) =>
                <option key={o.value} value={o.value}>
                    {o.name}
                </option>)}
        </select>
    );
};

export default MySelect;