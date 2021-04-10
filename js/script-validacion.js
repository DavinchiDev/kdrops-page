function getInputValue(){
    let inputVal = document.getElementById("myInput").value;
    if (inputVal === "123-21" || inputVal === "154-2" || inputVal === "1235-1"){
    document.getElementById("alertaValidacion").innerHTML = "El Producto que usted Compro es <strong>Original.</strong>";
    document.getElementById("alertaValidacion").className = " alert alert-success";
    } else {
    document.getElementById("alertaValidacion").innerHTML = "El producto que adquirio <strong>No es Original. </strong> podria ser una falsificacion";
    document.getElementById("alertaValidacion").className = " alert alert-danger";
    }
  }