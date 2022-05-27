import React from 'react';
import { connect } from 'react-redux';
import '../styles/login-form.css';
import '../styles/apartment.css';



export function Apartment(props) {
        // return (
        //     <div>
        //         <h1>Login</h1>
        //     </div>
        // );

        return (
            <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                        <meta content="" name="keywords"/>
                            <meta content="" name="description"/>


                                <link href="img/favicon.png" rel="icon"/>
                                    <link href="img/apple-touch-icon.png" rel="apple-touch-icon"/>


                                        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
                                              rel="stylesheet"/>


                                            <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>


                                                <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
                                                    <link href="lib/animate/animate.min.css" rel="stylesheet"/>
                                                        <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet"/>
                                                            <link href="lib/owlcarousel/assets/owl.carousel.min.css"
                                                                  rel="stylesheet"/>

                                                                <link href="../styles/apartment.css" rel="stylesheet"/>


            </head>

            <body>
            <div>
                <h1> Welcome! You are one step closer to finding your apartment</h1>
                <div className="login-container">
                <section className="statistic" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h3>Find Your Home Sweet Home With Us</h3>
                                <p>


                                    Renting a new apartment should be simple and painless. Apartment Finder has the most up-to-date availability and pricing data in the industry to help you find the best deals, the best rent specials, and the true cost of your next apartment.
                                </p>
                            </div>
                            {/*<p> To find your dream apartment, click <a onClick = {() => window.open("xyz.html")}>here</a></p>*/}
                        </div>
                    </div>
                </section>
                </div>
            </div>
            <div id="design-cast">
                <br/>
                <h1><center> Listed Apartments</center></h1>

                <div className="member">
                    <img src="https://media.gettyimages.com/photos/building-apartments-picture-id1288941678?k=20&m=1288941678&s=612x612&w=0&h=qOI5byfxYmRVgWpjnI4_7d1k5nq1YH4zXI8JqhrnsDQ=" className="img-responsive img-thumbnail"
                         alt="Responsive image"/>
                    <div className="name"> <br/><br/><b>Mount Apartment</b>
                         <br/>
                        919 Bayside Dr, Newport Beach, CA 92660 <br/>
                        1-3 beds | $2350 - $5790
                    </div>
                </div>
                <div className="member">
                    <img src="https://media.gettyimages.com/photos/luxury-apartments-along-millennium-promenade-in-bristol-picture-id843165570?k=20&m=843165570&s=612x612&w=0&h=nBnh0cKpBXMDczXbQAkRdrlkQplYBIzLKEQDDEdDu5M=" className="img-responsive img-thumbnail"
                         alt="Responsive image"/>
                    <div className="name"> <br/><br/><b>Greenland</b>
                        <br/>
                        199 PathWalker, Harvard Ave, CA 692270 <br/>
                        1-2 beds | $1050 - $3790
                    </div>
                </div>
                <div className="member">
                    <img src="https://media.gettyimages.com/photos/residential-buildings-near-paulista-street-picture-id160380432?k=20&m=160380432&s=612x612&w=0&h=awkUgC8VrqzHlxCPHd72t7DRoxNTh1OU4tD5w2wr6VI=" className="img-responsive img-thumbnail"
                         alt="Responsive image"/>
                    <div className="name"> <br/><br/><b>BaySide Apartments</b>
                        <br/>
                        999 Gerald, Riverside Area, <br/>WA 556070 <br/>
                        1 bed | $950
                    </div>
                </div>
            </div>
            <div id="design-cast">

                <div className="member">
                    <img src="https://media.gettyimages.com/photos/white-south-beach-condo-with-palm-trees-picture-id170615066?k=20&m=170615066&s=612x612&w=0&h=XFUzeGdqoD9U4bVz-uy-QaSC2Cu6OURrEgv0MLKVUuA=" className="img-responsive img-thumbnail"
                         alt="Responsive image"/>
                    <div className="name"> <br/><br/><b>Forris</b>
                        <br/>
                        343 Walkin Highway, Union Area, CA 708734 <br/>
                        Studio | $2350
                    </div>
                </div>
                <div className="member">
                    <img src="https://media.gettyimages.com/photos/condominiums-with-swimming-pool-picture-id165581203?k=20&m=165581203&s=612x612&w=0&h=i6Q9KEZ_pDLDZsvqlpIvFSI9HC8No7_6fknbhFJWO3Q=" className="img-responsive img-thumbnail"
                         alt="Responsive image"/>
                    <div className="name"> <br/><br/><b>Haylow Apartments</b>
                        <br/>
                        22 Pointhigh, University Dr, <br/>CA 234432 <br/>
                        2 -3 beds | $2350 - $4590
                    </div>
                </div>
                <div className="member">
                    <img src="https://media.gettyimages.com/photos/row-of-suburban-townhouses-on-summer-day-picture-id108220043?k=20&m=108220043&s=612x612&w=0&h=9UI-_S7KvBeQiyjHqoi3mhQVsl4SuKpvmhv1dzOEBAk=" className="img-responsive img-thumbnail"
                         alt="Responsive image"/>
                    <div className="name"> <br/><br/><b>BlueLow</b>
                        <br/>
                        34 Number Gellow, Chrossway, CA 719324 <br/>
                        2 beds | $1350 - $3455
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/>
            <footer>

                <p className="copyright color-text-a">
                    &copy; Copyright
                    <span className="color-a"> Flatmatefinder</span> All Rights Reserved.
                </p>
            <div className="credits">

                Designed by <a href="https://bootstrapmade.com/">flatmatefinderuci</a>
            </div>
            </footer>


            </body></html>


        );
    }

    const mapStateToProps = state => ({
        loggedIn: state.auth.currentUser !== null
    });

    export default connect(mapStateToProps)(Apartment);
