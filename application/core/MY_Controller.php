<?php (defined('BASEPATH')) OR exit('No direct script access allowed');


abstract class My_Controller extends CI_Controller
{
    /**
	 * Class Constructor
	 *
	 * @return	void
	 */
	function __construct()
	{
		parent::__construct();
		// die( md5('ybpassword'));
		$this->data['page_title'] = "Yearbook+";
		$this->must_logged_in();
		$this->load->helper('my_helper');
		// echo '<pre>';
		// var_dump( $this->session->all_userdata() );
		// echo '</pre>';
	}

   
   	public function debug($var,$die = FALSE){
   		echo '<pre>';
   		var_dump($var);
   		echo '</pre>';
   		if($die)die();
   	}

    public function msg_flash($msg,$type='info'){
        // $var = '<div  class="alert alert-'.$type.' fade in " >'.
        //         $msg.'<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>';
        $var = '<p class="text-bold text-'.$type.'">'.$msg.'</p>';
        $this->session->set_flashdata('pop',$var);
    }

 	

	

	protected function must_ajax()
    {
        $this->input->is_ajax_request() OR show_404();
    }

	/**
	 * Return Clean Digits of Microtime
	 *
	 * @return	string
	 */
	protected function clean_microtime()
	{
		$microtime = explode(' ', microtime());
		return $microtime[1] . (substr($microtime[0], 1, strlen($microtime[0])));
	}

	/**
	 * Generate ID/Reference Number
	 *
	 * @return	string
	 */
	protected function long_id()
	{
		$long_id  = microtime();
        $long_id  = str_replace(' ', '', $long_id);
        $long_id  = str_replace('.', '', $long_id);

        return $long_id . rand(10000, 99999);
	}

	/**
	 * Return false if index 'id' is not presented in session it
     *    assume that there is no session data
	 *
	 * @return	bool
	 */
	protected function is_logged_in()
	{
		return $this->session->userdata('tempo_logged_in') != false OR $this->session->userdata('logged_in') != false;
	}

	/**
	 * Must logged in
	 *
	 * @return	bool [true=redirect to login, false=show 404 page]
	 */
	protected function must_logged_in($redirect = true)
	{
        if(! $this->is_logged_in())
		{
            // if($this->is_ajax_request())
            // {
            //     exit;
            // }

            $this->session->set_userdata('before_url', uri_string());

            if($redirect)
            {
                redirect(site_url('tempo/login'));
            }
            else
            {
                show_404();
            }
		}
	}
}
