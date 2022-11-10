import React from "react";
import $ from 'jquery/dist/jquery';
import RegisterForm from "./RegisterForm"
class Onepager extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand_name:'Instaverse Digital Media & Marketing',
        logo: 'https://i.ibb.co/MBJKkCd/Instaverse-Final-Logo.png',
        logo_alt:'https://i.ibb.co/MBJKkCd/Instaverse-Final-Logo.png',
        contact:{
          phone:'+91-9663855590',
          whatsapp:'+91-9663855580',
          email:'instaversedigitalmedia@gmail.com',
          address:'#456, Devi Nagar, 4th block Jayanagar, Bangalore-62.'
        },
        companysocial:{
          facebook:'https://www.facebook.com/mgverse',
          twitter:'https://twitter.com/themgverse',
          instagram:'https://www.instagram.com/mg_verse/',
          youtube:'https://www.youtube.com/c/MGVerse?sub_confirmation=1',
        },
        instruments:[
          {
            name:'',
            img:'https://i.ibb.co/rH0NqdN/mg-verse.jpg',
            desc:'MG Verse'
          },
          {
            name:'',
            img:'https://i.ibb.co/ZNFCd3z/sri-vidwan-manjnath-bhat.jpg',
            desc:'Sri Vidwan Manjunath Bhat'
          },
          {
            name:'',
            img:'https://i.ibb.co/qCQN7H7/Millex-Logo-copy.jpg',
            desc:'Millex'
          },
          {
            name:'',
            img:'https://i.ibb.co/JcNJt66/icons-of-indian-business.jpg',
            desc:'Icons Of Indian Business'
          },
          {
            name:'',
            img:'https://i.ibb.co/LSW8F67/104483415-155097646133251-4101512109230623225-n.jpg',
            desc:'Nitya Soubhagya Kannada'
          },
          {
            name:'',
            img:'https://i.ibb.co/YdmDfsX/Nitya-Soubhagya-Telugu.jpg',
            desc:'Nitya Soubhagya Telugu'
          },
          {
            name:'',
            img:'https://i.ibb.co/VSmZkS2/Nitya-Soubhagya-Telug.jpg',
            desc:'Nitya Soubhagya Tamil'
          },
          {
            name:'',
            img:'https://i.ibb.co/R0J1ffJ/Whats-App-Image-2022-05-20-at-10-06-52-PM.jpg',
            desc:'OM TV Kannada'
          },
          {
            name:'',
            img:'https://i.ibb.co/cth3rdM/logo.png',
            desc:'Sai Flowers'
          },
          {
            name:'',
            img:'https://i.ibb.co/NjGfMtn/Food-Street-Logo.png',
            desc:'Food Street'
          },
          {
            name:'',
            img:'https://i.ibb.co/FHQCC2G/Rakesh-Agediga.jpg',
            desc:'Rakesh Adiga'
          },
         /* {
            name:'Guitar',
            img:'/images/work2.jpg',
            desc:''
          },*/
        ],
        whychooseus:{
          'desc':'Instaverse was established in December 2019. Our Main Objective is to develop quality-based Web applications. We have Good Explore in Web designing, Digital Marketing, and Web Development. We will submit the project in time. Instaverse is an Web Development and Digital marketing firm located in Bangalore, with a keen understanding of the Digital World, as well as a thoughtful approach to online brand positioning. We believe that high-quality work should not come at a high price or through complicated processes, which is why we have built a reputation around creating products that not only look amazing but are also easy to use and packed with brilliant features.',
          points:[
            'Services we offer:',
            'Responsive Web Design.',
            'Mobile Application Development.',
            'Cloud-based Software Development.',
            'Design and Branding.',
            'IT Consultation.',
            'Digital Marketing Campaigns.',
            'SEO and SMM & Online Marketing Campaigns',
            'Facebook and Google Advertising',
            'Email Marketing, and much more.'
          ]
        },
        plans:[
          {
            name:'Basic Plan',
            cost:'1000',
            points:[
              '3 Months',
              '60 Posts',
              'Facebook, Youtube, Instagram',
            ],
          },
          {
            name:'Gold Plan',
            recommanded: true,
            cost:'2000',
            points:[
              '2 Months',
              '20 Posts',
              'Facebook, Youtube, Instagram',
            ],
          },
          {
            name:'Platinum Plan',
            cost:'4000',
            points:[
              '1 Months',
              '10 Posts',
              'Facebook, Youtube, Instagram',
            ],
          },
        ],
        team:[
          {
            img:'https://i.ibb.co/jfYS8JH/Manju-Gowda.png',
            name:'MANJUNATH',
            role:'CONTENT HEAD',
            social:{
              facebook:'',
              twitter:'',
              google:'',
            }
          },
          {
            img:'https://i.ibb.co/JtZJbG4/Sasikumar.png',
            name:'SASIKUMAR SRINIVASAN',
            role:'TECHICAL SPECILIST',
            social:{
              facebook:'',
              twitter:'',
              google:'',
            }
          },
          {
            img:'https://i.ibb.co/hFsNN0j/Anupkumar-Ava.png',
            name:'ANURAM M',
            role:'MARKETING HEAD',
            social:{
              facebook:'',
              twitter:'',
              google:'',
            }
          }
        ]
      };
    }

    componentDidMount(){
        $(window).on('load', function() {
            $("#preloader").delay(600).fadeOut();
        });
    
        $('body').scrollspy({
            target: '#nav',
            offset: $(window).height() / 2
        });
    
        $("#nav .main-nav a[href^='#']").on('click', function(e) {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 600);
        });
    
        $('#back-to-top').on('click', function(){
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        });
    
        $('#nav .nav-collapse').on('click', function() {
            $('#nav').toggleClass('open');
        });
    
        $('.has-dropdown a').on('click', function() {
            $(this).parent().toggleClass('open-drop');
        });
    
        $(window).on('scroll', function() {
            var wScroll = $(this).scrollTop();
    
            // Fixed nav
            wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
    
            // Back To Top Appear
            wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
        });
    }
    render() {
      return (
          <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
            <title>HTML Template</title>
            {/* Google font */}
            {/* Header */}
            <header id="home">
              {/* Background Image */}
              <div className="bg-img" style={{backgroundImage: 'url("https://i.ibb.co/VpXhWHY/man-woman-looking-her-happy-female-friend-showing-digital-tablet.jpg")'}}>
                <div className="overlay" />
              </div>
              {/* /Background Image */}
              {/* Nav */}
              <nav id="nav" className="navbar nav-transparent">
                <div className="container">
                  <div className="navbar-header">
                    {/* Logo */}
                    <div className="navbar-brand">
                      <a href="index.html">
                        <img className="logo" src={this.state.logo} alt="logo" />
                        <img className="logo-alt" src={this.state.logo_alt} alt="logo" />
                      </a>
                    </div>
                    {/* /Logo */}
                    {/* Collapse nav button */}
                    <div className="nav-collapse">
                      <span />
                    </div>
                    {/* /Collapse nav button */}
                  </div>
                  {/*  Main navigation  */}
                  <ul className="main-nav nav navbar-nav navbar-right navbar-expand-sm">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#features">ABOUT US</a></li>
                    <li><a href="#portfolio">OUR PARTNERS</a></li>
                    <li><a href="#service">SERVICES</a></li>
                    <li><a href="#pricing">PRICES</a></li>
                    <li><a href="#team">TEAM</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    {/*
                    <li className="has-dropdown"><a href="#blog">Blog</a>
                      <ul className="dropdown">
                        <li><a href="blog-single.html">blog post</a></li>
                      </ul>
                    </li>
                    */}
                    <li><a href="#contactform"><button className="btn bookdemo">ENQUIRY</button></a></li>
                  </ul>
                  {/* /Main navigation */}
                </div>
              </nav>
              {/* /Nav */}
              {/* home wrapper */}
              <div className="home-wrapper">
                <div className="container">
                  <div className="row">
                    {/* home content */}
                    <div className="col-md-12 col-md-offset-1">
                      <div className="home-content">
                        <h1 className="white-text">Digital Media</h1>
                        <h1 className="white-text">& Marketing</h1>   
                        <div className="row">
                          <div className="col-sm-6 text-lg-right text-center mb-3">
                            <a href="#contactform" className="btn bookdemo p-3">&nbsp;&nbsp;&nbsp;ENQUIRY&nbsp;&nbsp;</a>      
                          </div>
                          <div className="col-sm-6 text-lg-left text-center">
                  <a href={'https://api.whatsapp.com/send?phone='+this.state.contact.whatsapp.replace(/[^0-9 ]/g, "")+'&text=&source=&data='} className="btn btn-success p-3"><i className="fa fa-whatsapp"></i> &nbsp; {this.state.contact.whatsapp}</a>
                          </div>        
                        </div>
                      </div>
                    </div>
                    {/* /home content */}
                  </div>
                </div>
              </div>
              {/* /home wrapper */}
            </header>
            {/* /Header */}
            {/* Portfolio */}
            <div id="portfolio" className="section sm-padding bg-grey">
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  {/* Section header */}
                  <div className="section-header text-center">
                    <h2 className="title">OUR PARTNERS</h2>
                  </div>
                  {/* /Section header */}
                  {this.state.instruments.map((i,index)=>{
                    return (
                      <div className="col-md-2 col-xs-6 work" key={index}>
                        <img className="img-responsive" src={i.img} alt="" />
                        <div className="overlay" />
                        <div className="work-content">
                          <span>{i.name}</span>
                          <h3>{i.desc}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* /Row */}
              </div>
              {/* /Container */}
            </div>
            {/* /Portfolio */}
            {/* Why Choose Us */}
            <div id="features" className="section sm-padding bg-grey">
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  {/* why choose us content */}
                  <div className="col-md-6">
                    <div className="section-header">
                      <h2 className="title">WHY CHOOSE US</h2>
                    </div>
                    <p>{this.state.whychooseus.desc}</p>
                    {this.state.whychooseus.points.map((p,index)=>{
                      return (
                        <div className="feature" key={index}>
                          <i className="fa fa-check" />
                          <p>{p}</p>
                        </div>
                      );
                    })}
                  </div>
                  {/* /why choose us content */}
                  {/* About slider */}
                  <div className="col-md-5 work d-none d-sm-block">
                   <img className="img-responsive" src="https://i.ibb.co/GnGFzHK/About-Us.png" alt="" />
                  </div>
                  {/* /About slider */}
                </div>
                {/* /Row */}
              </div>
              {/* /Container */}
            </div>
            {/* /Why Choose Us */}
             {/* Service */}
             <div id="service" className="section sm-padding">
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  {/* Section header */}
                  <div className="section-header text-center">
                    <h2 className="title">OUR SERVICES</h2>
                  </div>
                  {/* /Section header */}
                  {/* service */}
                  <div className="col-md-4 col-sm-6">
                    <div className="service">
                      <i className="fa fa-diamond" />
                      <h3>SOCIAL MEDIA MARKETING</h3>
                      <p>Social Media Optimization is the process of promoting the Product. The Promotion can be done through the Social Interface like YOUTUBE,FACEBOOK, TWITTER, INSTAGRAM and many.</p>
                    </div>
                  </div>
                  {/* /service */}
                  {/* service */}
                  <div className="col-md-4 col-sm-6">
                    <div className="service">
                      <i className="fa fa-rocket" />
                      <h3>VIDEO EDITING</h3>
                      <p>Publish an engaging & trendy Commercial for your brand name by the Best Video Production Company.A corporate video can increase your company's core sales. Engage with us to give the perfect tonality to your videos.</p>
                    </div>
                  </div>
                  {/* /service */}
                  {/* service */}
                  <div className="col-md-4 col-sm-6">
                    <div className="service">
                      <i className="fa fa-cogs" />
                      <h3>WEB DESIGNING</h3>
                      <p>Instaverse will Provide the Premium Designs for Clients With Various Technologies and many More Applications. </p>
                    </div>
                  </div>
                  {/* /service */}
                  {/* service */}
                  <div className="col-md-4 col-sm-6">
                    <div className="service">
                      <i className="fa fa-diamond" />
                      <h3>SEO</h3>
                      <p>Search Engine Optimization is used to increase the Quality and Quantity of the Website Traffic. This Process includes finding the Keywords which are helpful to rank in the First Page. The Main Tasks included are Keyword Analysis, On-Page Works, Off-Page Works, Back links, Increasing the Web Traffic.	We are having Some Professional SEO ANALYSTS. And also we have Professional Content Writers who can write the content in an Understandable Language.</p>
                    </div>
                  </div>
                  {/* /service */}
                  {/* service */}
                  <div className="col-md-4 col-sm-6">
                    <div className="service">
                      <i className="fa fa-pencil" />
                      <h3>E-COMMERCE</h3>
                      <p>Online Retailing is the process behind E-Commerce Development. We develop E-Commerce website according to your ideas. The First step is to start with a Strategy and Choosing the Domain and platform to develop your idea.</p>
                    </div>
                  </div>
                  {/* /service */}
                  {/* service */}
                  <div className="col-md-4 col-sm-6">
                    <div className="service">
                      <i className="fa fa-flask" />
                      <h3>LOGO DESIGNING</h3>
                      <p>Cinimage creates high-end, creative & stunning animations in Bangalore. Visualizing the regular, artistically.</p>
                    </div>
                  </div>
                  {/* /service */}
                </div>
                {/* /Row */}
              </div>
              {/* /Container */}
            </div>
            {/* /Service */}
            {/* Numbers */}
            <div id="numbers" className="section sm-padding">
              {/* Background Image */}
              <div className="bg-img" style={{backgroundImage: 'url("https://i.ibb.co/VpXhWHY/man-woman-looking-her-happy-female-friend-showing-digital-tablet.jpg")'}}>
                <div className="overlay" />
              </div>
              {/* /Background Image */}
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  {/* number */}
                  <div className="col-sm-3 col-xs-6">
                    <div className="number">
                      <i className="fa fa-users" />
                      <h3 className="white-text"><span className="counter">451</span></h3>
                      <span className="white-text">Happy clients</span>
                    </div>
                  </div>
                  {/* /number */}
                  {/* number */}
                  <div className="col-sm-3 col-xs-6">
                    <div className="number">
                      <i className="fa fa-trophy" />
                      <h3 className="white-text"><span className="counter">12</span></h3>
                      <span className="white-text">Awards won</span>
                    </div>
                  </div>
                  {/* /number */}
                  {/* number */}
                  <div className="col-sm-3 col-xs-6">
                    <div className="number">
                      <i className="fa fa-coffee" />
                      <h3 className="white-text"><span className="counter">154</span>K</h3>
                      <span className="white-text">Cups of Coffee</span>
                    </div>
                  </div>
                  {/* /number */}
                  {/* number */}
                  <div className="col-sm-3 col-xs-6">
                    <div className="number">
                      <i className="fa fa-file" />
                      <h3 className="white-text"><span className="counter">45</span></h3>
                      <span className="white-text">Projects completed</span>
                    </div>
                  </div>
                  {/* /number */}
                </div>
                {/* /Row */}
              </div>
              {/* /Container */}
            </div>
            {/* /Numbers */}
            {/* Pricing */}
            <div id="pricing" className="section sm-padding">
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  {/* Section header */}
                  <div className="section-header text-center">
                    <h2 className="title">PRICE TABLE</h2>
                  </div>
                  {/* /Section header */}
                  {this.state.plans.map((p,index)=>{
                    return (
                      <div className={p.recommanded ? 'col-sm-4 recommanded' : 'col-sm-4'} key={index}>
                        <i className={p.recommanded ? 'fa fa-star' : 'd-none'}></i>
                      <div className="pricing">
                        <div className="price-head">
                          <span className="price-title">{p.name}</span>
                          <div className="price">
                            <h3><i className="fa fa-inr"></i> {p.cost}<span className="duration">/ month</span></h3>
                          </div>
                        </div>
                        <ul className="price-content">
                          {p.points.map((i,index)=>{
                            return (
                              <li key={index}>
                                <p>{i}</p>
                              </li>
                            );
                          })}
                        </ul>
                        <div className="price-btn">
                            <a href="#contactform" className="outline-btn">Purchase now</a>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
                {/* Row */}
              </div>
              {/* /Container */}
            </div>
            {/* /Pricing */}
            {/* Team */}
            <div id="team" className="section sm-padding p-0">
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  {/* Section header */}
                  <div className="section-header text-center">
                    <h2 className="title">OUR TEAM</h2>
                  </div>
                  {/* /Section header */}
                  {/* team */}
                  {this.state.team.map((t,index)=>{
                    return (
                    <div className="col-sm-4" key={index}>
                    <div className="team">
                      <div className="team-img">
                        <img className="img-responsive" src={t.img} alt="" />
                        <div className="overlay">
                          <div className="team-social">
                            <a href={t.social.facebook}><i className="fa fa-facebook" /></a>
                            <a href={t.social.google}><i className="fa fa-google-plus" /></a>
                            <a href={t.social.twitter}><i className="fa fa-twitter" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3>{t.name}</h3>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>);
                  })}
                  {/* /team */}
                  
                </div>
                {/* /Row */}
              </div>
              {/* /Container */}
            </div>
            {/* /Team */}
            {/* Contact */}
            <div id="contactform" className="section sm-padding">
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  {/* Section-header */}
                  <div className="section-header text-center">
                    <h2 className="title">ENQUIRY FORM</h2>
                  </div>
                  {/* /Section-header */}
                </div>
                {/* /Row */}
                <div className="row bg-dark" >
                     {/* contact form */}
                    <div className="col-md-8 ml-auto mr-auto p-2">
                    <RegisterForm />
                    </div>
                    {/* /contact form */}
                </div>
              </div>
              <div className="row sm-padding" id="contact">
                  <div className="section-header text-center">
                    <h2 className="title">CONTACT US</h2>
                  </div>
                     {/* contact */}
                  <div className="col-sm-4">
                    <div className="contact">
                      <i className="fa fa-phone" />
                      <h3>Phone</h3>
                      <p>{this.state.contact.phone}</p>
                    </div>
                  </div>
                  {/* /contact */}
                  {/* contact */}
                  <div className="col-sm-4">
                    <div className="contact">
                      <i className="fa fa-envelope" />
                      <h3>Email</h3>
                      <p>{this.state.contact.email}</p>
                    </div>
                  </div>
                  {/* /contact */}
                  {/* contact */}
                  <div className="col-sm-4">
                    <div className="contact">
                      <i className="fa fa-map-marker" />
                      <h3>Address</h3>
                      <p>{this.state.contact.address}</p>
                    </div>
                  </div>
                  {/* /contact */}
              </div>
              {/* /Container */}
            </div>
            {/* /Contact */}
            {/* Footer */}
            <footer id="footer" className="sm-padding bg-dark">
             {/* Background Image */}
             <div className="bg-img" style={{backgroundImage: 'url("https://i.ibb.co/VpXhWHY/man-woman-looking-her-happy-female-friend-showing-digital-tablet.jpg")'}}>
             <div className="overlay" />
           </div>
           {/* /Background Image */}
              {/* Container */}
              <div className="container">
                {/* Row */}
                <div className="row">
                  <div className="col-md-12">
                    {/* footer logo */}
                    <div className="footer-logo">
                      <a href="index.html"><img src={this.state.logo} alt="logo" /></a>
                    </div>
                    {/* /footer logo */}
                    {/* footer follow */}
                    <ul className="footer-follow">
                      <li><a href={this.state.companysocial.facebook}><i className="fa fa-facebook" /></a></li>
                      <li><a href={this.state.companysocial.twitter}><i className="fa fa-twitter" /></a></li>
                      <li><a href={this.state.companysocial.instagram}><i className="fa fa-instagram" /></a></li>
                      <li><a href={this.state.companysocial.youtube}><i className="fa fa-youtube-play" /></a></li>
                    </ul>
                    {/* /footer follow */}
                    {/* footer copyright */}
                    <div className="footer-copyright">
                      <p>Copyright © 2022. All Rights Reserved By {this.state.brand_name}.</p>
                    </div>
                    {/* /footer copyright */}
                  </div>
                </div>
                {/* /Row */}
              </div>
              {/* /Container */}
            </footer>
            {/* /Footer */}
            {/* Back to top */}
            <div id="back-to-top" />
            {/* /Back to top */}
            {/* Preloader */}
      
            {/* /Preloader */}
            {/* jQuery Plugins */}
          </div>
        );
      }
    };


export default Onepager;