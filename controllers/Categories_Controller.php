<?php
include_once("Main_Controller.php");

class Categories_Controller extends Main_Controller
{	
	function Categories_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="categories";
            
        else
            $this->redirect("login");
        
    	      
	}
    
    function index()
    {
        $this->js[]="scripts/jquery.dataTables.min";
        $this->js[]="listing";
        
        $borrar = 'categories/delete';
        $activar = 'categories/active';//activar
        $funcion = 'categories_list';//BRIDGE CONTROLLER
        
        $this->varlist = array("borrar"=>$borrar,"publicar"=>$activar,"funcion"=>$funcion);

        $this->initialize("categorias/listado");
        
        
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
              
              $where = "NOMBRE_CATEGORIA='".$_POST['NOMBRE_CATEGORIA']."'";
                
              $same = $this->Connection->DB->get_objects("categorias",$where);
              
              if(empty($same)){   
              
                  $categoria = $this->Connection->DB->create_object("categorias", $_POST);
                  
                  $categoria->estado_categoria = 0;
                  
                  $categoria->save();
                  
                  $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Datos almacenados correctamente");
                  
                  $this->status_mensajes[]= $status_message;
              
              }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
              
                $this->status_mensajes[]= $status_message;
              }
        }
                      
        $this->initialize("categorias/form_create_edit"); 
    }
    
    function info($id=""){
        if(!empty($id)){
            $data['categoria'] = $this->Connection->DB->get_object_by_id("categorias", $id);
            $data['editar'] = "info";
         }
        
        $this->loadView("categorias/info",$data);
    }
    
    function edit($id=""){
        if(!empty($id)){
            $data['categoria'] = $this->Connection->DB->get_object_by_id("categorias", $id);
            $data['editar']= "editar";
        }
        if(isset($_POST) && !empty($_POST)){
            
              $where = "NOMBRE_CATEGORIA='".$_POST['NOMBRE_CATEGORIA']."'";
                
              $same = $this->Connection->DB->get_objects("categorias",$where);
              
              if(empty($same)){  
              
                  $categoria = $this->Connection->DB->create_object("categorias", $_POST);
                  
                  $categoria->update();
                  
                  $this->redirect("categories","index");
              }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
                
                $_SESSION['status_mensajes']= $status_message;
                
                $this->redirect("categories","index");
              }
        }
        $this->loadView("categorias/info",$data);
    }
    
    function active($id=""){
        if(!empty($id)){
            $categoria = $this->Connection->DB->get_object_by_id("categorias", $id);
            
            if($categoria->estado_categoria == 0){
                $valor = 1;    
            }
            if($categoria->estado_categoria == 1){
                $valor=0;
            }
            $categoria->estado_categoria = $valor;
            $categoria->update();
            $this->redirect("categories","index");    
        }else{
            foreach($_POST['check_list'] as $ids){
                $categoria = $this->Connection->DB->get_object_by_id("categorias", $ids);
                if($categoria->estado_categoria == 0){
                    $valor = 1;    
                }
                $categoria->estado_categoria = $valor;
                $categoria->update();
            }
            $this->redirect("categories","index");
        }
    }
    
    function delete($id=""){
        if(!empty($id)){
            $categoria = $this->Connection->DB->get_object_by_id("categorias", $id);
            $categoria->delete();
            $this->redirect("categories","index");
        }else{
            foreach($_POST['check_list'] as $ids){
                $categoria = $this->Connection->DB->get_object_by_id("categorias", $ids);
                $categoria->delete();
            }
            $this->redirect("categories","index");
        }
    }
    
    
  
}
	
?>