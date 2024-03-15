import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import metaDataJSON from '../metadata/metadata.json'
import { layoutEngine } from '../components/layoutEngine';
import Button from '@mui/material/Button';
import './dynamicForm.css'

function DynamicForm() {
    const { handleSubmit, control } = useForm();

    const [metadata, setMetadata] = useState(metaDataJSON);
    const [section, setSection] = useState(Object.keys(metaDataJSON)[0]);

    const handleSectionClick = (value) => {
        setSection(value)
    }
    const onSubmit = (data) => {
        console.log(data); // Handle form submission
    };

    const getSelectedClass = (fn) => {
        return fn === section ? 'aSelected' : 'sectionAnchor'
    }

    const showButton = (fn) => {
        const index = Object.keys(metaDataJSON).indexOf(fn)
        return { back: index !== 0, next: Object.keys(metaDataJSON).length - 1 !== index }
    }
    
    const onNavClicked = (btn) => {
        const index = Object.keys(metaDataJSON).indexOf(section)
        if(btn === 'back') {
            const newIndex = index -1
            setSection(Object.keys(metaDataJSON)[newIndex])
        }
        if(btn === 'next') {
            const newIndex = index + 1
            setSection(Object.keys(metaDataJSON)[newIndex])
        }
    }

    // Integrate service  for metadata here
    // useEffect(() => {
    //     fetch('url').then(data => {
    //         setMetadata(data)
    //     })
    // })


    const { back, next } = showButton(section)

    return (
        <div style={{ display: "flex", marginTop: 20 }}>
            <div>
                <ul className="sectionUL">
                    {Object.keys(metadata).map((fieldName) => {
                        return <li className='sectionLI'>
                            <a className={getSelectedClass(fieldName)} style={{}} target="_blank" onClick={() => handleSectionClick(fieldName)}>{fieldName}</a>
                        </li>
                    })}
                </ul>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-container">
                    <p style={{ fontWeight: 500, fontSize: "20px", margin: 0 }}>{section}</p>
                    <hr style={{ width: "100%" }}></hr>
                    {Object.keys(metadata[section]).map((fieldName) => {
                        const field = metadata[section][fieldName];
                        return <div style={{ width: "500px" }}>
                            {layoutEngine(field)}
                        </div>
                    })}
                </div>
                <div style={{ textAlign: "right", width: "100%", marginTop: 30 }}>
                    {back &&
                        <Button onClick={() => onNavClicked('back')} className="" variant="outlined" style={{ backgroundColor: "#cc0009", color: "#fff", marginRight: 10 }} >Back</Button>
                    }
                    {next &&
                        <Button onClick={() => onNavClicked('next')} className="" variant="outlined" style={{ backgroundColor: "#cc0009", color: "#fff" }} >Next</Button>
                    }
                </div>
            </form>
        </div>
    );
}

export default DynamicForm;
