<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('assets/css/avatar_selection_style.css')}}">
    <title>Mathayog - Select Avatar</title>
</head>
<body>
    <div class="avatar-selection-container" style="background-image: url('{{asset('assets/images/backgrounds/avatar_selection_background.png');}}')">
        <div class="user-guide-wrapper">
            <div class="user-guide-avatar">
                <img src="{{asset('assets/images/user_guide.png')}}" alt="User Guide" width="100px">
            </div>
            <div class="user-guide-content">
                <h3>
                    Pumili ng avatar!
                </h3>
                <p>
                    Ang pinakamahusay na paglalakbay puno ng matematika sa puso ng Pilipinas!
                </p>
            </div>

        </div>
        <div class="avatar-selection-wrapper">
            <div class="avatar-card">
                <div class="avatar">
                    <img src="{{asset('assets/images/user_avatar.png')}}" alt="Avatar" width="170px">
                </div>
                <div class="avatar-card-content">
                    <h3>Avatar 1</h3>
                    <p>Ang pinakamahusay na paglalakbay puno ng matematika sa puso ng Pilipinas!</p>
                </div>
            </div>

            <div class="avatar-card">
                <div class="avatar">
                    <img src="{{asset('assets/images/user_avatar.png')}}" alt="Avatar" width="170px">
                </div>
                <div class="avatar-card-content">
                    <h3>Avatar 2</h3>
                    <p>Ang pinakamahusay na paglalakbay puno ng matematika sa puso ng Pilipinas!</p>
                </div>
            </div>

            <div class="avatar-card">
                <div class="avatar">
                    <img src="{{asset('assets/images/user_avatar.png')}}" alt="Avatar" width="170px">
                </div>
                <div class="avatar-card-content">
                    <h3>Avatar 3</h3>
                    <p>Ang pinakamahusay na paglalakbay puno ng matematika sa puso ng Pilipinas!</p>
                </div>
            </div>
        </div>

    </div>
</body>
</html>
