<?php
include_once("Main_Controller.php");

class Products_Controller extends Main_Controller
{	
	function Products_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="products";
            
        else
            $this->redirect("login");
              
	}
    
    function index()
    {
        $this->js[]="scripts/jquery.dataTables.min";
        $this->js[]="listing";
        
        
        $borrar = 'products/delete';
        $activar = 'products/active';//activar
        $funcion = 'products_list';//BRIDGE CONTROLLER
        
        $this->varlist = array("borrar"=>$borrar,"publicar"=>$activar,"funcion"=>$funcion);

        $this->initialize("productos/listado");
        
        
    }
    
    function create()
    {   
        $this->css[]="datePicker";
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="jquery.datePicker";
        $this->js[]="date";
        $this->js[]="misc/form_create_edit";  
        $this->js[]="misc/create";
        
        if(isset($_POST) && !empty($_POST)){
            
              $where = "NOMBRE_PRODUCTO='".$_POST['NOMBRE_PRODUCTO']."'";
                
              $same = $this->Connection->DB->get_objects("productos",$where);
              
              if(empty($same)){  
            
                  $producto = $this->Connection->DB->create_object("productos", $_POST);
                  
                  $image = $this->Utility->uploadFile("IMAGEN_PRODUCTO","../images/productos/");
                  
                  $nom_imagen = end(explode('/',$image['name']));
                  
                  $producto->imagen_producto = $nom_imagen;
                  
                  $producto->descripcion_producto = htmlspecialchars($_POST['DESCRIPCION_PRODUCTO'],ENT_QUOTES);
                  
                  $producto->save();
                  
                  $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Datos almacenados correctamente");
                  
                  $this->status_mensajes[]= $status_message;
              }else{
                
                  $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
              
                  $this->status_mensajes[]= $status_message; 
              }
        }
                      
        $this->initialize("productos/form_create_edit"); 
    }
    
    function info($id=""){
        if(!empty($id)){
            $data['producto'] = $this->Connection->DB->get_object_by_id("productos", $id);
            $data['editar'] = "info";
         }
        
        $this->loadView("productos/info",$data);
    }
    
    function edit($id=""){
        if(!empty($id)){
            $data['producto'] = $this->Connection->DB->get_object_by_id("productos", $id);
            $data['editar']= "editar";
        }
        if(isset($_POST) && !empty($_POST)){
            
              $where = "NOMBRE_PRODUCTO='".$_POST['NOMBRE_PRODUCTO']."'";
                
              $same = $this->Connection->DB->get_objects("productos",$where);
              
              if(true){
                 
                  $producto = $this->Connection->DB->create_object("productos", $_POST);
                  
                  $producto->descripcion_producto = htmlspecialchars($_POST['DESCRIPCION_PRODUCTO'],ENT_QUOTES);
                  
                  if($_POST['IMAGEN_PRODUCTO']!=' '){
                    
                      $image = $this->Utility->uploadFile("IMAGEN_PRODUCTO","../images/productos/");
                      
                      
                      $nom_imagen = end(explode('/',$image['name']));
                      
                      $producto->imagen_producto = $nom_imagen;
                  }
                  
                  $producto->update();
                  
                  $this->redirect("products","index");
              }else{
                
                  $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
                
                  $_SESSION['status_mensajes']= $status_message;
                    
                  $this->redirect("products","index");
              }
        }
        $this->loadView("productos/info",$data);
    }
    
    function active($id=""){
        if(!empty($id)){
            $producto = $this->Connection->DB->get_object_by_id("productos", $id);
            
            if($producto->estado_producto == 0){
                $valor = 1;    
            }
            if($producto->estado_producto == 1){
                $valor=0;
            }
            $producto->estado_producto = $valor;
            $producto->update();
            $this->redirect("products","index");    
        }else{
            foreach($_POST['check_list'] as $ids){
                $producto = $this->Connection->DB->get_object_by_id("productos", $ids);
                if($producto->estado_producto == 0){
                    $valor = 1;    
                }
                $producto->estado_producto = $valor;
                $producto->update();
            }
            $this->redirect("products","index");
        }
    }
    
    function delete($id=""){
        
        $url = '../images/productos/';
        
        if(!empty($id)){
            
            $producto = $this->Connection->DB->get_object_by_id("productos", $id);
            
            unlink($url.$producto->imagen_producto);
            
            $producto->delete();
            
            $this->redirect("products","index");
        }else{
            
            foreach($_POST['check_list'] as $ids){
                $producto = $this->Connection->DB->get_object_by_id("productos", $ids);
                unlink($url.$producto->imagen_producto);
                $producto->delete();
            }
            $this->redirect("products","index");
        }
    }
    
    
  
}
	
?>