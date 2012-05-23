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
class Encuestas extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_encuesta; 
	var $nombre_encuesta; 
	var $descripcion_encuesta; 
	var $fechacr_encuesta; 
	var $estado_encuesta; 
	
	function Encuestas($id_encuesta = '', $nombre_encuesta = '', $descripcion_encuesta = '', $fechacr_encuesta = '', $estado_encuesta = '')
	{
		
		$this->id_encuesta = $id_encuesta;
		$this->nombre_encuesta = $nombre_encuesta;
		$this->descripcion_encuesta = $descripcion_encuesta;
		$this->fechacr_encuesta = $fechacr_encuesta;
		$this->estado_encuesta = $estado_encuesta;
	}
    
    /***
    ***Borrado de opciones de una encuesta
    ***
    ***/
    function borrar_opciones(){
        $tuplas = $this->references("opcion");
        foreach($tuplas as $valor){
            $eliminar=$this->Connection->DB->get_object_by_id("opcion", $valor->id_opcion);
            $eliminar->delete();
        }
    }
    
    function onDelete(){
        $this->borrar_opciones();    
    }
    
}
?>