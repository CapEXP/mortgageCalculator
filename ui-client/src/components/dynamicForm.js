import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import metaDataJSON from '../metadata/metadata.json'
import { layoutEngine } from '../components/layoutEngine';
import './dynamicForm.css'

function DynamicForm() {
    const { handleSubmit, control } = useForm();

    const [metadata, setMetadata] = useState(metaDataJSON);

    const onSubmit = (data) => {
        console.log(data); // Handle form submission
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(metadata).map((fieldName) => {
                const field = metadata[fieldName];
                return <div style={{width: "500px"}}>
                    {layoutEngine(field)}
                </div>
            })}
        </form>
    );
}

export default DynamicForm;
