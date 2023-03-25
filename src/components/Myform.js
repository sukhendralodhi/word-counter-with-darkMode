import React, { useState } from 'react';

const Myform = (props) => {


    const handleUpcliked = () => {
        // console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to Uppercase!','success');
    }

    const handleClearcliked = () => {
        let newText = '';
        setText(newText);
         props.showAlert('Text cleared!','success');
    }

    const handleLocliked = () => {
        // console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to Lowercase!','success');
    }
    const onchnageHandler = (event) => {
        // console.log('Onchange run');
        setText(event.currentTarget.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied!','success');
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed extra spaces!', 'success');
    }

    const [text, setText] = useState("Enter your text here...");
    return (
        <>
            <div className=' w-full'>
                <div className='my-2 px-4'>
                    <h1 className='text-2xl py-2 font-bold' style={{color:props.mode === 'gray'?'white':'black'}}>{props.heading}</h1>
                    <textarea name="" value={text} onChange={onchnageHandler} id="myText" cols="30" rows="10" className='border-2 border-blue-400 w-full px-2 rounded' style={{backgroundColor: props.mode === 'gray'? 'gray':'white', color: props.mode === 'gray'? 'white':'black'}}></textarea>
                </div>
                <button className='bg-blue-400 text-white px-4 py-1 rounded mx-1' onClick={handleUpcliked}>ConvertToUppercase</button>
                <button className='bg-blue-400 text-white px-4 py-1 rounded mx-1' onClick={handleLocliked}>ConvertToLowercase</button>
                <button className='bg-blue-400 text-white px-4 py-1 rounded mx-1 mt-2' onClick={handleClearcliked}>Clear Text</button>
                <button className='bg-blue-400 text-white px-4 py-1 rounded mx-1 mt-2' onClick={handleCopy}>Copy Text</button>
                <button className='bg-blue-400 text-white px-4 py-1 rounded mx-1 mt-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='w-full flex flex-col justify-center items-center py-4'>
                <h1 className='text-xl font-bold' style={{color: props.mode === 'gray'? 'white':'black'}}>Your text sammary</h1>
                <p className='text-base' style={{color: props.mode === 'gray'? 'white':'black'}}>{text.split(" ").length} words and {text.length} characters</p>
                <p style={{color: props.mode === 'gray'? 'white':'black'}}>{0.008 * text.split(" ").length} Minutes</p>
                <p style={{color: props.mode === 'gray'? 'white':'black'}}>{text.length > 0 ? text : "Enter some text for see preview..."}</p>
            </div>
        </>
    );
}

export default Myform;