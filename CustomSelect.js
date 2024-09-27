import React from 'react';
import CustomInput from './CustomInput';

const CustomSelect = ({ name, control, options, ...rest }) => {
    return (
        <CustomInput
            control={control}
            name={name}
            Component={({ field }) => (
                <select {...field}>
                    {options.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            )}
            {...rest} // Spread any other props
        />
    );
};

export default CustomSelect;
