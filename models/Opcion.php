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
class Opcion extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_opcion; 
	var $id_encuesta; 
	var $nombre_opcion; 
	
	function Opcion($id_opcion = '', $id_encuesta = '', $nombre_opcion = '')
	{
		
		$this->id_opcion = $id_opcion;
		$this->id_encuesta = $id_encuesta;
		$this->nombre_opcion = $nombre_opcion;
	}
    
    function borrar_usuarioopcion(){
        $tuplas = $this->references("usuarioopcion");
        foreach($tuplas as $valor){
            $eliminar=$this->Connection->DB->get_object_by_id("usuarioopcion", $valor->id_usuarioopcion);
            $eliminar->delete();
        }
    }
    
    function onDelete(){
        $this->borrar_usuarioopcion();    
    }
}
?>