import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const CustomForm = ({ fields, validationSchema, onSubmit, defaultValues = {}, loading }) => {
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
        mode: 'all',
    });

    const { control, handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form className="form create-post__form" onSubmit={handleSubmit(onSubmit)}>
                {fields.map(({ name, placeholder, component: Component, ...fieldProps }) => (
                    <Component control={control} key={name} name={name} {...fieldProps} />
                ))}
                <button type="submit" className="btn primary" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </FormProvider>
    );
};

export default CustomForm;