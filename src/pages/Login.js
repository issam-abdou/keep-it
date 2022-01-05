// import React from 'react'


// export default function Login() {
//     return (

//         <main>
//             <div class="logo">
//                 <img src="./Keep it.svg"  alt="logo"/>
//             </div>
//             <div class="register">
//                 <div class="register__img">
//                     <img src="./undraw_uploading_re_okvh.svg" alt=""/>
//                 </div>
//                 <div class="register__text">
//                     <div class="register__info">
//                         <h3>Hello !</h3>
//                         <span class="register__msg">Sign Up To Get Started</span>
//                         <form action="" class="register__form">
//                             <div class="form-input">
//                                 <span class="input-icon"><i class="fas fa-user"></i></span>
//                                 <input type="text" name="name" id="name" placeholder="Name"/>
//                             </div>
//                             <div class="form-input">
//                                 <span class="input-icon"><i class="far fa-envelope"></i></span>
//                                 <input type="email" name="email" id="email" placeholder="Email addresse"/>    
//                             </div>
//                             <div class="form-input">
//                                 <span class="input-icon"><i class="fas fa-lock"></i></span>
//                                 <input type="password" name="password" id="password" placeholder="Password"/>
//                             </div>
//                             <button type="submit" class="btn">Register</button>
//                         </form>
//                         <span class="to-login">Have an account? <a href="#">Log in </a> </span>
//                     </div>
//                 </div>
//             </div>
//             <h3> All your notes in one place</h3> 
//         </main>
//     )
// }


import React from 'react'
import RegisterGrid from '../components/RegisterGrid'
//import logo from "../img/Keep it.svg"
// import hero from "../img/undraw_uploading_re_okvh.svg"
import Logo from '../components/Logo'

export default function Login() {
    return (
        <main>
            <Logo/>
            <RegisterGrid type="login"/>
        </main>
    )
}
