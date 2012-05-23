<?php
include_once("Main_Controller.php");
class Users_Controller extends Main_Controller
{	
	function Users_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="users";
            
        else
            $this->redirect("login");
          
	}
    
    function index()
    {
        $this->js[]="scripts/jquery.dataTables.min";
        $this->js[]="listing";
        
        $borrar = 'users/delete';
        $activar = 'users/active';//activar
        $funcion = 'users_list';//BRIDGE CONTROLLER
        
        $this->varlist = array("borrar"=>$borrar,"publicar"=>$activar,"funcion"=>$funcion);

        $this->initialize("usuarios/listado");
        
        
    }
    
    function create()
    {   
        $this->css[]="datePicker";
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="jquery.datePicker";
        $this->js[]="date";
        $this->js[]="misc/form_create_edit";  
        $this->js[]="users/create";
        
        if(isset($_POST) && !empty($_POST)){
              $usuario = $this->Connection->DB->create_object("usuario", $_POST);
              $usuario->estado_usuario = 0;
              $usuario->save();
              
              $ultimo = $this->Connection->DB->get_last_object("usuario");
              $id = $ultimo->id_usuario;
              
              $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Datos almacenados correctamente");
              
              $this->status_mensajes[]= $status_message;
        }
                      
        $this->initialize("usuarios/form_create_edit"); 
    }
    
    function info($id=""){
        if(!empty($id)){
            $data['usuario'] = $this->Connection->DB->get_object_by_id("usuario", $id);
            $data['editar'] = "info";
         }
        
        $this->loadView("usuarios/info",$data);
    }
    
    function edit($id=""){
        if(!empty($id)){
            $data['usuario'] = $this->Connection->DB->get_object_by_id("usuario", $id);
            $data['editar']= "editar";
        }
        if(isset($_POST) && !empty($_POST)){
              $usuario = $this->Connection->DB->create_object("usuario", $_POST);
              $usuario->update();
              $this->redirect("users","index");
        }
        $this->loadView("usuarios/info",$data);
    }
    
    function active($id=""){
        if(!empty($id)){
            $usuario = $this->Connection->DB->get_object_by_id("usuario", $id);
            
            if($usuario->estado_usuario == 0){
                $valor = 1;    
            }
            if($usuario->estado_usuario == 1){
                $valor=0;
            }
            $usuario->estado_usuario = $valor;
            $usuario->update();
            $this->redirect("users","index");    
        }else{
            foreach($_POST['check_list'] as $ids){
                $usuario = $this->Connection->DB->get_object_by_id("usuario", $ids);
                if($usuario->estado_usuario == 0){
                    $valor = 1;    
                }
                $usuario->estado_usuario = $valor;
                $usuario->update();
            }
            $this->redirect("users","index");
        }
    }
    
    function delete($id=""){
        if(!empty($id)){
            $usuario = $this->Connection->DB->get_object_by_id("usuario", $id);
            $usuario->delete();
            $this->redirect("users","index");
        }else{
            foreach($_POST['check_list'] as $ids){
                $usuario = $this->Connection->DB->get_object_by_id("usuario", $ids);
                $usuario->delete();
            }
            $this->redirect("users","index");
        }
    }   
    
}
	
?>