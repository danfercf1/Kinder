<?php
include_once("Main_Controller.php");
class Polls_Controller extends Main_Controller
{	
	function Polls_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="polls";
            
        else
            $this->redirect("login");
           
	}
    
    function index()
    {
        $this->js[]="scripts/jquery.dataTables.min";
        $this->js[]="listing";
        
        $borrar = 'polls/delete';
        $activar = 'polls/active';//activar
        $funcion = 'polls_list';//BRIDGE CONTROLLER
        
        $this->varlist = array("borrar"=>$borrar,"publicar"=>$activar,"funcion"=>$funcion);

        $this->initialize("encuestas/listado");
        
        
    }
    
    function create()
    {   
        $this->css[]="datePicker";
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="jquery.datePicker";
        $this->js[]="date";
        $this->js[]="misc/form_create_edit";  
        $this->js[]="polls/create";
        
        if(isset($_POST) && !empty($_POST)){
              
              $where = "NOMBRE_ENCUESTA='".$_POST['NOMBRE_ENCUESTA']."'";
                
              $same = $this->Connection->DB->get_objects("encuestas",$where);
              
              if(empty($same)){
                
                  $encuesta = $this->Connection->DB->create_object("encuestas", $_POST);
                  $encuesta->estado_encuesta = 0;
                  $encuesta->save();
                  
                  $ultimo = $this->Connection->DB->get_last_object("encuestas");
                  $id = $ultimo->id_encuesta;
                  
                  foreach($_POST['NOMBRE_OPCION'] as $valor){
                    $opcion = $this->Connection->DB->create_object("opcion");
                    $opcion->id_encuesta = $id;
                    $opcion->nombre_opcion = $valor;
                    $opcion->save();
                  }
                  
                  $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Datos almacenados correctamente");
                  
                  $this->status_mensajes[]= $status_message;
                  
              }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
              
                $this->status_mensajes[]= $status_message;
                
              }
        }
                      
        $this->initialize("encuestas/form_create_edit"); 
    }
    
    function info($id=""){
        if(!empty($id)){
            $data['encuesta'] = $this->Connection->DB->get_object_by_id("encuestas", $id);
            $data['editar'] = "info";
         }
        
        $this->loadView("encuestas/info",$data);
    }
    
    function edit($id=""){
        if(!empty($id)){
            $data['encuesta'] = $this->Connection->DB->get_object_by_id("encuestas", $id);
            $data['editar']= "editar";
        }
        if(isset($_POST) && !empty($_POST)){
            $where = "NOMBRE_ENCUESTA='".$_POST['NOMBRE_ENCUESTA']."'";
                
            $same = $this->Connection->DB->get_objects("encuestas",$where);
              
            if(empty($same)){
              $encuesta = $this->Connection->DB->create_object("encuestas", $_POST);
              $encuesta->update();
              $this->redirect("polls","index");
            }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
                
                $_SESSION['status_mensajes']= $status_message;
                
                $this->redirect("polls","index");
            }
        }
        $this->loadView("encuestas/info",$data);
    }
    
    function active($id=""){
        if(!empty($id)){
            $encuesta = $this->Connection->DB->get_object_by_id("encuestas", $id);
            
            if($encuesta->estado_encuesta == 0){
                $valor = 1;    
            }
            if($encuesta->estado_encuesta == 1){
                $valor=0;
            }
            $encuesta->estado_encuesta = $valor;
            $encuesta->update();
            $this->redirect("polls","index");    
        }else{
            foreach($_POST['check_list'] as $ids){
                $encuesta = $this->Connection->DB->get_object_by_id("encuestas", $ids);
                if($encuesta->estado_encuesta == 0){
                    $valor = 1;    
                }
                $encuesta->estado_encuesta = $valor;
                $encuesta->update();
            }
            $this->redirect("polls","index");
        }
    }
    
    function delete($id=""){
        if(!empty($id)){
            $encuesta = $this->Connection->DB->get_object_by_id("encuestas", $id);
            $encuesta->delete();
            $this->redirect("polls","index");
        }else{
            foreach($_POST['check_list'] as $ids){
                $encuesta = $this->Connection->DB->get_object_by_id("encuestas", $ids);
                $encuesta->delete();
            }
            $this->redirect("polls","index");
        }
    }   
    
}
	
?>