const theNavbar = document.querySelector("#header");

const injectNav = () => {
        const nav = `<nav class="navbar navbar-expand-sm sticky-top patrick">
                        <div class="container-fluid">
                            <a class="navbar-brand logo" href="index.html">
                                <img src="./assets/images/logo_transparent_2.png">
                            </a>
                            <!-- Login -->
                            <ul class="navbar-nav" id="loginarea">
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop-register">Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop-login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>`;
        theNavbar.innerHTML += nav;
};

injectNav();