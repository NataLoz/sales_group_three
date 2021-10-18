import React from 'react';
import './GestionProductos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
  import {Table, Button, Container,
    Modal, ModalBody, ModalHeader, 
    FormGroup, ModalFooter,
      Label, Input} from 'reactstrap';

const data=[
    
];

class GestionProductos extends React.Component{
  state = {
    data: data,
    form: {
      id: "",
      nombredelproducto: "",
      valorunitario: "",
      estado:""
    },
    modalInsertar: false,
    modalEditar:false,
  };

handleChange=e=>{
this.setState({
  form:{
    ...this.state.form,
    [e.target.name]:e.target.value,
  }
});


}
mostrarModalAgregar=()=>{
  this.setState({modalInsertar:true});
}
ocultarModalAgregar=()=>{
  this.setState({modalInsertar:false});
}

mostrarModalEditar=(registro)=>{
  this.setState({modalEditar:true, form:registro});
}
ocultarModalEditar=()=>{
  this.setState({modalEditar:false});
}

buscar = function(){
  window.onload=function(){
  const formulario= document.querySelector('buscar')
  const resultado=document.querySelector('resultado')
  const boton=document.querySelector('buscarproducto')
  const filtrar=()=>{
    // console.log(formulario.value)
    resultado.innerHTML='';
    const texto=formulario.value.toLowerCase()
    for (let  producto of data){
      let nombredelproducto= data.producto.nombredelproducto.toLowerCase()
      if (data.nombredelproducto.indexOf(texto)!==-1){
        resultado.innerHTML+=`
        <li>${data.producto.nombredelproducto}-
         valorunitario: ${data.producto.valorunitario}</li>`

      }
    }
    if(resultado.innerHTML===''){
      resultado.innerHTML+=`
        <li>Producto No Encontrado... </li>`

    }
  }
  boton.addEventListener('click', filtrar)
  formulario.addEventListener('keyup', filtrar)
  filtrar(data);
}
}

insertar=()=>{
  var valorNuevo={...this.state.form};
  valorNuevo.id=this.state.data.length+1
  var lista=this.state.data;
  lista.push(valorNuevo);
  console.log(lista)
  this.setState({data: lista, modalInsertar:false})
}

editar=(dato)=>{
  var contador=0;
  var lista=this.state.data;
  lista.map((registro)=>{

    if(dato.id===registro.id){
      lista[contador].nombredelproducto=dato.nombredelproducto;
      lista[contador].valorunitario=dato.valorunitario;
      lista[contador].estado=dato.estado;
    }
    contador++;
  })

  this.setState({data:lista , modalEditar:false});
}

validarestado= function(){
  var i=0
  var estado=''

var validar = document.estado.estado
for (i=0; i<validar.length; i++){
  if(validar[i].checked){
    var producto=validar[i].value;
        alert(producto);
  }
  if(producto===true){
    estado="Disponible"
  }else if(producto===false){
    estado="No Disponible"
  }else{
    console.log('No ha marcado el estado')
  }
  
}
this.setState({data:estado , modalEditar:false});
}

eliminar=(dato)=>{
  var opcion=window.confirm('Esta seguro de eliminar el Producto'+ dato.id);
  if(opcion===true){
    var contador=0;
    var lista = this.state.data;
    lista.map((registro)=>{
    
      if(registro.id===dato.id){
        lista.splice(contador, 1);
      }
      contador++;
    })
    this.setState({data:lista});
  }
}

  render() {
    return (
      <>
        <Container>
        <center>
            <h1>Gestión de Productos</h1>
        </center>
          <br />
          <Button color="primary link"
            onClick={() => this.mostrarModalAgregar()}> Agregar Nuevo Producto</Button>

          <br></br>
          {/*Boton de buscar  */}
          <br></br>
          <div className="input-group mb-3">
            <input type="text" id="buscar" className="form-control" placeholder="Buscar producto"
              aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text"
                type="button" name="btnBuscar"
                id="buscarproducto" onClick={'buscar'} >Buscar</span>
            </div>
          </div>
          <ul id="resultado">
            <li> </li>
          </ul>

          <Table >
            <thead bgcolor="lightgray"><tr>
              <th>Id</th>
              <th>Nombre del Producto</th>
              <th>Valor Unitario</th>
              <th>Estado</th>
              <th>Acciones</th></tr></thead>

            <tbody>
              {this.state.data.map((elemento) => (
                <tr key={elemento.id}>
                  <td>{elemento.id}</td>
                  <td>{elemento.nombredelproducto}</td>
                  <td>{elemento.valorunitario}</td>
                  <td>{elemento.estado}</td>
                  <td><Button color="primary" type="submit" id="editar"
                    onClick={() => this.mostrarModalEditar(elemento)}>Editar</Button></td>{" "}
                  <td><Button color="danger"
                    onClick={() => this.eliminar(elemento)}>Eliminar</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>

          <ModalHeader>
            <div className=" p-2 bg-primary text-white">
              <h3 >Agregar Producto</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label>Id</Label>
              <Input className="form-control"
                readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Producto</Label>
              <Input className="form-control"
                name="nombredelproducto" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Valor Unitario</Label>
              <Input className="form-control"
                name="valorunitario" type="text" onChange={this.handleChange} />
            </FormGroup>
            
            <FormGroup>
              <Label></Label>
              <form name="estado">
                <b>Estado:</b>&nbsp;&nbsp;&nbsp;
                <input type="radio"  name="estado"
                  value="Disponible" onClick={() => this.validarestado} />
                <label for="activo">Disponible&nbsp;&nbsp;&nbsp;</label>
                <input type="radio"  name="estado"
                  value="No disponible" onClick={() => this.validarestado}  />
                <label for="inactivo">No Disponible</label>
              </form>

            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>Agregar</Button>
            <Button color="danger" onClick={() => this.ocultarModalAgregar()}>Cancelar</Button>
          </ModalFooter>

        </Modal>

        <Modal isOpen={this.state.modalEditar}>

          <ModalHeader>
            <div>
              <h3>Editar Producto</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label>Id</Label>
              <Input className="form-control" readOnly type="text" value={this.state.form.id} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Producto</Label>
              <Input className="form-control"
                name="nombredelproducto" type="text"
                onChange={this.handleChange} value={this.state.form.nombredelproducto} />
            </FormGroup>

            <FormGroup>
              <Label>Valor Unitario</Label>
              <Input className="form-control"
                name="valorunitario" type="text"
                onChange={this.handleChange} value={this.state.form.valorunitario} />
            </FormGroup>

            <FormGroup>
              <Label></Label>
              <form name="estado">
                <b>Estado:</b>&nbsp;&nbsp;&nbsp;
                <input type="radio"  name="estado"
                  value="Disponible" onClick={() => this.validarestado}  />
                <label for="activo">Disponible&nbsp;&nbsp;&nbsp;</label>
                <input type="radio"  name="estado"
                  value="No disponible" onClick={() => this.validarestado}  />
                <label for="inactivo">No Disponible</label>
              </form>

            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)} >Editar</Button>
            <Button color="danger" onClick={() => this.ocultarModalEditar()}>Cancelar</Button>
          </ModalFooter>

        </Modal>

      </>
    );
  }
}

export default GestionProductos;