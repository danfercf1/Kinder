<?php
include_once("Main_Controller.php");

class Surprises_Controller extends Main_Controller
{	
	function Surprises_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="surprises";
            
        else
            $this->redirect("login");
        
        
    }
    
    function index()
    {
        $this->js[]="scripts/jquery.dataTables.min";
        $this->js[]="listing";
        
        $borrar = 'surprises/delete';
        $activar = 'surprises/active';//activar
        $funcion = 'surprises_list';//BRIDGE CONTROLLER
        
        $this->varlist = array("borrar"=>$borrar,"publicar"=>$activar,"funcion"=>$funcion);

        $this->initialize("sorpresas/listado");
        
        
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
        
        $where = "ESTADO_CATEGORIA=1";
        $order = "NOMBRE_CATEGORIA ASC";
        $data['categoria'] = $this->Connection->DB->get_objects("categorias",$where,$order);
        
        
        if(isset($_POST) && !empty($_POST)){
                
              $where = "NOMBRE_SORPRESA='".$_POST['NOMBRE_SORPRESA']."'";
                
              $same = $this->Connection->DB->get_objects("sorpresas",$where);
              
              if(true){
              
                  $File = new FD_ResizeImage();  
                  
                  $sorpresa = $this->Connection->DB->create_object("sorpresas", $_POST);
                  
                  $image = $this->Utility->uploadFile("IMAGEN_SORPRESA","../images/sorpresas/");
                  
                  $nom_imagen = end(explode('/',$image['name']));
                  
                  /*list($width, $height, $type, $attr) = getimagesize($image["name"]);
                        
                        if($width>150 && $height>150){
                            $File->load($image["name"]);
                            $File->resizeToWidth(150);
                            $File->save($image["name"]);
                            $File->load($image["name"]);
                            $File->resizeToHeight(150);
                            $File->save($image["name"]);
                        }
                  */
                  
                  $sorpresa->imagen_sorpresa = $nom_imagen;
                  
                  $sorpresa->save();
                  
                  $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Datos almacenados correctamente");
                  
                  $this->status_mensajes[]= $status_message;
              }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
              
                $this->status_mensajes[]= $status_message;
              }
        }
                      
        $this->initialize("sorpresas/form_create_edit",$data); 
    }
    
    function info($id=""){
        if(!empty($id)){
            $data['sorpresa'] = $this->Connection->DB->get_object_by_id("sorpresas", $id);
            $where = "ESTADO_CATEGORIA=1";
            $order = "NOMBRE_CATEGORIA ASC";
            $data['categoria'] = $this->Connection->DB->get_objects("categorias",$where,$order);
            $data['editar'] = "info";
         }
        
        $this->loadView("sorpresas/info",$data);
    }
    
    function edit($id=""){
        if(!empty($id)){
            $data['sorpresa'] = $this->Connection->DB->get_object_by_id("sorpresas", $id);
            $where = "ESTADO_CATEGORIA=1";
            $order = "NOMBRE_CATEGORIA ASC";
            $data['categoria'] = $this->Connection->DB->get_objects("categorias",$where,$order);
            $data['editar']= "editar";
            
        }
        if(isset($_POST) && !empty($_POST)){
              
              $where = "NOMBRE_SORPRESA='".$_POST['NOMBRE_SORPRESA']."'";
                
              $same = $this->Connection->DB->get_objects("sorpresas",$where);
              
              if($same->id_sorpresa == $id){
              
                  $File = new FD_ResizeImage();  
                
                  $sorpresa = $this->Connection->DB->create_object("sorpresas", $_POST);
                  
                  $sorpresa->nombre_sorpresa = $data['sorpresa']->nombre_sorpresa;
                  
                  if($_POST['IMAGEN_SORPRESA']!=' '){
                      
                      $image = $this->Utility->uploadFile("IMAGEN_SORPRESA","../images/sorpresas/");
                      
                      $nom_imagen = end(explode('/',$image['name']));
                      
                      /*list($width, $height, $type, $attr) = getimagesize($image["name"]);
                        
                        if($width>150 && $height>150){
                            $File->load($image["name"]);
                            $File->resizeToWidth(150);
                            $File->save($image["name"]);
                            $File->load($image["name"]);
                            $File->resizeToHeight(150);
                            $File->save($image["name"]);
                        }*/
                      
                      $sorpresa->imagen_sorpresa = $nom_imagen;
                      
                  }
                  
                  $sorpresa->update();
                  
                  $this->redirect("surprises","index");
                  
            }else{
                
                $status_message = array("title"=>"Error","status"=>"error","message"=>"Los datos no se almacenaron, porque ya existe ese nombre");
                
                $_SESSION['status_mensajes']= $status_message;
                
                $this->redirect("surprises","index");
            }
        }
        $this->loadView("sorpresas/info",$data);
    }
    
    function active($id=""){
        if(!empty($id)){
            $sorpresa = $this->Connection->DB->get_object_by_id("sorpresas", $id);
            
            if($sorpresa->estado_sorpresa == 0){
                $valor = 1;    
            }
            if($sorpresa->estado_sorpresa == 1){
                $valor=0;
            }
            $sorpresa->estado_sorpresa = $valor;
            $sorpresa->update();
            $this->redirect("surprises","index");    
        }else{
            foreach($_POST['check_list'] as $ids){
                $sorpresa = $this->Connection->DB->get_object_by_id("sorpresas", $ids);
                if($sorpresa->estado_sorpresa == 0){
                    $valor = 1;    
                }
                $sorpresa->estado_sorpresa = $valor;
                $sorpresa->update();
            }
            $this->redirect("surprises","index");
        }
    }
    
    function delete($id=""){
        
        $url = '../images/sorpresas/';
        
        if(!empty($id)){
            
            $sorpresa = $this->Connection->DB->get_object_by_id("sorpresas", $id);
            
            unlink($url.$sorpresa->imagen_sorpresa);
            
            $sorpresa->delete();
            
            $this->redirect("surprises","index");
        }else{
            foreach($_POST['check_list'] as $ids){
                
                $sorpresa = $this->Connection->DB->get_object_by_id("sorpresas", $ids);
                unlink($url.$sorpresa->imagen_sorpresa);
                $sorpresa->delete();
            }
            $this->redirect("surprises","index");
        }
    }
    
    
  
}
	
?>