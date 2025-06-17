 <!-- <php //
// $_POST = json_decode(file_get_contents("php://input"), true);
// echo var_dump($_POST);
// > -->

<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON: ' . json_last_error_msg()]);
    exit;
}

// Пример обработки данных
if (isset($data['name'])) {
    echo json_encode(['status' => 'success', 'data' => $data]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Name is required']);
}
?>