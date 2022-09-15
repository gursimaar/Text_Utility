import React from "react";

function alert(props) {
    const caplitilize=(text)=>{
        return text[0].toUpperCase()+text.slice(1).toLowerCase()
        
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{caplitilize(props.alert.type)}</strong>:{props.alert.msg}
    </div>}
    </div>
  );
}

export default alert;
