export function About() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <h1 className="text-2xl font-semibold mb-6">About Project</h1>
          
          <div className="prose prose-invert">
            <p className="text-gray-400">
              This is a practice project and part of HNG12. The goal is to demonstrate the ability to create
              a modern web application with React, focusing on form handling, validation, and UI/UX design.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Core Features</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Modern, responsive design with dark theme</li>
              <li>Multi-step ticket booking process</li>
              <li>Form validation and error handling</li>
              <li>Persistent storage using browser APIs</li>
              <li>Accessibility features</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Technologies Used</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>React with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>React Router for navigation</li>
              <li>Vite for development and building</li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-primary mb-4">💛 Enjoy</p>
            <div className="flex justify-center gap-4">
              <button className="btn-secondary">Previous Page</button>
              <button className="btn-primary">Continue →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}