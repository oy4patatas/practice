<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_model extends CI_Model
{
    
    public function school_users($school_id)
    {
        $sql = "SELECT * FROM vw_faculties WHERE school_id = '{$school_id}' ";
        $q = $this->db->query($sql);
        // die($sql);
        return $q;
    }

    public function school_info($school_id)
    {
        $sql = "SELECT * FROM mt_schools WHERE school_id = '{$school_id}'";
        $q = $this->db->query($sql);
        return $q->row_array();
    }


    public function get_countries()
    {
        return $this->db->get('yb_countries'); //->result_array();
    }

    function add_school($post)
    {
        $data = array(
            'school_name' =>  $post['school_name'],
            'school_abbr' =>  strtoupper($post['school_abbr']),
            'school_address' =>  $post['school_address'],
            'school_city' =>  $post['school_city'],
            'school_region' =>  $post['school_region'],
            'school_country' =>  $post['school_country'],
            'school_description' =>  $post['school_description'],

        );
        return $this->db->insert('mt_schools',input_prep($data));
    }

    public function password_reset($user_id){
        $this->db->where('user_id',$user_id);
        $res = $this->db->get('mt_users')->row_array();

        $this->db->where('user_id',$user_id);
        $data = [
            'default_password' => $res['username']
        ];
        return $this->db->update('mt_users',$data);


    }
}