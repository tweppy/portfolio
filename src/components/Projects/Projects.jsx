import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section className="text-white container pt-24 mx-auto lg:px-14 px-6 min-h-screen" id="projects">
      <h1 className="text-4xl font-bold mb-4 text-center pt-8">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {projects.map((project, id) => {
          return (
            <div className="bg-gray-800 p-4 rounded-lg" key={id}>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-6">{project.description}</p>
              <a className="border-violet-500 border-2 rounded-3xl font-semibold px-4 py-2 hover:bg-violet-500" href={project.source} target="_blank" rel="noreferrer">Code</a>
              <ul className="flex flex-row gap-2 pt-4 flex-wrap">
                {project.skills.map((skill, id) => {
                  return <li className="bg-violet-500 rounded-3xl font-semibold px-4 py-2" key={id}>{skill}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

/*
- Todo react
- e-wallet

- this portfolio website

- latest aws
- swing notes
- another backend thing ?

- redo shopping react style and products and add that? but I can't asnewer questions about it...
- add onto movie-search...? check chatgpt


*/
