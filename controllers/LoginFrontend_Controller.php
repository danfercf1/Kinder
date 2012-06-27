<?php
include('../library/funciones.php');

include('../library/class.imagedit.php');

class LoginFrontend_Controller extends FD_Management
{	
	function LoginFrontend_Controller()
	{
        parent::FD_Management();        
	}
    
    function index()
    {
        $this->loadView("login_frontend");
    }
    
    function load_login()
    {
        $this->loadView("login_frontend");
    }
    
    function logout()
    {
        $this->Session->logout("/");
    }
    
    function access()
    {
        $datos = "";
        if($this->Session->login($_POST["LOGIN_USUARIO"], $_POST["PASS_USUARIO"],3))
        {
            echo $_SESSION["ULOGIN_SESSION"];
        }else {
            echo "Datos incorrectos!";
        }
    }

    /***
     * Agregar Sorpresas a la coleccion
     */
    function addSurprises(){

        if(isset($_POST) && !empty($_POST)){

            $where = "SELECT coleccion.ID_SORPRESA FROM sorpresas, usuario, coleccion WHERE usuario.ID_USUARIO = coleccion.ID_USUARIO AND coleccion.ID_SORPRESA = sorpresas.ID_SORPRESA AND coleccion.CODIGO_SORPRESA='".$_POST['CODIGO_SORPRESA']."' AND usuario.ID_USUARIO =".$_SESSION['UID_SESSION']." GROUP BY sorpresas.ID_SORPRESA";

            $this->Connection->execQuery($where);

            $rResult = $this->Connection->getResultsQuery();

            if(empty($rResult)){

                $coleccion = $this->Connection->DB->create_object("coleccion", $_POST);

                if($coleccion->save()){

                    $this->register_done("");

                }

            }else{
                echo 'Ya ingres&oacute; ese c&oacute;digo';
            }
        }

    }

    /**
     * Recuperar sorpresas de la coleccion
     */

    function retrieveSurprises(){

        if(isset($_SESSION["UID_SESSION"]) != ''){

            $query = "SELECT sorpresas.ID_SORPRESA, sorpresas.NOMBRE_SORPRESA, sorpresas.IMAGEN_SORPRESA FROM sorpresas, usuario, coleccion WHERE usuario.ID_USUARIO = coleccion.ID_USUARIO AND coleccion.ID_SORPRESA = sorpresas.ID_SORPRESA AND usuario.ID_USUARIO =".$_SESSION["UID_SESSION"]." GROUP BY sorpresas.ID_SORPRESA";

            $this->Connection->execQuery($query);

            $rResult = $this->Connection->getResultsQuery();

            $funciones = new funciones();

            $json_sorpresas = $funciones->my_json_encode($rResult);

            echo $json_sorpresas;

        }else{
            echo "Usuario no Logeado";
        }
    }

    function retrieveQsurprises(){

        if(isset($_SESSION["UID_SESSION"]) != ''){

            $query = "SELECT COUNT(*) as cantidad FROM sorpresas, usuario, coleccion WHERE usuario.ID_USUARIO = coleccion.ID_USUARIO AND coleccion.ID_SORPRESA = sorpresas.ID_SORPRESA AND usuario.ID_USUARIO =".$_SESSION["UID_SESSION"]." GROUP BY sorpresas.ID_SORPRESA";

            $this->Connection->execQuery($query);

            $rResult = $this->Connection->getResultsQuery();

            $funciones = new funciones();

            $json_sorpresas = $funciones->my_json_encode($rResult);

            echo $json_sorpresas;

        }else{
            echo "Usuario no Logeado";
        }
    }

    function loadCode(){
        $this->loadView("carga_codigo");
    }

}
	
?>