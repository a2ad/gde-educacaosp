<?php

ini_set("allow_url_fopen", 1);

$new_dir = "novo";
if(!file_exists($new_dir))
   mkdir($new_dir);

$diretorio = getcwd(); 
$ponteiro = opendir($diretorio);

while ($nome_itens = readdir($ponteiro)) {

   if(strrpos(mb_strtolower($nome_itens), '.php'))
      $phps[] = $nome_itens;
   elseif(is_dir($nome_itens))
      $dirs[] = $nome_itens;
}

$i = 0;
foreach ($phps as $arquivo) {

//echo "http://".$_SERVER['HTTP_HOST']."/".$arquivo."<br>";

   if($arquivo!="deploy.php"){
      $str = file_get_contents("http://".$_SERVER['HTTP_HOST']."/".$arquivo); 
      if($str)
      {
         $fp = fopen($new_dir."/".str_replace(".php", ".html", $arquivo), "a");
         $escreve = fwrite($fp, $str);
         fclose($fp);

         $i++;
      }  

      if($i>3)
         break;
   }   
}

?>