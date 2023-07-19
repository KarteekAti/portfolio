import { UilLink, UilGithub } from "@iconscout/react-unicons";
import Metflix from "../../Assets/Metflix.webp";
import NSCC from "../../Assets/NSCC.png";
import Talkify from "../../Assets/Talkify.png";

export default function Project() {
  const projects = [
    {
      title: "Talkify",
      img: Talkify,
      tech: ["Next.js", "GraphQL", "MongoDB", "Prisma", "Express"],
      desc: "The purpose of the Realtime Chat Application is to facilitate seamless and interactive communication between users in real-time. The app allows users to engage in instant messaging, enabling them to have conversations with each other individually or in group chatrooms.",
      github: "https://github.com/KarteekAti/Talkify",
      link: "http://talkify.vercel.app/",
    },
    {
      title: "Metflix Recommendation",
      img: Metflix,
      tech: ["Flask", "Python", "Javascript", "NLTK"],
      desc: "The Purpose of Metflix is to help people watch their favorite genre of movies. The Recommendation Model uses 'Bag of Words' and 'Cosine-Similarity' to suggest movies, this project uses TMDB's api to get the posters and cast data.",
      github: "https://github.com/KarteekAti/Metflix_Recommendation",
      link: "http://karteekati.pythonanywhere.com/",
    },
    {
      title: "Newton School Coding Club",
      img: NSCC,
      tech: ["NodeJs", "Express", "GCP", "Firebase", "TypeScript"],
      desc: "This is actually a Web Application to educate students about Development and Problem-Solving using Contests, Content, Workshops, and many more interactive activities. The motive of this Mobile Application is to get notified about our contests, job opportunities, team hiring, and reading informational content.",
      github: "https://github.com/nsccpccoe/nscc-backend",
      link: "https://nsccpccoe.web.app/",
    },
  ];
  return (
    <section
      id="projects"
      className="mt-10 px-6 py-3 flex flex-col justify-center items-center"
    >
      <h1 className="mb-8 font-bold text-4xl">Projects</h1>
      <div className="flex xs:flex-col md:flex-row gap-6">
        {projects.map((project, i) => (
          <div className="max-w-xs rounded bg-gray-100 dark:bg-[#111111] overflow-hidden shadow-md relative hover:-translate-y-2 transition-all ">
            <img className="w-fit" src={project.img} alt="Project Pic" />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2 text-purple-700 flex justify-center items-center">
                <a href={project.link}>{project.title}</a>
              </div>
              <div className="pt-1 px-2 pb-2 flex justify-center gap-28">
                <a href={project.link}>
                  {" "}
                  {
                    <UilLink className="p-1 w-16 bg-purple-700 rounded-full text-white" />
                  }
                </a>
                <a href={project.github}>
                  {" "}
                  {
                    <UilGithub className="p-1 w-16 bg-black dark:bg-zinc-200 rounded-full text-white dark:text-black" />
                  }
                </a>
              </div>
              <p className="text-gray-700 dark:text-zinc-200 text-base line-clamp-3">
                {project.desc}
              </p>
            </div>
            <div className="px-6 pt-2 flex flex-wrap justify-center">
              {project.tech.map((stack, j) => (
                <span className="inline-block bg-purple-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
