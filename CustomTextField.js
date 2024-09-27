import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

const CustomTextField = forwardRef(({ name, control, type = 'text', ...rest }, ref) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <div>
                    <input
                        {...rest}
                        {...field}
                        type={type}
                        ref={ref}
                        style={{ width: "100%" }}
                        name={name}
                    />
                    {fieldState.error && <span>{fieldState.error.message}</span>}
                </div>
            )
            }
        />
    );
});

export default CustomTextField;