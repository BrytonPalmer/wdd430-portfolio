import ProjectList from '@/components/ProjectList';
const projects = [
  {
    id: 'saturn-stars',
    title: 'Saturn & Stars',
    description: 'A web application that uses NASA APIs to display space-related data and images.',
    technologies: ['Node.js', 'JavaScript', 'Vite', 'NASA APIs'],
    link: 'https://github.com/BrytonPalmer/wdd330-final-project',
    website: 'https://nasa-space-explorer-7g4d.onrender.com/'
  },

  {
    id: 'pokemon-api',
    title: 'Pokemon API',
    description: 'A RESTful API for finding information about select Pokemon from the Sinnoh region and its National dex.',
    technologies: ['mongoose', 'Express', 'joi', 'swagger-ui-express', 'cors', 'dotenv', 'node.js', 'JavaScript'],
    link: 'https://github.com/BrytonPalmer/wdd330-sleepoutside',
    website: 'https://pokemon-api-w3-4.onrender.com'
  }
]

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-white-700 ">Explore my projects and learn more about my work.</p>
      </section>
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  )
}