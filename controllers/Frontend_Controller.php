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
    /**
     * Listado de productos
     */
    function products(){
        
        $query = "SELECT ID_PRODUCTO,NOMBRE_PRODUCTO,IMAGEN_PRODUCTO,DESCRIPCION_PRODUCTO FROM productos WHERE ESTADO_PRODUCTO=1";
        $this->Connection->execQuery($query);        
		$rResult = $this->Connection->getResultsQuery();
        
        //$json_productos = json_encode($rResult);
        
        $funciones = new funciones();
        
        $json_productos = $funciones->my_json_encode($rResult);
        
        echo $json_productos;
      
    }
    /**
     * Listado de sorpresas
     */
    function surprises(){
        
        //$query = "SELECT ID_SORPRESA,NOMBRE_SORPRESA,IMAGEN_SORPRESA FROM sorpresas WHERE ESTADO_SORPRESA=1";
        
        $query = "SELECT ID_SORPRESA,NOMBRE_SORPRESA,IMAGEN_SORPRESA FROM sorpresas";
        
        $this->Connection->execQuery($query);
                
		$rResult = $this->Connection->getResultsQuery();
        
        $json_sorpresas = json_encode($rResult);
        
        echo $json_sorpresas;
        
    }
    /**
     * Registro de nuevos usuarios
     */
    function create(){
        
        if(isset($_POST) && !empty($_POST)){
            
              $where = "EMAIL_USUARIO='".$_POST['EMAIL_USUARIO']."'";
                
              $same = $this->Connection->DB->get_objects("usuario",$where);
              
              if(empty($same)){  
            
                  $usuario = $this->Connection->DB->create_object("usuario", $_POST);
                  
                  $usuario->pass_usuario = md5($_POST['PASS_USUARIO']);
                  
                  $usuario->key_usuario = base64_encode($_POST['EMAIL_USUARIO']);

                  $usuario->fechanac_usuario = $this->fecha_mysql($_POST['FECHANAC_USUARIO']);
                  
                  $usuario->tipo_usuario = 3;
                  
                  $usuario->estado_usuario = 0;
                  
                  if($usuario->save()){
                  
                      $this->register_done("");
                  
                      $this->mailer($usuario->emailp_usuario,$usuario->nombres_usuario,$_POST['PASS_USUARIO'],"","",$usuario->key_usuario,1);  
                  }

              }else{
                  //$this->load_register();
                  echo 'Ya existe ese e-mail';
                 
              }
        }

    }
    /**
     * Vista registro
     */
    function load_register(){
        $this->loadView("registro");
    }
    
    /**
     * Mensaje de respuesta de registro y login
     * @param $tipo
     */
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
    /**
     * Envio de mensajes de contacto
     */

    function contacts(){
        
        //$enviado = $this->mailer("sac@ferrero.com",$_POST['form_contacto_nom_ap'],"",$_POST['txa_texto'],$_POST['form_contacto_email'],"",2);
        $enviado = $this->mailer("danfercf@gmail.com",$_POST['form_contacto_nom_ap'],"",$_POST['txa_texto'],$_POST['form_contacto_email'],"",2);
        
        if($enviado == 1 || $enviado == true){
            $var = 1;
            echo $var;
                
        }
        
    }
    /**
     * Confirmacion de Usuarios registrados
     * @param $key
     */
    function confirmation($key){
        
        if($key!=""){
            $query = "KEY_USUARIO='".$key."'";

            $usuario_confirmacion = $this->Connection->DB->get_object("usuario",$query);
            $usuario_old = $this->Connection->DB->get_object("usuario",$query);

            if(isset($_POST) && !empty($_POST)){
                   if($usuario_confirmacion!=''){
                        if(isset($_POST) && !empty($_POST)){
                            $usuario_confirmacion->merge_values($_POST);

                            if(isset($_POST['FECHANACP_USUARIO']) && $_POST['FECHANACP_USUARIO'] != ''){
                                $usuario_confirmacion->fechanacp_usuario = $this->fecha_mysql($_POST['FECHANACP_USUARIO']);
                            }
                            $usuario_confirmacion->estado_usuario = 1;
                            $usuario_confirmacion->update();
                        }
                   }
              }
              $data['info'] = $usuario_confirmacion;
              $this->loadView('confirmacion',$data);
         }else{
            $this->redirect('frontend');
        }

        
    }
    /**
     * Vista de terminos y condiciones
     */
    function term_condiciones(){
        
        $this->loadView('term_condiciones');
        
    }
    /**
     * Generador de los popups de Informacion nutricional
     * @param $imagen
     */
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
    /**
     * Funcion para enviar email
     * @param $correo
     * @param string $nombre
     * @param string $pass
     * @param string $texto
     * @param $email_cliente
     * @param string $key
     * @param $tipo
     * @return bool
     */
    function mailer($correo,$nombre="",$pass="",$texto="",$email_cliente,$key="",$tipo){
        /*$imagen=$this->createAbsoluteUrl('images/logo.png');*/
        /*$index=$this->createAbsoluteUrl('/');*/
        switch ($tipo) {
        
        case 1: 
        $title="Confirmar registro!";
        $body='
                    <p>
                    Estimado padre o tutor, su hijo a creado una cuenta gratuita en el Mundo
                    Kinder y para poder comenzar a jugar necesita su permiso. Haga click en el
                    bot&oacute;n para activar la cuenta de Mundo Kinder.
                    </p>
                    
                    <p>Bot&oacute;n: <a href="'.ROOT_PATH.'frontend/confirmation/'.$key.'">Activar Cuenta.</a></p>
                    
                    <p>Se muestra nombre y contrase&ntilde;a de su hijo:</p>
                    
                    Nombre: '.$nombre.'</br>
                    Contrase&ntilde;a: '.$pass.'
                    
                    <p>
                    ¿Qu&eacute; es Mundo Kinder?
                    </br>
                    </br>
                    Mundo Kinder es la p&aacute;gina oficial de los productos Kinder de la empresa
                    Ferrero. En este mundo su hijo podr&aacute; cargar virtualmente los c&oacute;digos de
                    los productos Kinder para crear una colecci&oacute;n personal.
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
    /**
     * Redimensionado de Imagenes en productos
     * @param $archivo
     * @param $ancho
     * @param $alto
     */
    function resize_image($archivo, $ancho, $alto){
        
        $file_name= IMAGES_PATH."productos/".$archivo;
        $image = new imagedit($file_name);
        $image->setResize($ancho,$alto,false);
    	echo $image->getPNG();
        
    }
    /**
     * Redimensionado de Imagenes en sorpresas
     * @param $archivo
     * @param $ancho
     * @param $alto
     */
    function resize_images($archivo, $ancho, $alto){
        
        $file_name= IMAGES_PATH."sorpresas/".$archivo;
        $image = new imagedit($file_name);
        $image->setResize($ancho,$alto,false);
    	echo $image->getPNG();
        
    }
    /**
     *Cargado de vista para la propaganda en productos
     */
    function propaganda(){
        $this->loadView("popup_padres");
    }
    /**
     * Cargado de vista para la propaganda en home
     */
    function propaganda_home(){
        $this->loadView("video_propaganda");
    }
    /**
     * Cargdo de vista para los nuevos mundos
     */
    function links_mundos(){
        $this->loadView("mundos_nuevos");
    }
    /**
     * Cargado de vista para soporte de Browser
     */
    function no_soportado(){
        $this->loadView("soporte/soporte");
    }

    /**
     * Consulta de los eventos registrados
     */
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

    /**
     * Informacion acerca de un evento
     * @param $id
     */
    function descripcion_evento($id){
        
        $query = "SELECT * FROM evento WHERE ID_EVENTO=".$id;
        
        $this->Connection->execQuery($query);
                
		$rResult = $this->Connection->getResultsQuery();
        
        $data['descripcion'] = $rResult;
         
        $this->loadView("descripcion_evento",$data);
    }

    /**
     * Cambio de fecha normal a fecha mysql
     * @param $fecha
     * @return string
     */

    function fecha_mysql($fecha){
        $fch=explode("/",$fecha);
        $fechaMysql = $fch[2]."-".$fch[1]."-".$fch[0];
        return $fechaMysql;
    }

}
	
?>