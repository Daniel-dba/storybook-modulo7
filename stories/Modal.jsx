
import React from "react"
import './Modal.css'

export default function Modal({
  close, isOpen, aceptar,save,cancel, contenido
}){
  if(!isOpen)
  {
    return null;
  }
   return(

	 <div className="Modal">
	 	<div className = "modal"> 
		  <div className = "modal-content"> 
	 	    <div className = "modal-header"> 
			    <h3 className = "modal-title">Modal title</h3> 
		    </div>
	 	      <div className = "modal-body">{contenido}</div>
 	 	        <div className = "modal"> 
              <button className="button" onClick={aceptar} >aceptar</button>
              <button className="button" onClick={cancel}>Cancel</button>
	 		          <button className="button" onClick={close}>Close</button>
                 <button className="button" onClick={save}>save</button>
	 	        </div>
	 	  </div>
	   </div>
	 </div>
  );
}
