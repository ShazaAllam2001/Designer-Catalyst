import { useEffect } from "react";

import './DrawToolBar.css';

export function DrawToolBar({ setLineWidth, setBrushColor, brushColor, setIsEraser, isEraser, canvasElement}) {
    const classes_colors = new Map([
        ["", "#000000"],
        ["ground", "#964B00"],
        ["grass", "#00FF00"],
        ["person", "#FFCCCB"],
        ["sky", "#ADD8E6"],
        ["floor", "#808080"]
    ]);
    const seg_classes = Array.from(classes_colors.keys());
    const classes_options = seg_classes.map((class_option) => 
        <option key={class_option}>{ class_option }</option>
    );

    useEffect(() => {
        const toolBtns = Array.from(document.querySelectorAll('.btn-tool'));
        toolBtns.forEach(toolBtn => {
            toolBtn.addEventListener('click', () => {
                toolBtns.forEach(toolBtn => {
                    toolBtn.classList.remove('active');
                });
                toolBtn.classList.add('active');
                if(toolBtn.id === 'erase')
                    setIsEraser(true);
                else
                    setIsEraser(false);
            });
        });

    }, [brushColor, isEraser]);

    return (
        <div className="tool-bar">
            <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>
            <div className="draw-tool-bar">
                <button className="btn-tool active" id="draw">
                    <i className="bx bx-pencil" style={{ fontSize: '22px' }}></i>
                </button>
                <button className="btn-tool" id="erase">
                    <i className="bx bx-eraser" style={{ fontSize: '22px' }}></i>
                </button>

                <label> Stroke Width </label>
                <input
                    type="range"
                    min="3"
                    max="20"
                    onChange={(e) => {
                        setLineWidth(e.target.value);
                    }}
                />

                <select className="class-select" name="seg-class" id="seg-class"
                    onChange={(e) => {
                        const class_option = e.target.value;
                        const class_color = classes_colors.get(class_option);
                        setBrushColor(class_color);
                    }}
                >
                    { classes_options }
                </select>
                <div className="class-color" style = {{ backgroundColor: brushColor }}></div>
            </div>

            <div className="button-bar">
                <button className="btn save"> 
                    <i className="bx bx-save" style={{ fontSize: '22px' }}></i>
                    Save 
                </button>
                <button className="btn download" 
                    onClick={(e) => {
                        var imageURI = canvasElement.current.toDataURL("image/png");
                        const downloadEl = document.createElement('a');
                        downloadEl.href = imageURI;
                        downloadEl.download = "generated-mask-image"; // name of downloaded file
                        downloadEl.click();
                        downloadEl.remove();
                    }}>
                    <i className="bx bx-download" style={{ fontSize: '22px' }}></i>
                    Download 
                </button>
            </div>
        </div>
    );

}

