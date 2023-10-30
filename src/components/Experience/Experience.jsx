import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section
      className='text-white container pt-24 mx-auto lg:px-14 px-6 min-h-screen'
      id='experience'
    >
      <h1 className='text-4xl font-bold mb-4 text-center pt-8'>Experience & Education</h1>

      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-2/6 bg-gray-800 p-4 rounded-lg'>
          <h2
            className='text-xl font-semibold mb-2
          text-center lg:text-left'
          >
            Stack
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {skills.map((skill, id) => {
              return (
                <div className='flex flex-col items-center' key={id}>
                  <div className='lg:block hidden h-20 w-20'>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className='lg:w-4/6 bg-gray-800 p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-2 text-center lg:text-left'>Work & Education</h2>
          <ul className='gap-4 flex flex-col py-4'>
            {history.map((historyItem, id) => {
              return (
                <li
                  className='flex flex-row items-center gap-4 rounded-lg p-4 lg:p-2 bg-gray-900'
                  key={id}
                >
                  <img
                    className='w-20 lg:block hidden'
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.type} icon`}
                  />
                  <div>
                    <h3 className='text-xl font-semibold'>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p className='text-sm opacity-60 my-1'>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul className='list-disc list-inside'>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                      {historyItem.organisation === "Folkuniversitetet" && (
                        <li>
                          <a href={historyItem.link} target='_blank' rel='noreferrer'>
                            Programme Information (In Swedish)
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
