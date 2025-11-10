<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $objet = htmlspecialchars($_POST["objet"]);
    $message = htmlspecialchars($_POST["message"]);

    $destinataire = "nathagalat@orange.fr";

        $recaptcha_secret = "6LeYZwgsAAAAAOYJZABK9ITRyLHrsyHcuX6xwjxm";
        $recaptcha_response = $_POST['g-recaptcha-response'] ?? '';


        $recaptcha = file_get_contents(
                "https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response"
        );
        $recaptcha = json_decode($recaptcha);

        if (!$recaptcha->success) {
                echo "<p style='color:red;'>❌ Veuillez valider le reCAPTCHA.</p>";
                exit;
        }

    // Vérification de l'email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p style='color:red;'>L'email n'est pas valide.</p>";
        exit; // Stoppe l'exécution si l'email est invalide
    }

    $headers = "From: no-reply@tokachi.alwaysdata.net\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    if (!empty($email) && !empty($objet) && !empty($message)) {
        if (mail($destinataire, $objet, $message, $headers)) {
            echo "
                <div style='text-align:center;font-family:sans-serif;margin-top:2rem;'>
                <p style='color:green;font-size:1.2rem;'>✅ L'email a bien été envoyé.</p>
                <p>Redirection vers le portfolio dans <span id='countdown'>5</span> secondes...</p>
                <script>
                let sec = 5;
                const countdown = document.getElementById('countdown');
                const timer = setInterval(() => {
                sec--;
                countdown.textContent = sec;
                if(sec <= 0) clearInterval(timer);
                }, 1000);
                </script>
                <meta http-equiv='refresh' content='5;url=https://tokachioff.github.io/Portfolio_public/main.html#contact'>
</div>
";
        } else {
            echo "<p style='color:red;'>Erreur lors de l'envoi du mail.</p>";
        }
    } else {
        echo "<p style='color:red;'>Tous les champs sont obligatoires.</p>";
    }
}

?>