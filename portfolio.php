<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $objet = htmlspecialchars($_POST["objet"]);
    $message = htmlspecialchars($_POST["message"]);

    $destinataire = "nathagalat@orange.fr";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    if (!empty($email) && !empty($objet) && !empty($message)) {
        if (mail($destinataire, $objet, $message, $headers)) {
            echo "<p style='color:green;'>L'email a bien été envoyé.</p>";
        } else {
            echo "<p style='color:red;'>Erreur lors de l'envoi du mail.</p>";
        }
    } else {
        echo "<p style='color:red;'>Tous les champs sont obligatoires.</p>";
    }
}

?>