<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Crear Encuesta</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalle Servicio</a></li>
            <li><a href="#profiles">Datos Participante</a></li>              
            <li><a href="#timeline">Cronograma</a></li>
            <li><a href="#flyer">Flyer / Bases</a></li>
            <li><a href="#publish">Publicar</a></li>            
        </ul>
    </div>
    <div class="contentbox" id="details">
	   
       <form action="<?php echo ROOT_PATH;?>sweepstakes/registrar_sorteo"  method="POST" name="testForm" id="testForm" >
            <p>
                <label for="TITLE_SORTEO"><strong>Titulo de Servicio:</strong></label>
                <input type="text" id="TITLE_SORTEO" class="inputbox required" name="TITLE_SORTEO" /> <br />  
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>              
            </p>
            <!--<p>
                <label for="poll_short_description"><strong>Descripcion corta:</strong></label>
                <input type="text" id="poll_short_description" class="inputbox" name="poll_short_description" /> <br />
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>                
            </p>
            -->
            
            <p>
                <label for="DESCR_SORTEO"><strong>Descripci&oacute;n:</strong></label>
                <textarea class="text-input textarea required" id="DESCR_SORTEO" name="DESCR_SORTEO" rows="5" cols="75"></textarea>
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
            </p>
            
            <p>
                <label for="PREMIO_SORTEO"><strong>Premio</strong></label>
                <input type="text" id="PREMIO_SORTEO" class="inputbox required" name="PREMIO_SORTEO" /> <br />  
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>              
            </p>
            
            <p>
                <label for="DESCR_PREMIO_SORTEO"><strong>Descripci&oacute;n Premio:</strong></label>
                <textarea class="text-input textarea required" id="DESCR_PREMIO_SORTEO" name="DESCR_PREMIO_SORTEO" rows="5" cols="75"></textarea>
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
            </p>
            
            <p>
                <label for="CATEGORIA_SORTEO"><strong>Categoria Sorteo:</strong></label>
                <select id="CATEGORIA_SORTEO" name="CATEGORIA_SORTEO" class="required">
                    <option value="Autom&oacute;viles">Autom&oacute;viles</option>
                    <option value="Belleza/Moda">Belleza/Moda</option>
                    <option value="Celebridades">Celebridades</option>
                    <option value="Comedia">Comedia</option>
                </select>
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
            </p>
            
            <p>
                <strong>Opciones avanzadas:</strong>
                <ul>
                    <li><span class="izq"><input type="checkbox" id="POST_USUARIOMURO_SORTEO" value="1"/></span><span class="der">Post en el muro del participante</span></li>
                    <li><span class="izq"><input type="checkbox" id="LIKE_SORTEO" value=""/></span><span class="der">Agregar Like</span></li>
                    <li><span class="izq"><input type="checkbox" id="SOLO_FAN_SORTEO" value=""/></span><span class="der">Solo fans</span></li>
                    <li><span class="izq"><input type="checkbox" id="CONTADOR_PARTICIPANTES_SORTEO" value=""/></span><span class="der">Contador de participantes</span></li>
                    <li><span class="izq"><input type="checkbox" id="BUSQUEDA_AMIGOS_SORTEO" value=""/></span><span class="der">B&uacute;squeda de amigos</span></li>
                </ul>
            </p>
            
                              
            <input type="submit" value="Submit" class="btn" />
        </form>	
    </div>
    
    <div class="contentbox" id="profiles">
        <form action="#">
            <p> 
                <label>Datos requeridos de los participantes</label>
            </p>
            <ul>
                <li><span class="izq"><input type="checkbox" id="REQNOMCOM_SORTEO" value=""/></span><span class="der">Nombres y Apellidos</span></li>
                <li><span class="izq"><input type="checkbox" id="REQEMAIL_SORTEO" value=""/></span><span class="der">Email</span></li>
                <li><span class="izq"><input type="checkbox" id="REQTELF_SORTEO" value=""/></span><span class="der">Tel&eacute;fono</span></li>
                <li><span class="izq"><input type="checkbox" id="REQNACI_SORTEO" value=""/></span><span class="der">Fecha de nacimiento</span></li>
                <li><span class="izq"><input type="checkbox" id="REQSEX_SORTEO" value=""/></span><span class="der">Sexo</span></li>
                <li><span class="izq"><input type="checkbox" id="REQPAIS_SORTEO" value=""/></span><span class="der">Pa&iacute;s</span></li>
                <li><span class="izq"><input type="checkbox" id="REQCI_SORTEO" value=""/></span><span class="der">C&eacute;dula de identidad</span></li>
             </ul>
            <input type="submit" value="Submit" class="btn" />
        </form> 
    </div>
    
    <div class="contentbox" id="timeline">
        <form action="#">
            <p> <br />
                <label><strong>Modo de seleccion del ganador</strong></label>
                <input type="radio" name="radioexample" checked="checked"/> Al azar<br />
                <!--<input type="radio" name="radioexample" /> Por eleccion<br />
                <input type="radio" name="radioexample" /> Por votacion<br />-->            	
			</p>         
    		<p>
                <label for="textfield"><strong>Fecha del Concurso:</strong></label>
                <div class="div_fecha_inicio">
                    <span id="fecha_inicio">
                    Inicio:
                    <input type="text" id="inicio_c" class="inputbox date-picker-text" />
                    <input type="text" rel="inicio_c" class="inputbox date-picker" /> <br />
                    </span>
                    <span id="hora_inicio">
                        <select id="" class="date-picker-text">
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <?php for($i=10; $i <= 23;$i++){?>
                            <option value="<?php echo $i;?>"><?php echo $i;?></option>
                        <?php }?>
                        </select>
                    
                    <strong>:</strong>
                    
                        <select id="" class="date-picker-text">
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <?php for($i=10; $i <= 59;$i++){?>
                            <option value="<?php echo $i;?>"><?php echo $i;?></option>
                        <?php }?>
                        </select>
                    </span>
                </div>
                
                <div class="div_fecha_fin">
                <span id="fecha_fin">
                Fin:
                <input type="text" id="inicio_f" class="inputbox date-picker-text" /> 
                <input type="text" rel="inicio_f" class="inputbox date-picker" /> <br />
                </span>
                <span id="hora_fin">
                        <select id="select_hrfin" class="date-picker-text">
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <?php for($i=10; $i <= 23;$i++){?>
                            <option value="<?php echo $i;?>"><?php echo $i;?></option>
                        <?php }?>
                        </select>
                    
                    <strong>:</strong>
                    
                        <select id="select_minfin" class="date-picker-text">
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <?php for($i=10; $i <= 59;$i++){?>
                            <option value="<?php echo $i;?>"><?php echo $i;?></option>
                        <?php }?>
                        </select>
                    </span>
                </div>
                
                
                <div class="zona_horaria">
                Zona horaria:<br/>
                <input type="text" id="input_zona_horaria" class="inputbox date-picker-text zona" />
                </div>
                
            </p>            
            <input type="submit" value="Submit" class="btn" />
            
            
        </form> 
    </div>
    <div class="contentbox" id="flyer">
        <form action="#">
             
                <label><strong>Subir flyer</strong></label>
                <div id="flyer_header">
                    <p>Imagen Cabecera</p>
                    <span>
                    <img src="<?php echo IMAGES_PATH;?>banner-header.png" /> <br /> <br />
                    </span>
                    <span>
                    Subir imagen: <input type="file" id="uploader_header" /> o <br /> <br />
                    Agregar Url: <input type="text" class="input_url"/>
                    </span>
                    <br />
                    <br />
                    <input type="submit" value="Subir" class="btn btn_subir" />
                </div>
                <div id="flyer_banner">
                    <p>Imagen Banner</p>
                    <span>
                    <img src="<?php echo IMAGES_PATH;?>banner-custom.png" /> <br /> <br />
                    </span>                    
                    <span>
                    Subir imagen: <input type="file" id="uploader_banner" /> o <br /> <br />
                    Agregar Url: <input type="text" class="input_url"/>
                    </span>
                    <br />
                    <br />
                    <input type="submit" value="Subir" class="btn btn_subir" />
                </div>
                <div id="flyer_finregistro">
                    <p>Imagen fin de registro</p>
                    <img src="<?php echo IMAGES_PATH;?>banner-custom.png" /> <br /> <br />
                    <span>
                    Subir imagen: <input type="file" id="uploader_finregistro" /> o <br /> <br />
                    Agregar Url: <input type="text" class="input_url"/>
                    </span>
                    <br />
                    <br />
                    <input type="submit" value="Subir" class="btn btn_subir" />
                </div>
                
                <div>
                    <p>
                        <label for="REGLAS_SORTEO"><strong>Reglas:</strong></label>
                        <textarea class="text-input textarea" id="REGLAS_SORTEO" name="textfield" rows="5" cols="75"></textarea>
                        <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
                    </p>
                    
                    <p>
                        <label for="DECLARACION_DIVULGACION_SORTEO"><strong>Declaraci&oacute;n de divulgaci&oacute;n:</strong></label>
                        <textarea class="text-input textarea" id="DECLARACION_DIVULGACION_SORTEO" name="textfield" rows="5" cols="75"></textarea>
                        <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
                    </p>
                    
                    <p>
                        <label for="POLITICAS_PRIVACIDAD_SORTEO"><strong>Pol&iacute;ticas de privacidad:</strong></label>
                        <textarea class="text-input textarea" id="POLITICAS_PRIVACIDAD_SORTEO" name="textfield" rows="5" cols="75"></textarea>
                        <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
                    </p>
                   
                </div>           	
			<input type="submit" value="Submit" class="btn" />
        </form> 
    </div>   
    
     <div class="contentbox" id="publish">
        <form action="#">
            <p> 
                <label>Publicar</label>
            </p>       
            <input type="submit" value="Submit" class="btn" />
        </form> 
    </div>   
</div>