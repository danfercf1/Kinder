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

            $where = "SELECT coleccion.ID_SORPRESA FROM sorpresas, usuario, coleccion WHERE usuario.ID_USUARIO = coleccion.ID_USUARIO AND coleccion.ID_SORPRESA = sorpresas.ID_SORPRESA AND sorpresas.CODIGO_SORPRESA='".$_POST['CODIGO_SORPRESA']."' AND usuario.ID_USUARIO =".$_SESSION['UID_SESSION']." GROUP BY sorpresas.ID_SORPRESA";

            $this->Connection->execQuery($where);

            $rResult = $this->Connection->getResultsQuery();

            $where = "SELECT * FROM sorpresas WHERE sorpresas.CODIGO_SORPRESA='".$_POST['CODIGO_SORPRESA']."'";

            $this->Connection->execQuery($where);

            $codigo = $this->Connection->getResultsQuery();

            if(empty($rResult) && !empty($codigo) && $_SESSION['UID_SESSION'] !=''){

                $where = "SELECT * FROM sorpresas WHERE CODIGO_SORPRESA='".$_POST['CODIGO_SORPRESA']."'";

                $this->Connection->execQuery($where);

                $rResult = $this->Connection->getResultsQuery();

                $sorpresas = $rResult[0];

                $coleccion = $this->Connection->DB->create_object("coleccion", $_POST);

                $coleccion->id_usuario = $_SESSION['UID_SESSION'];

                $coleccion->id_sorpresa = $sorpresas['ID_SORPRESA'];

                if($coleccion->save()){

                    $this->loadComplete();
                }

            }else{
                echo 'C&oacute;digo incorrecto';
            }
        }

    }

    /**
     * Recuperar sorpresas de la coleccion de un usuario
     */

    function retrieveSurprises($pagina, $iteracion){

        $funciones = new funciones();

        if(isset($_SESSION["UID_SESSION"]) != '' && isset($pagina)){

            $limit = $pagina*4;

            $seleccion = $iteracion;

            $user = $_SESSION["UID_SESSION"];

            $query = "SELECT sorpresas.ID_SORPRESA, sorpresas.NOMBRE_SORPRESA, sorpresas.IMAGEN_SORPRESA FROM sorpresas, usuario, coleccion WHERE usuario.ID_USUARIO = coleccion.ID_USUARIO AND coleccion.ID_SORPRESA = sorpresas.ID_SORPRESA AND usuario.ID_USUARIO =".$user." LIMIT ".$limit.",".$seleccion;

            $this->Connection->execQuery($query);

            $rResult = $this->Connection->getResultsQuery();

            $json_sorpresas = $funciones->my_json_encode($rResult);

            echo $json_sorpresas;

        }else{
            echo "Usuario no Logeado";
        }
    }


    /**
     * Recupera la cantidad de sorpresas de cada usuario
     */

    function retrieveQtotalSurprises(){

        $funciones = new funciones();

        if(isset($_SESSION["UID_SESSION"]) != ''){

            $query = "SELECT COUNT(*) as cantidad FROM sorpresas WHERE 1";

            $this->Connection->execQuery($query);

            $rResult = $this->Connection->getResultsQuery();

            $json_sorpresas = $funciones->my_json_encode($rResult[0]);

            echo $json_sorpresas;

        }else{
            echo "Usuario no Logeado";
        }
    }

    /**
     * Recupera la cantidad de sorpresas de cada usuario
     */

    function retrieveQsurprises(){

        $funciones = new funciones();

        $combinado = Array();

        if(isset($_SESSION["UID_SESSION"]) != ''){

            $query = "SELECT COUNT(*) as cantidad FROM sorpresas, usuario, coleccion WHERE usuario.ID_USUARIO = coleccion.ID_USUARIO AND coleccion.ID_SORPRESA = sorpresas.ID_SORPRESA AND usuario.ID_USUARIO =".$_SESSION["UID_SESSION"];

            $this->Connection->execQuery($query);

            $rResult = $this->Connection->getResultsQuery();

            $query = "SELECT COUNT(*) as total FROM sorpresas WHERE 1";

            $this->Connection->execQuery($query);

            $sTotal = $this->Connection->getResultsQuery();

            array_push($combinado,$rResult[0], $sTotal[0]);

            $json_datos = $funciones->my_json_encode($combinado);

            echo $json_datos;

        }else{
            echo "Usuario no Logeado";
        }
    }

    function loadCode(){
        $this->loadView("carga_codigo");
    }

    function loadComplete(){
        $this->loadView("completado_codigo");
    }

}
	
?>