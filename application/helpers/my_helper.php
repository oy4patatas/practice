<?php 

function input_prep($string){ //use to handle inputs before going to database
    if(is_array($string)){
        foreach ($string as $key => $value) {
             $string[$key] = clean_string($value);
        }
    }else{
        $string = clean_string($string);
    }
   
   return $string;
    
}


function clean_string($string){
    $string = trim($string);
    $string = str_replace("'", "''", $string);
    return $string;
}

function mysql_date($date,$fs = "-"){ //formatting date for mysql
    return date('Y'.$fs.'m'.$fs.'d',strtotime($date) );
}
function human_date($post_date){ 
    // $ci = get_instance();
    // $ci->load->helper('date');
    $post_date = strtotime($post_date);
    $now = time();
    $duration =  $now - $post_date;

    $hours = (int)($duration/60/60);
    $minutes = (int)($duration/60)-$hours*60;
    $seconds = (int)$duration-$hours*60*60-$minutes*60;
    if($hours < 5){
        $time = "";
        if($hours > 0){
            $time = $hours;
            $time .= $hours == 1 ? ' hour ' : ' hours ';
        }
        if($minutes > 0){
            $time .= $minutes;
            $time .= $minutes == 1 ? ' min ' : ' mins' ;
        }else{
            $time = $seconds . ' seconds';
        }
        $time .= ' ago';
        return $time;

    }else{
        return date('Y-M-d h:i:s a');
    }
}
function iencode($string){
        // return base64_encode($text .'jaskdjfklsdj');
        // return base64_encode(ASIN.$text.ASIN);
        // return trim(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, SALT, $text, MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND))));
        $secret_key = ASIN;
    $secret_iv = ENC_IV;
    $output = false;
    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
    $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
    return $output;
    }

function idecode($encrypted_text){
    // $decrypted_id_raw = base64_decode($encrypted_text);
    // return preg_replace(sprintf('/%s/', ASIN), '', $decrypted_id_raw);
    // return trim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, SALT, base64_decode($text), MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND)));

    $secret_key = ASIN;
    $secret_iv = ENC_IV;
 
    $output = false;
    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );

    $output = openssl_decrypt( base64_decode( $encrypted_text ), $encrypt_method, $key, 0, $iv );
    return $output;
}
function school_status($status=null){
    $ci = get_instance();
    // echo $status;
    if($status != null){
        $ci->db->where('id',$status);
        $q = $ci->db->get('lu_school_status');
        return $q->row_array();
    }else{
        return $ci->db->get('lu_school_status')->result_array();
    }
}

function debug($data,$die=TRUE){
	echo '<pre>';
	var_dump($data);
	echo '</pre>';
    if($die){
        die();
    }
}


function set_popmsg($msg)
{
    $ci = get_instance();
    $ci->session->set_flashdata('pop',$msg);
}

 function createDefaultPassword(){
    $length =6;
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function create_thumb($source,$filename){
        $ci = get_instance();
        $config['image_library'] = 'gd2';
        $config['source_image'] = $source.$filename; // '/path/to/image/mypic.jpg';
        $config['new_image'] = $source.'thumbnail/'.'thumb_'.$filename;
        $config['create_thumb'] = TRUE;
        $config['maintain_ratio'] = TRUE;
        $config['width']         = 50;
        $config['height']       = 50;
        $config['thumb_marker'] = '';

        $ci->image_lib->initialize($config);

        if (!$ci->image_lib->resize()) {
            echo $ci->image_lib->display_errors();
            die();
        }
        // clear //
        $ci->image_lib->clear();
    }
 ?>