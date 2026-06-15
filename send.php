<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $vehicle = $_POST["vehicle"];
    $need = $_POST["need"];

    // Receiver email (your business email)
    $to = "jptadduni@optonline.net";

    // Subject line
    $subject = "New Parts Request from Website";

    // Email body
    $message = "
New Parts Request Received:

Name: $name
Phone: $phone
Email: $email
Vehicle / Part: $vehicle

Request Details:
$need
";

    // Headers
    $headers = "From: website@ctautomotive.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    $sent = mail($to, $subject, $message, $headers);

    if ($sent) {
        echo "<h2>Request sent successfully.</h2><p>We will contact you soon.</p>";
    } else {
        echo "<h2>Failed to send request.</h2><p>Try again later.</p>";
    }

} else {
    echo "Invalid request.";
}
?>
