<?php

include('../library/funciones.php');

include('../library/class.imagedit.php');

class Frontend_Controller extends FD_Management
{	
	function Frontend_Controller()
	{
        parent::FD_Management();
        
	}
    
    function index()
    {
        $this->loadView("frontend");
    }
    
    function products(){
        
        $query = "SELECT ID_PRODUCTO,NOMBRE_PRODUCTO,IMAGEN_PRODUCTO,DESCRIPCION_PRODUCTO FROM productos WHERE ESTADO_PRODUCTO=1";
        $this->Connection->execQuery($query);        
		$rResult = $this->Connection->getResultsQuery();
        
        //$json_productos = json_encode($rResult);
        
        $funciones = new funciones();
        
        $json_productos = $funciones->my_json_encode($rResult);
        
        echo $json_productos;
      
    }
    
    function surprises(){
        
        //$query = "SELECT ID_SORPRESA,NOMBRE_SORPRESA,IMAGEN_SORPRESA FROM sorpresas WHERE ESTADO_SORPRESA=1";
        
        $query = "SELECT ID_SORPRESA,NOMBRE_SORPRESA,IMAGEN_SORPRESA FROM sorpresas";
        
        $this->Connection->execQuery($query);
                
		$rResult = $this->Connection->getResultsQuery();
        
        $json_sorpresas = json_encode($rResult);
        
        echo $json_sorpresas;
        
    }
    
    function create(){
        
        if(isset($_POST) && !empty($_POST)){
            
              $where = "EMAIL_USUARIO='".$_POST['EMAIL_USUARIO']."'";
                
              $same = $this->Connection->DB->get_objects("usuario",$where);
              
              if(empty($same)){  
            
                  $usuario = $this->Connection->DB->create_object("usuario", $_POST);
                  
                  $usuario->pass_usuario = md5($_POST['PASS_USUARIO']);
                  
                  $usuario->key_usuario = base64_encode($_POST['EMAIL_USUARIO']);  
                  
                  $usuario->tipo_usuario = 3;
                  
                  $usuario->estado_usuario = 0;
                  
                  if($usuario->save()){
                  
                      $this->register_done("");
                  
                      $this->mailer($usuario->emailp_usuario,$usuario->nombres_usuario,$_POST['PASS_USUARIO'],"","",$usuario->key_usuario,1);  
                  }
                  
                  
                  
              }else{
                  
                  $this->load_register();
                  echo '<span class="error_registro">Ya existe ese e-mail</span>';  
                 
              }
        }
     
    }
    
    function load_register(){
        $this->loadView("registro");
    }
    
    
    function register_done($tipo){
        
        switch($tipo){
            case 1: $dato['datos']="Mensaje enviado";
            break;
            case 2: $dato['datos']="Login exit&oacute;so";
            break;
            default: $dato['datos']= " ";
            break;
        }
        
        /*if($tipo==1){
            $dato['datos']="Mensaje enviado";
        }if($tipo==2){
            $dato['datos']="Login exit&oacute;so";
        }else{
            $dato['datos']="";
        }*/
        $this->loadView("gracias",$dato);
        
    }
    
    function contacts(){
        
        $enviado = $this->mailer("sac@ferrero.com",$_POST['form_contacto_nom_ap'],"",$_POST['txa_texto'],$_POST['form_contacto_email'],"",2);
        //$enviado = $this->mailer("danfercf@gmail.com",$_POST['form_contacto_nom_ap'],"",$_POST['txa_texto'],$_POST['form_contacto_email'],"",2);
        
        if($enviado == 1 || $enviado == true){
            $var = 1;
            echo $var;
                
        }
        
    }
    
    function confirmation($key){
        
        if($key!=""){
            
             if(isset($_POST) && !empty($_POST)){
            
              $where = "LOGIN_USUARIO='".$_POST['LOGIN_USUARIO']."'";
                
              $same = $this->Connection->DB->get_objects("usuario",$where);
              
                  if(empty($same)){
                
                        $query = "KEY_USUARIO='".$key."'";
                        
                        $usuario_confirmacion = $this->Connection->DB->get_object("usuario",$query);
                        
                            if($usuario_confirmacion!=''){
                                
                                if(isset($_POST) && !empty($_POST)){
                                    $usuario_confirmacion->merge_values($_POST);
                                    $usuario_confirmacion->pass_usuario = md5($_POST['PASS_USUARIO']);
                                    $usuario_confirmacion->estado_usuario = 1;
                                    $usuario_confirmacion->update();
                                 }
                                
                               
                            }
                  }else{
                         echo '<span class="error_registro">Ya existe ese Usuario</span>';
                  }
              }
              $this->loadView('confirmacion');  
         }
         //redirect();
        
    }
    
    function term_condiciones(){
        
        $this->loadView('term_condiciones');
        
    }
    
    function info_nutricional($imagen){
        
        if($imagen == 'Kinder Bueno'){
            $imagen_nueva = "bueno.jpg";
        };
        if($imagen == 'Kinder Chocolate'){
            $imagen_nueva = "chocolate.jpg";
        };
        if($imagen == 'Kinder Chocolate Maxi'){
            $imagen_nueva = "maxi.jpg";
        };
        if($imagen == 'Kinder Country'){
            $imagen_nueva = "country.jpg";
        };
        if($imagen == 'Kinder Joy'){
            $imagen_nueva = "joy.jpg";
        };
        
        if($imagen == 'Kinder Sorpresa'){
            $imagen_nueva = "huevo.jpg";
        };
        
        $data['imagenes'] = $imagen_nueva;
         
        $this->loadView("info_nutricional",$data);
    }
    
    function mailer($correo,$nombre="",$pass="",$texto="",$email_cliente,$key="",$tipo){
        /*$imagen=$this->createAbsoluteUrl('images/logo.png');*/
        /*$index=$this->createAbsoluteUrl('/');*/
        switch ($tipo) {
        
        case 1: 
        $title="Confirmación de registro!";
        $body='
                    <p>
                    Estimado padre o tutor, su hijo a creado una cuenta gratuita en el Mundo
                    Kinder y para poder comenzar a jugar necesita su permiso. Haga click en el
                    botón para activar la cuenta de Mundo Kinder.
                    </p>
                    
                    <p>Botón: <a href="'.ROOT_PATH.'frontend/confirmation/'.$key.'">Activar Cuenta.</a></p>
                    
                    <p>Se muestra nombre y contraseña de su hijo:</p>
                    
                    Nombre: '.$nombre.'</br>
                    Contraseña: '.$pass.'
                    
                    <p>
                    ¿Qué es Mundo Kinder?
                    </br>
                    </br>
                    Mundo Kinder es la página oficial de los productos Kinder de la empresa
                    Ferrero. En este mundo su hijo podrá cargar virtualmente los códigos de
                    los productos Kinder para crear una colección personal.
                    </p>
                
        ';
        break;
        case 2:
        $title="Email contacto";
        $body='
                
                <p>El cliente: '.$nombre." con el email: ".$email_cliente.' envi&oacute; el siguiente comentario:</p>
                <p>'.$texto.'</p>
                
                
        ';
        break;
        }
        $html="<html>
               <head>
                	<title>$title</title>
               </head>
                
               <body>$body</body>
               </html>";
        
        $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
        $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        
        $exito = mail($correo,$title,$html,$cabeceras);
        
        return $exito;
    }
    
    function resize_image($archivo, $ancho, $alto){
        
        $file_name= IMAGES_PATH."productos/".$archivo;
        $image = new imagedit($file_name);
        $image->setResize($ancho,$alto,false);
    	echo $image->getPNG();
        
    }
    
    function resize_images($archivo, $ancho, $alto){
        
        $file_name= IMAGES_PATH."sorpresas/".$archivo;
        $image = new imagedit($file_name);
        $image->setResize($ancho,$alto,false);
    	echo $image->getPNG();
        
    }
    
    function propaganda(){
        $this->loadView("popup_padres");
    }
    
    function propaganda_home(){
        $this->loadView("video_propaganda");
    }
    
    function links_mundos(){
        $this->loadView("mundos_nuevos");
    }
    
    function no_soportado(){
        $this->loadView("soporte/soporte");
    }
    
    function eventos_calendario(){
        $query = "SELECT ID_EVENTO,NOMBRE_EVENTO,FECHA_EVENTO FROM evento";
        
        $this->Connection->execQuery($query);
                
		$rResult = $this->Connection->getResultsQuery();

        foreach($rResult as $value=>$data)
        {
            $rResultNew[$value]['id'] = intval($data['ID_EVENTO']);
            $rResultNew[$value]['title'] = $data['NOMBRE_EVENTO'];
            $rResultNew[$value]['start'] = $data['FECHA_EVENTO'];
            $rResultNew[$value]['url'] = "#";
                 
        }
       
        $json_evento = json_encode($rResultNew);
        
        echo $json_evento;
    }
    
    function descripcion_evento($id){
        
        $query = "SELECT * FROM evento WHERE ID_EVENTO=".$id;
        
        $this->Connection->execQuery($query);
                
		$rResult = $this->Connection->getResultsQuery();
        
        $data['descripcion'] = $rResult;
         
        $this->loadView("descripcion_evento",$data);
    }
    
    
}
	
?>