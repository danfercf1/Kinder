<?php
/**
 * @package FastDevelPHP
 * @author Ing. Florencio Peredo
 * @email peredo@sysdecom.com
 * @company Systems Development Company "Sysdecom" srl.
 * @license All rights reservate
 * @version 1.0
 * @copyright 2009
 */

class FD_Session
{
    var $User;
    protected $Connection;
    
    function FD_Session($Con)
    {
        $this->Connection = $Con;
        if(!isset($_SESSION["FD_flash_message"]))
            $_SESSION["FD_flash_message"] = array("new" => array(), "pass"=>array());
    }
    
	function login($uName, $uPass,$type="1")
	{
	   
       $Usuario = current($this->Connection->DB->get_objects_By_Sql("usuario","select * from usuario where LOGIN_USUARIO='$uName' AND PASS_USUARIO = md5('$uPass') and TIPO_USUARIO=$type and ESTADO_USUARIO=1"));
        
        if($Usuario)
		{
			$_SESSION["UID_SESSION"]=$Usuario->id_usuario;
			$_SESSION["ULOGIN_SESSION"]=$Usuario->login_usuario;
            $_SESSION["UROLE_SESSION"]=$Usuario->tipo_usuario;
            $_SESSION["FD_SESSION"] = true;

            $_SESSION["account"] = true;

            $this->User = $Usuario;

			return true;
		}else
		{
            return false;
		}
	}
	
    /**
     * verifica si estas logeado
     * return true/false
     * si $routeIndex existe y no esta logeado, redirecciona a $routeIndex
     * $publicNameFunctions = Arreglo de nombres de funciones que no requiren login (funciones publicas)
    */
	function check($routeIndex="", $publicNameFunctions = array())
	{
		//if(session_is_registered("account"))
        if(isset($_SESSION["FD_SESSION"]))
        {
            $this->User = $this->Connection->DB->get_object_by_id("usuario", $_SESSION["UID_SESSION"]);
            return true;   
        
        }else if(in_array(CONTROLLER_FUNCTION, $publicNameFunctions))
            return true;
        
		elseif($routeIndex)
			header("Location: ".ROOT_PATH.$routeIndex);
		
        else
			return false;
	}
	
	function logout($routeIndex = "")
	{
        session_destroy();
        
		/*if($routeIndex)
			header("Location: ".ROOT_PATH.$routeIndex);		
        else
			header("Location: ".ROOT_PATH);
		*/
	}
    
    function unset_data($key)
    {
        unset($_SESSION[$key]);
    }
    
    function get_data($key)
    {
        return $_SESSION[$key];
    }
    
    function add_data($datas = array())
    {
        foreach($datas as $k => $d)
        {
            $_SESSION[$k] = $d;
        }
    }
    
    function save_toDB()
    {
        
    }
    
    function destroy()
    {
        session_regenerate_id(true);
        session_destroy();
    }
    
    /** Flash messages
     * $msg = message
     * $type = 0 => successful, 1 => fail, 2 => warning
    **/
    function addFlashMessage($key, $msg, $type = 0)
    {
        $_SESSION["FD_flash_message"]["new"][$key] = array("message"=>$msg, "type"=>$type);
    }
    
    function clearFlashMessage()
    {
        $_SESSION["FD_flash_message"]["new"] = $_SESSION["FD_flash_message"]["pass"] = array();
    }
    
    function updateFlashMessage()
    {
        $_SESSION["FD_flash_message"]["pass"] = $_SESSION["FD_flash_message"]["new"];
        $_SESSION["FD_flash_message"]["new"] = array();
    }
    
    function getFlashMessage($key)
    {
        return $_SESSION["FD_flash_message"]["pass"][$key];
    }
    
}

?>