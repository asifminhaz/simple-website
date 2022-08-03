import React from 'react';

const Footer = () => {
          return (
                    <div>
                              <footer class="footer p-10 bg-dark text-white text-base-content">
  <div className='text-white'>
    <span class="footer-title"></span> 
    <a href='/home'>HOME</a> 
    <a  class="link link-hover">WORK</a> 
    <a href='/whatweare' class="link link-hover">WHO WE ARE</a> 
    <a href='/whatwedo' class="link link-hover">WHAT WE DO</a>
    <a href="/articles" class="link link-hover">ARTICLES</a>
  </div> 
  <div className='text-white'>
    <span class="footer-title"></span> 
    <a class="link link-hover">BEING HERE</a> 
    <a class="link link-hover">Contact</a> 
    <a href='/carrers' class="link link-hover">CAREERS</a> 
    <a class="link link-hover">PRIVACY</a>
  </div> 
  {/* <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div>  */}
  <div>
    <span class="footer-title">Newsletter</span> 
    <div class="form-control w-80">
      <label class="label">
        <span class="label-text">Enter your email address</span>
      </label> 
      <div class="relative">
        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-ghost absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
                    </div>
          );
};

export default Footer;