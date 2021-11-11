import React from 'react';
// jQuery
import './GestionVentas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
  import {Table, Button, Container,
    Modal, ModalBody, ModalHeader, 
    FormGroup, ModalFooter,
      Label, Input} from 'reactstrap';
      <>
<script src="libs/jQuery/jquery.js" charset="utf-8"></script> 
<script type="text/javascript" src="libs/jQuery/jquery-ui.js" ></script> 
<script src="libs/bootstrap-date/bootstrap-datepicker.min.js" charset="utf-8"></script> 




{/* estilo */}
<link rel="stylesheet" href="libs/bootstrap-date/css/bootstrap-datepicker.css"></link>
<link rel="stylesheet" href="css/jquery-ui.min.css"></link>

</>
const data=[
    
];

class GestionVentas extends React.Component{
  state = {
    data: data,
    form: {
      idVenta: "",
      idVendedor: "",
      vendedor: "",
      fechaDelaVenta:"",
      CcCliente:"",
      cliente:"",
      valor:"",
      estado:"",
      acciones:"",
      // forms Agregar Venta
      idProductoVenta:"",
      productoSeleccionado:"",
      seleccioneCantidad:"",
      idVendedorVenta: "",
      vendedorVenta:"",
      fechaVenta:"",
      CcClienteVenta:"",
      clienteVenta:""

    },
    modalInsertar: false,
    modalEditar:false,
    modalAgregarVenta: false,
    modalEditarVenta:false
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


mostrarModalAgregarVenta=()=>{
  this.setState({modalAgregarVenta:true})
}
ocultarModalAgregarVenta=()=>{
  this.setState({modalAgregarVenta:false})
}

mostrarModalEditarVenta=(registro)=>{
  this.setState({modalEditarVenta:true, form:registro});
}
ocultarModalEditarVenta=()=>{
  this.setState({modalEditarVenta:false});
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



// Funciones Gestion de Ventas
insertar=()=>{
  var valorNuevo={...this.state.form};
  valorNuevo.idVenta=this.state.data.length+1
  valorNuevo.idVendedor=this.state.data.length+1
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
      lista[contador].vendedor=dato.vendedor;
      lista[contador].fechaDelaVenta=dato.fechaDelaVenta;
      lista[contador].CcCliente=dato.CcCliente;
      lista[contador].valor=dato.valor;
      lista[contador].estado=dato.estado;
    }
    contador++;
  })

  this.setState({data:lista , modalEditar:false});
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



// Funciones Agregar Venta
insertarVenta=()=>{
  var valorNuevoVenta={...this.state.form};
  valorNuevoVenta.idProductoVenta=this.state.data.length+1
  valorNuevoVenta.idVendedorVenta=this.state.data.length+1
  var lista=this.state.data;
  lista.push(valorNuevoVenta);
  console.log(lista)
  this.setState({data: lista, modalAgregarVenta:false})
}

editarVenta=(dato)=>{
  var contador=0;
  var lista=this.state.data;
  lista.map((registro)=>{

    if(dato.idProductoVenta===registro.idProductoVenta){
      lista[contador].productoSeleccionado=dato.productoSeleccionado;
      lista[contador].seleccioneCantidad=dato.seleccioneCantidad;
      lista[contador].idVendedorVenta=dato.idVendedorVenta;
      lista[contador].vendedorVenta=dato.vendedorVenta;
      lista[contador].fechaVenta=dato.fechaVenta;
      lista[contador].CcClienteVenta=dato.CcClienteVenta;
      lista[contador].clienteVenta=dato.clienteVenta;
 
    }
    contador++;
  })

  this.setState({data:lista , modalEditarVenta:false});
}

eliminarVenta=(dato)=>{
  var opcion=window.confirm('Esta seguro de eliminar el Producto'+ dato.idProductoVenta);
  if(opcion===true){
    var contador=0;
    var lista = this.state.data;
    lista.map((registro)=>{
    
      if(registro.idProductoVenta===dato.idProductoVenta){
        lista.splice(contador, 1);
      }
      contador++;
    })
    this.setState({data:lista});
  }
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



  render() {
    return (
      <>
        <Container>

        <center>
            <h1>Gestión de Ventas</h1>
            
        </center>

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

            {/* Gestion de Ventas */}
            <thead bgcolor="lightgray"><tr>
              <th>Id Venta</th>
              <th>Id Vendedor</th>
              <th>Vendedor</th>
              <th>Fecha de la Venta</th>
              <th>CC Cliente</th>
              <th>Cliente</th>
              <th>Valor </th>
              <th>Estado</th>
              <th>Acciones</th></tr></thead>

            <tbody>
              {this.state.data.map((elemento) => (
                <tr key={elemento.id}>
                  <td>{elemento.idVenta}</td>
                  <td>{elemento.idVendedor}</td>
                  <td>{elemento.vendedor}</td>
                  <td>{elemento.fechaDelaVenta}</td>
                  <td>{elemento.CcCliente}</td>
                  <td>{elemento.cliente}</td>
                  <td>{elemento.valor}</td>
                  <td>{elemento.estado}</td>
                  <td>{elemento.acciones}</td>
                  <td><Button color="primary" type="submit" id="editar"
                    onClick={() => this.mostrarModalEditar(elemento)}>Editar</Button></td>{" "}
                  <td><Button color="danger"
                    onClick={() => this.eliminar(elemento)}>Eliminar</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <br />
          <Button color="primary link" id="btnmodal"
            onClick={() => this.mostrarModalAgregar()}> Gestion de Venta</Button>
                <br />


            {/*Tabla Agregar Venta  */}


          <Table >
            <thead bgcolor="lightgray"><tr>
              <th>Id Producto</th>
              <th>Producto Seleccionado</th>
              <th>Cantidad</th>
              <th>Id Vendedor</th>
              <th>Vendedor</th>
              <th>Fecha de la Venta</th>
              <th>CC Cliente </th>
              <th>Cliente</th>
              <th>Acciones</th></tr></thead>

            <tbody>
              {this.state.data.map((product) => (
                <tr key={product.idProductoVenta}>
                  <td>{product.productoSeleccionado}</td>
                  <td>{product.seleccioneCantidad}</td>
                  <td>{product.idVendedorVenta}</td>
                  <td>{product.vendedorVenta}</td>
                  <td>{product.fechaVenta}</td>
                  <td>{product.CcClienteVenta}</td>
                  <td>{product.clienteVenta}</td>
   
                  <td><Button color="primary" type="submit" id="editarVenta"
                    onClick={() => this.mostrarModalEditarVenta(product)}>Editar</Button></td>{" "}
                  <td><Button color="danger"
                    onClick={() => this.eliminarVenta(product)}>Eliminar</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <br />
          <Button color="primary link" id="btnmodal"
            onClick={() => this.mostrarModalAgregarVenta()}> Agregar Venta</Button>
          <br />




          <br></br>
        </Container >
{/* Modal Boton Gestion Venta */}
        <Modal id="sand" isOpen={this.state.modalInsertar}>

          <ModalHeader>
            <div className=" p-2 bg-primary text-white">
              <h3 >Gestion Venta</h3>
            </div>
          </ModalHeader>

          <ModalBody>
 
            <FormGroup>
              <Label>Id Venta</Label>
              <Input className="form-control"
                readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <Label>Id Vendedor</Label>
              <Input className="form-control"
                readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Vendedor</Label>
              <Input className="form-control"
                name="vendedor" type="text" onChange={this.handleChange} />
            </FormGroup>

            
            <FormGroup>
              <Label>Fecha de Venta</Label>
              <Input className="form-control"
                name="fechaDelaVenta" type="text" onChange={this.handleChange} />
            </FormGroup>

            

            <FormGroup>
              <Label>CC Cliente</Label>
              <Input className="form-control"
                name="CcCliente" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Cliente</Label>
              <Input className="form-control"
                name="cliente" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Valor</Label>
              <Input className="form-control"
                name="valor" type="number" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Estado</Label>
              <div class="form-group">
                <label for="estado" class="col-sm-3 control-label"></label>
                <div class="col-sm-8">
                  <select class="form-control" id="estado" name="estado" onChange={this.handleChange} value={this.state.form.estado} required>
                    <option value="">Seleccione el estado</option>
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                  </select>
                </div>
              </div>
            </FormGroup>

            

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>Agregar</Button>
            <Button color="danger" onClick={() => this.ocultarModalAgregar()}>Cancelar</Button>
          </ModalFooter>

        </Modal>

        {/* Modal Boton editar Gestion Venta*/}

        <Modal isOpen={this.state.modalEditar}>

          <ModalHeader>
            <div>
              <h3>Editar Gestion De Venta</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label>Id Venta</Label>
              <Input className="form-control"
                readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <Label>Id del Vendedor</Label>
              <Input className="form-control"
                readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Vendedor</Label>
              <Input className="form-control"
                name="vendedor" type="text" onChange={this.handleChange} />
            </FormGroup>


            <FormGroup>
              <Label>Fecha de Venta</Label>
              <Input className="form-control"
                name="fechaDelaVenta" type="text" onChange={this.handleChange} />
            </FormGroup>


            <FormGroup>
              <Label>CC Cliente</Label>
              <Input className="form-control"
                name="CcCliente" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Cliente</Label>
              <Input className="form-control"
                name="cliente" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Valor</Label>
              <Input className="form-control"
                name="valor" type="number" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Estado</Label>
              <div class="form-group">
                <label for="estado" class="col-sm-3 control-label"></label>
                <div class="col-sm-8">
                  <select class="form-control" id="estado" name="estado" onChange={this.handleChange} value={this.state.form.estado} required>
                    <option value="">Seleccione el estado</option>
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                  </select>
                </div>
              </div>
            </FormGroup>


          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)} >Editar</Button>
            <Button color="danger" onClick={() => this.ocultarModalEditar()}>Cancelar</Button>
          </ModalFooter>

        </Modal>



{/* Modal  Boton Agregar Venta*/}
        <Modal isOpen={this.state.modalAgregarVenta}>

          <ModalHeader>
            <div className=" p-2 bg-primary text-white">
              <h3 >Agregar Venta</h3>
            </div>
          </ModalHeader>

          <ModalBody>

            <FormGroup>
              <Label>Id del Producto</Label>
              <Input className="form-control"
                readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>
      
            {/* pendiente agregar un select */}
            <FormGroup>
              <Label>Producto Seleccionado</Label>
              <Input className="form-control"
                name="productoSeleccionado" type="text" onChange={this.handleChange} />
            </FormGroup>

            {/* pendiente agregar un select */}
            <FormGroup>
              <Label>Seleccione la Cantidad</Label>
              <Input className="form-control"
                name="seleccioneCantidad" type="number" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Id del Vendedor</Label>
              <Input className="form-control"
                readOnly type="text" name="idVendedorVenta" value={this.state.data.length + 1} />
            </FormGroup>

  
            <FormGroup>
              <Label>Nombre del Vendedor</Label>
              <Input className="form-control"
                name="vendedorVenta" type="text" onChange={this.handleChange} />
            </FormGroup>


            <FormGroup>
              <Label>Fecha de Venta</Label>
              <Input className="form-control"
                name="fechaVenta" type="text" onChange={this.handleChange} />
            </FormGroup>


            <FormGroup>
              <Label>CC Cliente</Label>
              <Input className="form-control"
                name="CcClienteVenta" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Cliente</Label>
              <Input className="form-control"
                name="clienteVenta" type="text" onChange={this.handleChange} />
            </FormGroup>


          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertarVenta()}>Agregar</Button>
            <Button color="danger" onClick={() => this.ocultarModalAgregarVenta()}>Cancelar</Button>
          </ModalFooter>

        </Modal>


        {/* Modal Editar Agregar Venta*/}



        <Modal isOpen={this.state.modalEditarVenta}>

          <ModalHeader>
            <div>
              <h3>Editar Venta</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label>Id del Producto</Label>
              <Input className="form-control"
                readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            {/* pendiente agregar un select */}
            <FormGroup>
              <Label>Producto Seleccionado</Label>
              <Input className="form-control"
                name="productoSeleccionado" type="text" onChange={this.handleChange} />
            </FormGroup>
  
            {/* pendiente agregar un select */}
            <FormGroup>
              <Label>Seleccione la Cantidad</Label>
              <Input className="form-control"
                name="seleccioneCantidad" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Id del Vendedor</Label>
              <Input className="form-control"
                readOnly type="text" name="idVendedorVenta" value={this.state.data.length + 1} />
            </FormGroup>


            <FormGroup>
              <Label>Fecha de Venta</Label>
              <Input className="form-control"
                name="fechaVenta" type="text" onChange={this.handleChange} />
            </FormGroup>


            <FormGroup>
              <Label>Nombre del Vendedor</Label>
              <Input className="form-control"
                name="vendedorVenta" type="text" onChange={this.handleChange} />
            </FormGroup>


            <FormGroup>
              <Label>CC Cliente</Label>
              <Input className="form-control"
                name="CcClienteVenta" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Nombre del Cliente</Label>
              <Input className="form-control"
                name="clienteVenta" type="text" onChange={this.handleChange} />
            </FormGroup>

         
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editarVenta(this.state.form)} >Editar</Button>
            <Button color="danger" onClick={() => this.ocultarModalEditarVenta()}>Cancelar</Button>
          </ModalFooter>

        </Modal>



      </>
    );
  }
}

export default GestionVentas;