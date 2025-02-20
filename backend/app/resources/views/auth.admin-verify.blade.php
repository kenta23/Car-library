<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h2>Email Verification Required</h2>
        <p>Before accessing the admin panel, please verify your email.</p>

        @if (session('resent'))
            <p>A new verification link has been sent to your email.</p>
        @endif

        <form method="POST" action="{{ route('verification.resend') }}">
            @csrf
            <button type="submit">Resend Verification Email</button>
        </form>
    </div>
</body>
</html>
