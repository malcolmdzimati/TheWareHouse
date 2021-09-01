<?php
class Database_Connection {

    private static $instance = null;
    private $db_connection;
    private $db_server = "wheatley.cs.up.ac.za";
    private $db_username = "u20456078";
    private $db_password = "KFSQBOH5Y7QRSSZGNYTPTGPAMDHP6KZD";
    private $db_name = "u20456078_USERS";

    public static function getInstance() {
        if(!self::$instance)
            self::$instance = new self();
        return self::$instance;
    }

    private function __construct() {
        $this->db_connection = new mysqli($this->db_server, $this->db_username, $this->db_password, $this->db_name);
        if ($this->db_connection->connect_error)
            die("Connection failed: " . $this->db_connection->connect_error);
    }

    public function __destruct(){
        $this->db_connection->close();
    }

    public function getConnection(){
        return $this->db_connection;
    }
}
