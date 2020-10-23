import React from 'react';

function App() {
    return (
        <div className="App">
            <div className="cr-header-section header-section header-transparent header-sticky section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="float-left">
                                <a href="http://localhost:3000/" className="header-logo m2-txt2">
                                    Weemar Aditya
                                </a>
                            </div>
                            <div className="float-right">
                                <button className="menu-toggle text-white"><i className="ion-android-menu"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cr-menu-section menu-section">
                <div className="container">
                    <nav className="cr-menu one-page-menu">
                        <ul>
                            <li className="s2-txt1 active"><a href="#home">home</a></li>
                            <li className="s2-txt1"><a href="#about-me">about me</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div id="home">
                <video id="fullscreen-bg-video" autoPlay muted loop>
                    <source src="/assets/videos/default-screen.mp4" type="video/mp4" />
                </video>

                <div className="size1 overlay1">
                    <div className="size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50">
                        <div className="co-hero-slide-content-1 txt-center">
                            <h4>Portal Ukhuwah</h4>
                            <h1>Bagi semua yang berdakwah</h1>
                            <a href="#about-me" className="btn btn-primary btn-lg" data-scroll="">Learn More</a>
                        </div>
                    </div>

                </div>
            </div>

            <div id="about-me" className="mp-about-section section pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="mp-section-title text-center col-12 mb-60" data-name="Weemar">
                            <h1 className="m2-txt2 text-primary">About me</h1>
                        </div>

                        <div className="mb-about-content text-center col-md-10 col-md-offset-1 col-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non facilisis tortor. Donec euismod libero eget ipsum ultricies, vel tincidunt turpis auctor. Etiam lorem ex, cursus vel lacinia vel, cursus ut felis. Pellentesque id libero sollicitudin, sagittis quam sit amet, congue tortor. Aliquam mollis, eros vitae varius dapibus, ligula odio fermentum magna,</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className="co3-feature-project-section section pt-130 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="co3-feature-project-content col-md-6 col-12 mb-50">
                            <h4 className="m2-txt2 text-primary">Teruntuk Kita Semua yang Berdakwah</h4>
                            <p> Dakwah itu menyatukan bukan membuat renggang, menyebarkan ilmu bukan
                            kebencian. Maka portal ini adalah tempat kita semua berkumpul, berbagi
                            inspirasi dan motivasi, serta terus memperbaiki gerak langkah dakwah kita agar
apa yang kita cita-citakan Allah wujudkan: <b>Kemuliaan Islam!</b></p>
                        </div>

                        <div className="col-md-6 col-12 mb-50">
                            <div className="cr-about-video">
                                <img src="/assets/img/creative/about/1.jpg" alt="" />
                                <a href="/assets/videos/default-screen.mp4" className="video-popup">
                                    <i className="fa fa-play-circle"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cr-footer section">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6 col-xs-12">
                            <div className="cr-footer-copyright">
                                <p>Copyright © 2018 <a href="https://weemaraditya.com/">weemaraditya</a>. All Rights Reserved.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-xs-12">
                            <div className="cr-footer-menu">
                                <ul>
                                    <li><a href="#"> Privacy</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Download</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
