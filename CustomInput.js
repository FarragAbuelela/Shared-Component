import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

const CustomInput = forwardRef(({ Component, name, control, ...rest }, ref) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <div>
                    <Component
                        {...rest}
                        {...field}
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

export default CustomInput;