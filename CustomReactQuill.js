import React from 'react';
import CustomInput from './CustomInput';
import ReactQuill from 'react-quill';




const CustomReactQuill = ({ name, control, ...rest }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    return (
        <CustomInput
            control={control}
            name={name}
            Component={({ field }) => (
                <ReactQuill
                    {...field}
                    {...rest}
                    modules={modules} // Pass custom modules for toolbar options
                />
            )}
        />
    );
};

export default CustomReactQuill;
