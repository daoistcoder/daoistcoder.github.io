<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('assets/css/registration-page.css')}}">
    <title>Document</title>
</head>
<body style="background-color: #8EDCE7; z-index: -10">
    <div class="register-page-background" style="background-image: url('{{asset('assets/images/backgrounds/registration_background.png');}}')">
        <div style="display: flex;">
            <div class="register-page-title-description">
                <div class="register-page-icon-title" style="display: flex">
                    <img class="register-page-icon" src="{{asset('assets/images/mathayog_logo.svg')}}" alt="">
                    <h3 class="register-page-title">MATHAYOG</h3>
                </div>
                <div class="register-page-description">
                    <p class="page-description">Maglibot-libot sa Pagsusuri ng <br>Matematika sa Buong Pilipinas</p>
                </div>
            </div>

            <div class="registration-form">
                <h3 class="registration-form-title">Sama na sa Adbentura at Simulan <br>ang iyong Paglalakbay</h3>
                <div class="dashed-line"></div>
                <form action="{{route('register')}}" class="page-form" method="POST">
                    @csrf
                    <div class="registration-form-name">
                        <div class="registration-form-firstname">
                            <label for="firstname" class="registration-label">First Name</label>
                            <input type="text" id="firstname" name="firstname" required class="registration-input firstname">
                        </div>
                        <div class="registration-form-lastname">
                            <label for="lastname" class="registration-label">Last Name</label>
                            <input type="text" id="lastname" name="lastname" required class="registration-input lastname">
                        </div>
                    </div>

                    <div>
                        <label for="email" class="registration-label">Email</label>
                        <input type="email" id="email" name="email" required  class="registration-input">
                    </div>

                    <div>
                        <label for="password" class="registration-label">Password</label>
                        <input type="password" id="password" name="password" required class="registration-input">
                    </div>

                    <div>
                        <label for="password_confirmation" class="registration-label">Confirm Password</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" required class="registration-input">
                    </div>
                    <button type="submit" class="registration-btn">Submit</button>
                </form>
                <p>Already Have an Account?<a href="" class="registration-link"> Login Here</a></p>
            </div>
        </div>
    </div>
</body>
</html>
