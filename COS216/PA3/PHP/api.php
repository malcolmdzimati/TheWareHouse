<?php

require_once("config.php");
session_start();
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);
//var_dump($data);
/***************************************************************************************************************************
SINGLETON
 ***************************************************************************************************************************/

Class API {
    public static function instance() {
        static $instance = null; // remember this only ever gets called once, why
        if($instance === null)
            $instance = new API();
        return $instance;
    }
    private function __construct() { /* Connect to the database */ }
    public function __destruct() { /* Disconnect from the database */ }

    public function login($data){ /* Validate */
        $db = Database_Connection::getInstance();
        $email=$data->email;
        $password=$data->psw;

        $sql="SELECT email, password, uname, API_key FROM user WHERE email = '$email'";
        $result=$db->getConnection()->query($sql);

        if ($result->num_rows>0) {
            while($row=$result->fetch_assoc()) {
                if (password_verify($password,$row["password"])) {
                    return $row["API_key"];
                }else {
                    return "false";
                }
            }
        } else{
            return "false";
        }
    }


    public function getInfo($data){
        /* Retrieve data from API, I am doing a deezer example */
        // From URL to get webpage contents.
        $url = "https://api.rawg.io/api/games?key=16eeee7089554d7191b4a1a048ccb468&page=2";

        // Initialize a CURL session.
        $ch = curl_init();

        // Return Page contents. don't forget to add the proxy for Wheatley
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        //grab URL and pass it to the variable.
        if (isset($data))
            if (true)
            {
                curl_setopt($ch, CURLOPT_URL, $url);
                $result = curl_exec($ch);
                $result = json_decode($result);

                if (true) {
                    $tmp = [];
                    $games=$result->results;
                    foreach ($games as $r){
                        array_push($tmp, array("title" => "$r->name",
                                                       "cover" => "$r->background_image",
                                                       "rating" => "$r->rating",
                                                       "score" => "$r->metacritic",
                                                       "released" => "$r->released"

                        ));
                    }
                    return $tmp;
                }
            }
        curl_close($ch);

    }



    function response($success, $message = "", $data="")
    {
        header("HTTP/1.1 200 OK");
        header("Content-Type: application/json");

        echo json_encode([
            "success" => $success,
            "message" => $message,
            "data" => $data
        ]);
    }

}

/***************************************************************************************************************************
REQUESTS
 ***************************************************************************************************************************/

$api = API::instance();

// If not logged in, check if there is a login request from the form

if (isset($data->key) /*&& $data->key == $GLOBALS["key"]*/)
{
    if (isset($data->type) && $data->type == "info") {
        $api->response(true, "Success", $api->getInfo($data));
    }else if(isset($data->type) && $data->type == "login"){
        $api->response(true, 'Success', $api->login($data->dt));
    }
}

// Invalid request
/*
else
{
	header("HTTP/1.1 401 Unauthroized");
	header("Content-Type: application/json");
	echo json_encode([
		"success" => "false",
		"message" => "Invalid API Key",
	]);
}
*/
?>
