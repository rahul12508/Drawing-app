
import {ReactPainter} from 'react-painter';
import './Draw.css';

const Draw = () => {
    
  return (

    <div>

        <>

 <ReactPainter 
  width={1000}
  height={600}

  render={({ canvas, save,  setColor, setLineWidth, setLineCap, setLineJoin, imageDownloadUrl, setEraser }) => (
    
   
    <div className='tool-box' >
    <h1>Drawing App</h1>
    <p>Draw whatever you want</p>

     <div className="tools">

        <div className="tool">
            <label htmlFor="">Colors</label>
            <input type="color"  onChange={(e) => setColor(e.target.value)} />
        </div>

  <div className="tool">
    <label htmlFor="">Brush-Size</label>
    <input type="range" defaultValue={1} min={"1"} max={"50"} onChange={(e) => setLineWidth(e.target.value)} />
  </div>

   <div className="tool">
    <label htmlFor=""></label>
   </div>

   <div className="tool">
    <label htmlFor="">Line-Cap</label>
   <select name="" id="" onChange={(e) => setLineCap(e.target.value)}  >

   <option value="round">Round</option>
   <option value="butt">Butt</option>
   <option value="square">Square</option>   
   </select>
   </div>

   <div className="tool">
    <label htmlFor="">Line-Join</label>
    <select name="" id="" onChange={(e) => setLineJoin(e.target.value)} >

        <option value="round">Round</option>
        <option value="bevel">Bevel</option>
        <option value="miter">Miter</option>
    </select>
   </div>

     </div>

  
     <div className="canvas">
     <div className='cann' > {canvas}</div>
     </div>

         </div>
      
  )}
 

 />

</>
     </div>
  )
}

export default Draw