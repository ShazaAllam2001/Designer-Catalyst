import { useEffect, useRef, useState } from "react";

import './DrawPlane.css';
import { DrawToolBar } from "../DrawToolBar/DrawToolBar.js";

export function DrawPlane() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineColor, setLineColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(5);
  const [brushColor, setBrushColor] = useState("black");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = brushColor;
    ctxRef.current = ctx;
  }, [lineColor, lineWidth, brushColor]);

  function startDrawing(e) {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  }

  function endDrawing() {
    ctxRef.current.closePath();
    ctxRef.current.fill();
    setIsDrawing(false);
  }

  function draw(e) {
    if(!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
    ctxRef.current.stroke();
  }

  return (
    <div className="draw-plane">
        <DrawToolBar
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setBrushColor={setBrushColor}
          brushColor={brushColor}
        />
        <canvas className="canvas-plane"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={`1200px`}
          height={`540px`}
        />
    </div>
  );
}

