
import './Home.css'
import Video from './Video';
const Home = () => {
       

          return (
                   
          <div>
                    <Video></Video>
     
     
     <div>
          <h2 className='text-center font-bold text-4xl m-48 text-white'>We enrich human lives through the thoughtful application of design and technology</h2>
     </div>
     <div classNam="hero min-h-screen bg-dark grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-32 gap-36">
  <div class="hero-content flex-col lg:flex-row">
    <img className=' w-3/6 m-24' src="https://images.prismic.io/instrument-v5/f43c62bc-9a19-4771-a13e-b8b0d93e6d6b_72andsunny-nyc_ISAKTINER-8376-edit.jpg?auto=compress,format&w=1280" />
    <div>
      <h1 class="text-3xl font-semi-bold text-white text-start">It is with great excitement that we announce Kara Place as Instrument’s next CEO </h1>
      {/* <h1 class="text-3xl font-bold text-white text-center">announce Kara Place as </h1>
      <h1 class="text-3xl font-bold text-white text-center">Instrument’s next CEO</h1> */}
{/*       
      <button className='mt-6 ml-20 text-white'>Read more</button> */}
         <button className="btn btn-active  mt-6   bg-white text-black ">Read more</button>
   
    </div>

  </div>
  
</div>
    <div>
    <div class="hero min-h-screen bg-dark">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img  className='w-3/6 '  src="https://images.prismic.io/instrument-v5/8b02f52b-5580-42a0-ac5c-15e16a8b88a0_Homepage.png?auto=compress,format&w=1280" />
    <div>

      <h1 class="text-2xl font-semi-bold text-center text-white justify-items-start items-start justify-start text-start">In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done.</h1>
      {/* <h1 class="text-3xl font-bold text-center text-white">our representation data and</h1>
      <h1 class="text-3xl font-bold text-center text-white">committed to doing so annually. One</h1>
      <h1 class="text-3xl font-bold text-center text-white">year later, we are pleased to share</h1>
      <h1 class="text-3xl font-bold text-center text-white">an update on our goals, our</h1>
      <h1 class="text-3xl font-bold text-center text-white">progress, and the work that still</h1>
      <h1 class="text-3xl font-bold text-center text-white">needs to be done.</h1>
   */}
      <button className="btn btn-active  mt-6  bg-white text-black">Read more</button>
    </div>
  </div>
</div>
    </div>
    <div class="hero min-h-screen bg-dark">
  <div class="hero-content flex-col lg:flex-row">
    <img className='mr-36 w-3/6' src="https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <div>
      <h1 class="text-2xl font-semi-bold text-white justify-items-center items-center">As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications.</h1>

{/*       
      <button className='mt-6 ml-20 text-white'>Read more</button> */}
         <button className="btn btn-active mt-6   bg-white text-black ">Read more</button>
   
    </div>

  </div>
  
</div>
<div>
          <h1 className='text-center text-white font-medium text-5xl'>Explore a few of our most</h1>
          <h1 className='text-center text-white font-medium text-5xl'>impactful projects</h1>
        
</div>
<div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-32 gap-36'>
<div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://images.prismic.io/instrument-v5/f2206e32-32cf-42f8-875b-245741d153c7_Group+34583.png?auto=compress,format&w=1280" alt="Shoes" /></figure>
  <div class="card-body bg-black text-white">
    <h2 class="card-title">Eames Institute</h2>
    <p>Ray and Charles Eames laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a modern audience, the Eames Institute enlisted Instrument to co-create a digital platform to unveil their vast collection to the world.</p>
   
  </div>
</div>
<div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://images.prismic.io/instrument-v5/71b85f31-4930-43a6-80f0-2bdad6da7420_Frame+5393.jpg?auto=compress,format&w=1280" alt="Shoes" /></figure>
  <div class="card-body bg-black text-white">
    <h2 class="card-title">Dropbox "For All Things Worth Saving"</h2>
    <p>To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving' — an ecosystem of branded experiences aimed to remind people of the inherent value of their digital files.</p>
    
  </div>
</div>
</div>
<div>
<h1 className='text-center text-white font-medium text-5xl'>We’d love to be your partner</h1>
</div>
<div className='mx-auto text-center justify-items-center justify-center align-middle'>
          <button className='btn btn-active  m-12 bg-white text-black mx-auto text-center justify-items-center justify-center align-middle'>Get in Touch</button>
</div>
              </div>
          );
};

export default Home;