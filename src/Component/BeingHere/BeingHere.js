import React from 'react';
import Being from '../../asset/Being.mp4'
import './BeingHere.css'
const BeingHere = () => {
          return (
                    <div className='bg-blue-900'>
                         <h1 className='text-center font-bold text-6xl text-white p-24'>Being Here</h1>   
                         <video className=' mx-auto '  width="1150" height="700" controls autoPlay>
      <source src={Being} type="video/mp4"/>
     </video> 
    
          <div className='bg-blue-100 '>
     <div class="card  m-24 text-white">
  <div class="card-body">
    <h2 class="card-title text-4xl text-blue-900 pt-10 ml-2">Show up, make incredible work, and live the life you want</h2>
    <p className='text-2xl text-blue-900 p-3'>From day one, we’ve been committed to making Instrument a place where people can make the best work of their career — sustainably. This means working reasonable hours. Spending each day in a welcoming, inclusive environment. Taking vacations when you need them. We believe in doing everything we can to help our employees lead healthy, full lives. </p>
    <div class="card-actions  text-center">
      <button class="btn btn-primary p-3 m-3 ">Who We Are</button>
    </div>
  </div>
</div>
<div class="card card-side bg-base-100 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
  <figure><img src="https://images.prismic.io/instrument-v5/8e7a4d32-5d72-439c-a3db-165e930ffe19_Being_Here_Wellness.jpg?auto=compress,format&w=1920" alt="Movie"></img></figure>
  <div class="card-body text-blue-900 bg-blue-100">
    <h2 class="card-title">Health & Wellbeing</h2>
    <p>While it should be standard practice for companies to offer health and wellbeing benefits to their employees, it’s not always the case. Here, it is—even alternative care such as massage and acupuncture. All available to you on your first day of employment.</p>
   
     <li>100% employee coverage for health, vision and dental insurance for HDHP Plan</li>
     <li>Generous coverage for PPO Plan options (employee cost subject to coverage selection)</li>
     <li>Alternative / naturopathic care benefits</li>
     <li>Full transgender coverage (including hormone therapy and gender affirming surgery)</li>
     <li>Full fertility coverage </li>
     <li>Optional Health Savings Account (HSA)</li>
     <li>Optional Flexible Spending Account (FSA)</li>
     <li>WFH & Wellbeing monthly stipend </li>
     <li>Mental Health coverage and support</li>
     <li>Headspace membership</li>

  
  
    <h2 class="card-title">Time Off</h2>
    <p>Work is important, but so is everything else. We want you to have time to do all the things that make you, you.</p>
  
  <li>Generous Vacation Time Off (starting at 3 weeks, increasing with tenure) </li>
  <li>Sick Leave </li>
  <li>Learning Time Off</li>
  <li>Volunteer Time Off</li>
  <li>Team Days Off (for your project team to take a break together) </li>
  <li>Company-wide closures (for the whole company to take a break together)</li>
  </div>
</div>
<div class="card card-side bg-base-100  mt-28 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
  
  <div class="card-body text-blue-900 bg-blue-100">
    <h2 class="card-title">Professional Growth</h2>
    <p>Your growth is important to us. Expanding your skills, perspective, and experiences are all supported here.</p>
   
     <li>Structured career management and mentorship</li>
     <li>Internal programming & education</li>
     <li>Individual professional development stipend</li>
    

  
  
    <h2 class="card-title">Profit Sharing</h2>
    <p>It’s simple. You help us reach our goals; we share the rewards with you.</p>
  
  <li>Every full-time employee receives a discretionary profit-sharing bonus each year </li>

  
    <h2 class="card-title">Retirement</h2>
    <p>Were we ever to use the term ‘adulting’—which we wouldn’t—it would be for this. Planning ahead is smart, and we’d like to help set you up for a great future.</p>
  
  <li>100% 401K matching for up to 4% of your eligible compensation</li>

 
  </div>
  <figure><img src="https://images.prismic.io/instrument-v5/3f123baf-4638-439c-a4c9-b29cc9719a32_Being_Here_Professional_Dev.jpg?auto=compress,format&w=1920" alt="Movie"></img></figure>
</div>
<div class="card card-side bg-base-100 mt-28 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
  <figure><img src="https://images.prismic.io/instrument-v5/55e44921-6b40-459b-aefe-14cefd38395a_parental-leave.jpg?auto=compress,format&w=1920" alt="Movie"></img></figure>
  <div class="card-body text-blue-900 bg-blue-100">
    <h2 class="card-title">Parental Leave</h2>
    <p>We get it—growing a family is wonderful and exhausting. Many of us are parents, too. We respect your time away, and will support you as you transition back to work. These benefits apply to the birth, adoption or foster care placement of a new human in your life. </p>
   
     <li>16 weeks paid & protected leave for primary caregivers</li>
     <li>8 additional weeks protected leave for primary caregivers (unpaid)</li>

     <li>4-6 weeks paid leave for secondary caregivers</li>
     <li>Dedicated, private lactation rooms in our offices </li>
     <li>Contribution for after‑school care, daycare, and in‑home care for dependents</li>

   
  
  
    <h2 class="card-title">Hardship Leave</h2>
    <p>It’s important to us that we take care of you if something serious comes up for you or someone close to you.</p>
  

  <li>Medical, bereavement, hardship, and other types of leave </li>

  </div>
</div>

</div>
<div className='bg-white pt-28'>
<h1 class="text-5xl font-bold text-black text-center">Build . Grow . Serve</h1>
<p className='text-center text-4xl mt-3 p-6'>We give every employee 16 hours of paid time each year to volunteer with non-profits of their choosing — collectively contributing 4800 hours to our community.</p>
<div className='mx-auto text-center justify-items-center justify-center align-middle'>
          <button className='btn btn-active bg-white text-black mx-auto text-center justify-items-center justify-center align-middle'>Get in Touch</button>
</div>
</div>
     
                    </div>
          );
};

export default BeingHere;