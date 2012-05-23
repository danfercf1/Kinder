<?php
class Main_Controller extends FD_Management
{
    var $active_page;
    var $js=array();
    var $varlist='';
    var $css=array();
    var $status_mensajes=array();
	function Main_Controller()
	{
        parent::FD_Management();        
	}    
    
    function initialize($view,$paramsView=array())
    {
        $leftbar=array(
                    "account"=>$this->getDataAccount(),
                    "links"=>$this->getLinks(),
                    "linksmenu"=>$this->getLinksPromotions()                                      
                    );
        
        if ($this->varlist !='')
        $this->varlist = json_encode($this->varlist);
        $this->useLayout("main",array("status_mensajes"=>$this->status_mensajes,"varlist"=>$this->varlist,"leftbar"=>$leftbar,"active_page"=>$this->active_page,"css_files"=>$this->css,"js_files"=>$this->js));
        $this->loadView($view,$paramsView);
    }
    
    /*
        Generar links de promociones para el left bar, agregando las promciones activas para la cuenta
        
        slug: referencia para pagina activa
        name: nombre que saldra en la cabezera del menu
        url: url que se agregara a los hijos, referencia al nombre del controlador y los hijos serian los metodos(sugenrencia)        
    */
    function getLinksPromotions()
    {
        if ($_SESSION["UROLE_SESSION"]=='1'){
            return array(                    
                    array("slug"=>"users","name"=>"Usuarios","url"=>ROOT_PATH."users"),
                    array("slug"=>"polls","name"=>"Encuestas","url"=>ROOT_PATH."polls"),
                    array("slug"=>"products","name"=>"Productos","url"=>ROOT_PATH."products"),
                    array("slug"=>"events","name"=>"Eventos","url"=>ROOT_PATH."events"),
                    array("slug"=>"games","name"=>"Juegos","url"=>ROOT_PATH."games"),
                    array("slug"=>"categories","name"=>"Categorias/Series","url"=>ROOT_PATH."categories"),
                    array("slug"=>"surprises","name"=>"Sorpresas","url"=>ROOT_PATH."surprises")/*,
                    array("slug"=>"collection","name"=>"Colecci&oacute;n","url"=>ROOT_PATH."collection")*/
                    );
        }
        else{
            return array(                    
                    array("slug"=>"users","name"=>"Usuarios","url"=>ROOT_PATH."users"),
                    array("slug"=>"polls","name"=>"Encuestas","url"=>ROOT_PATH."polls"),
                    array("slug"=>"products","name"=>"Productos","url"=>ROOT_PATH."products"),
                    array("slug"=>"events","name"=>"Eventos","url"=>ROOT_PATH."events"),
                    array("slug"=>"games","name"=>"Juegos","url"=>ROOT_PATH."games"),
                    array("slug"=>"surprises","name"=>"Sorpresas","url"=>ROOT_PATH."surprises")/*,
                    array("slug"=>"collection","name"=>"Colecci&oacute;n","url"=>ROOT_PATH."collection")*/
                    );
        }
    }
    
    /*
        Generar Links Generales del sitio, mismo formato que getLinksPromotions
    */    
    
    function getLinks()
    {
        return array(
                    /*array("slug"=>"dashboard","name"=>"Escritorio","url"=>ROOT_PATH."","noparent"=>TRUE),*/
                    array("slug"=>"settings","name"=>"Ajustes","url"=>ROOT_PATH."settings","childrens"=>array(
                        array("url"=>"general","title"=>"Generales")
                    )),
                    );
    }
    
    /*
        Obtener nombre e imagen para left bar
    */
    function getDataAccount()
    {
        $Usuario = $this->Connection->DB->get_object_by_id('Usuario',$_SESSION['UID_SESSION']);
        return array("name"=>$Usuario->nombres_usuario,"img"=>IMAGES_PATH."avatar.png");
    }
    
    function general_create($jsCtr=array())
    {
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="jquery.datePicker";
        $this->js[]="misc/form_create_edit";  
        $this->js=array_merge($this->js,$jsCtr);
        $this->initialize("ajustes/generales");        
    }
    
}
	
?>