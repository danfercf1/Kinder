<?php
include_once("Main_Controller.php");
class Events_Controller extends Main_Controller
{	
	function Events_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="events";
            
        else
            $this->redirect("login");
               
	}
    
    function index()
    {
        $this->css[]="datePicker";
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="jquery.datePicker";
        $this->js[]="date";
        $this->js[]="misc/form_create_edit";
        $this->js[]="misc/create";
            
        $this->js[]="scripts/jquery.dataTables.min";
        $this->js[]="listing";
        
        $borrar = 'events/delete';
        $activar = 'events/active';//activar
        $funcion = 'events_list';//BRIDGE CONTROLLER
        
        $this->varlist = array("borrar"=>$borrar,"publicar"=>$activar,"funcion"=>$funcion);

        $this->initialize("eventos/listado");
     
    }
    
    function create()
    {   
        $this->css[]="datePicker";
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="jquery.datePicker";
        $this->js[]="date";
        $this->js[]="misc/form_create_edit";
        $this->js[]="events/create";
        
        
        if(isset($_POST) && !empty($_POST)){
            
              $where = "NOMBRE_EVENTO='".$_POST['NOMBRE_EVENTO']."'";
                
              $same = $this->Connection->DB->get_objects("evento",$where);
              
              if(empty($same)){
                
                  $replace = explode("/",$_POST['FECHA_EVENTO'],3);
                  
                  $fecha = $replace[2]."-".$replace[1]."-".$replace[0];
                                
                  $evento = $this->Connection->DB->create_object("evento", $_POST);
                  
                  $evento->fecha_evento= $fecha;
                  
                  $evento->save();
                  
                  $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Datos almacenados correctamente");
                  
                  $this->status_mensajes[]= $status_message;
              }else{
                  
                  $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
              
                  $this->status_mensajes[]= $status_message;
                    
              }
        }
                      
        $this->initialize("eventos/form_create_edit"); 
    }
    
    function info($id=""){
        $this->css[]="datePicker";
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="jquery.datePicker";
        $this->js[]="date";
        $this->js[]="events/create";
        
        if(!empty($id)){
            $data['evento'] = $this->Connection->DB->get_object_by_id("evento", $id);
            $data['editar'] = "info";
         }
        
        $this->loadView("eventos/info",$data);
    }
    
    function edit($id=""){
        $this->js[]="misc/form_create_edit";
        if(!empty($id)){
            $data['evento'] = $this->Connection->DB->get_object_by_id("evento", $id);
            $data['editar']= "editar";
        }
        if(isset($_POST) && !empty($_POST)){
              $where = "NOMBRE_EVENTO='".$_POST['NOMBRE_EVENTO']."'";
                
              $same = $this->Connection->DB->get_objects("evento",$where);
              
              if(empty($same)){
                
                  $evento = $this->Connection->DB->create_object("evento", $_POST);
                  $replace = explode("/",$_POST['FECHA_EVENTO'],3);
                  $fecha = $replace[2]."-".$replace[1]."-".$replace[0];
                  $evento->fecha_evento = $fecha;
                  $evento->update();
                  $this->redirect("events","index");
              }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
                
                $_SESSION['status_mensajes']= $status_message;
                
                $this->redirect("events","index");
                
              }
        }
        $this->loadView("eventos/info",$data);
    }
    
    function active($id=""){
        if(!empty($id)){
            $evento = $this->Connection->DB->get_object_by_id("evento", $id);
            
            if($evento->estado_encuesta == 0){
                $valor = 1;    
            }
            if($evento->estado_encuesta == 1){
                $valor=0;
            }
            $evento->estado_encuesta = $valor;
            $evento->update();
            $this->redirect("events","index");    
        }else{
            foreach($_POST['check_list'] as $ids){
                $evento = $this->Connection->DB->get_object_by_id("eventos", $ids);
                if($evento->estado_encuesta == 0){
                    $valor = 1;    
                }
                $evento->estado_encuesta = $valor;
                $evento->update();
            }
            $this->redirect("events","index");
        }
    }
    
    function delete($id=""){
        if(!empty($id)){
            $evento = $this->Connection->DB->get_object_by_id("evento", $id);
            $evento->delete();
            $this->redirect("events","index");
        }else{
            foreach($_POST['check_list'] as $ids){
                $evento = $this->Connection->DB->get_object_by_id("evento", $ids);
                $evento->delete();
            }
            $this->redirect("events","index");
        }
    }   
    
}
	
?>