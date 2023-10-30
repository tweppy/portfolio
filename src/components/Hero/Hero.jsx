const Hero = () => {
  return (
    <div className="lg:bg-[url('/wave01.svg')] bg-cover bg-no-repeat">
      <section className='text-white container pt-44 mx-auto px-4 h-screen' id='hero'>
        <div className='text-white py-24 flex flex-col items-center'>
          <h1 className='text-5xl font-bold mb-4'>{"Hello, I'm Audrey"}</h1>
          <p className='mt-4 text-lg mb-4'>
            {
              "I'm a future Frontend/Fullstack developer studying the JavaScript Developer programme at Folkuniversitetet."
            }
          </p>
          <a
            className='no-underline text-xl font-semibold cursor-pointer border-violet-500 border-2 px-4 py-2 rounded-3xl hover:bg-violet-500'
            href='mailto:myemail@email.com'
          >
            Contact
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
