import aboutText from "../../data/about.json";

const About = () => {
  return (
    <section className='text-white container pt-24 mx-auto lg:px-14 px-6 min-h-screen' id='about'>
      <h1 className='text-4xl font-bold mb-4 text-center pt-8'>About</h1>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-2/5'>
          <div className=' bg-gray-800 p-4 rounded-lg mb-4'>
            <h2 className='text-xl font-semibold mb-2 text-center lg:text-left'>About Audrey</h2>
            <p className='mb-4'>{aboutText.aboutMe}</p>
            <h3 className='text-lg mb-2 mt-6'>Why web dev?</h3>
            <p>{aboutText.whyDev}</p>
          </div>
          <div className=' bg-gray-800 p-4 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-center lg:text-left'>Helpful Links</h2>
            <ul className='list-disc list-inside'>
              {aboutText.links.map((link, id) => (
                <li key={id}>
                  <a href={link.link} target='_blank' rel='noopener noreferrer'>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='lg:w-3/5 bg-gray-800 p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-2 text-center lg:text-left'>About School</h2>
          <p>{aboutText.aboutSchool}</p>
          <h3 className='text-lg mb-2 mt-6'>Courses</h3>
          <ul className='list-disc list-inside'>
            {aboutText.courses.map((course, id) => {
              return <li key={id}>{course}</li>;
            })}
          </ul>
          <h3 className='text-lg mb-2 mt-6'>Internship</h3>
          <p>{aboutText.aboutLia}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
