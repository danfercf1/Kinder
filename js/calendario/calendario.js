var calendario_agenda = new function(){

    this.init = function(){
        
        jQuery('#calendario').fullCalendar({
        
        editable: false,
    	
    	events: {
 	          url: ROOT_PATH+'frontend/eventos_calendario/',
              className: 'evento_calendario'
        },
       
        height: 340,
        columnFormat: {
                month: 'dddd',
                day: 'dddd'    
        },
        monthNames: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
        ],
        
        dayNames: [
                'Lunes',
                'Martes',
                'Mi&eacute;rcoles',
                'Jueves',
                'Viernes',
                'S&aacute;bado',
                'Domingo'
        ],
        
        buttonText: {
            today: 'Hoy'
        },    
                
        eventClick: function(event) {
            if (event.id) {
                $.post(ROOT_PATH+'frontend/descripcion_evento/'+event.id,"",
                 function(data) {
                   jQuery.fancybox({
                            'width': 450,
                            'height': 364,
                            'content' : data,
                            'onComplete': function(){
                                $('#content_evento .contenedor_descripcion .scroll-pane').jScrollPane({width: '300'});
                            }
                    });
                 }
                );
                return false;
            }
        }
    	
        });
    }
}