<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifre kontrolü
    if ($username === "g231210564" && $password === "123456") {
        echo "Hoşgeldiniz!";
    } else {
        // Hatalı giriş, login sayfasına yönlendirme
        header("Location: login.html");
        exit();
    }
} else {
    // Eğer form gönderilmemişse login sayfasına yönlendir
    header("Location: login.html");
    exit();
}
?>
