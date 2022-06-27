import React,{useState} from 'react'

export default function TextForms(props) {

    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Changed to Uppercase", "success")
    }
    const handleLoclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Changed to Lowercase", "success")
    }
    const clearOnclick = ()=>{
        settext("");
        props.showAlert("Cleared", "success")
    }

    const copyOnclick = ()=>{
        let newText = document.getElementById('myBox');
        newText.select();
        console.log(newText.value)
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied", "success")
    }
    const removeSpacesOnclick = ()=>{  
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showAlert("Spaces Removed", "success")
    }

    const handleOnchange= (event)=>{
        // console.log("on change");
        settext(event.target.value)
    }

    const [text, settext] = useState("");

    return (
        <>
        <div className="container"  style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">    
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange}rows="8" style={{backgroundColor: props.mode === 'dark'?'#28244b':'white',  color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to upperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to lowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearOnclick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyOnclick}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={removeSpacesOnclick}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary is here :-</h2>
            <p>{text.split(/\s/).filter((element)=>{return element.length!== 0}).length} words , {text.length} Characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in box to analyze"}</p>
        </div>
        </>
    )
}
