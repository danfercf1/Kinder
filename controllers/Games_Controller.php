<?php
include_once("Main_Controller.php");

class Games_Controller extends Main_Controller
{	
	function Games_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="games";
            
        else
            $this->redirect("login");
     	      
	}
    
    function index()
    {
        $this->js[]="scripts/jquery.dataTables.min";
        $this->js[]="listing";
        
        $borrar = 'games/delete';
        $activar = 'games/active';//activar
        $funcion = 'games_list';//BRIDGE CONTROLLER
        
        $this->varlist = array("borrar"=>$borrar,"publicar"=>$activar,"funcion"=>$funcion);

        $this->initialize("juegos/listado");
        
        
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
              
              $where = "NOMBRE_JUEGO='".$_POST['NOMBRE_JUEGO']."'";
                
              $same = $this->Connection->DB->get_objects("juegos",$where);
              
              if(empty($same)){  
                
                  $juego = $this->Connection->DB->create_object("juegos", $_POST);
                  
                  $juego->save();
                  
                  $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Datos almacenados correctamente");
                  
                  $this->status_mensajes[]= $status_message;
                  
              }else{
                
                  $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
              
                  $this->status_mensajes[]= $status_message;  
              }
        }
                      
        $this->initialize("juegos/form_create_edit"); 
    }
    
    function info($id=""){
        if(!empty($id)){
            $data['juego'] = $this->Connection->DB->get_object_by_id("juegos", $id);
            $data['editar'] = "info";
         }
        
        $this->loadView("juegos/info",$data);
    }
    
    function edit($id=""){
        if(!empty($id)){
            $data['juego'] = $this->Connection->DB->get_object_by_id("juegos", $id);
            $data['editar']= "editar";
        }
        if(isset($_POST) && !empty($_POST)){
              
              $where = "NOMBRE_JUEGO='".$_POST['NOMBRE_JUEGO']."'";
                
              $same = $this->Connection->DB->get_objects("juegos",$where);
              
              if(empty($same)){
                  
                  $juego = $this->Connection->DB->create_object("juegos", $_POST);
                  
                  $juego->update();
                  
                  $this->redirect("games","index");
              }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
                
                $_SESSION['status_mensajes']= $status_message;
                
                $this->redirect("games","index");
                
              }
        }
        $this->loadView("juegos/info",$data);
    }
    
    function active($id=""){
        if(!empty($id)){
            $juego = $this->Connection->DB->get_object_by_id("juegos", $id);
            
            if($juego->estado_juego == 0){
                $valor = 1;    
            }
            if($juego->estado_juego == 1){
                $valor=0;
            }
            $juego->estado_juego = $valor;
            $juego->update();
            $this->redirect("games","index");    
        }else{
            foreach($_POST['check_list'] as $ids){
                $juego = $this->Connection->DB->get_object_by_id("juegos", $ids);
                if($juego->estado_juego == 0){
                    $valor = 1;    
                }
                $juego->estado_juego = $valor;
                $juego->update();
            }
            $this->redirect("games","index");
        }
    }
    
    function delete($id=""){
        if(!empty($id)){
            $juego = $this->Connection->DB->get_object_by_id("juegos", $id);
            $juego->delete();
            $this->redirect("games","index");
        }else{
            foreach($_POST['check_list'] as $ids){
                $juego = $this->Connection->DB->get_object_by_id("juegos", $ids);
                $juego->delete();
            }
            $this->redirect("games","index");
        }
    }
    
    
  
}
	
?>