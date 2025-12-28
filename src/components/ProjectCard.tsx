export default function ProjectCard() {
  return (
    <div className="border p-4 rounded-lg flex flex-col md:flex-row gap-4">
      <div className="space-y-2">
        <p>Jan 19, 2025</p>

        <h4 className="text-xl font-semibold">Brogram</h4>

        <div className="flex gap-2 flex-wrap">
          <span className="border px-2 py-1 rounded">ReactJS</span>
          <span className="border px-2 py-1 rounded">FantaCSS</span>
          <span className="border px-2 py-1 rounded">JavaScript</span>
        </div>

        <p>The Simple 30 Workouts Training Plan.</p>

        <div className="flex gap-3">
          <a
            href="https://brogram-workout-app.vercel.app/"
            target="_blank"
            className="underline"
          >
            Live
          </a>

          <a
            href="https://github.com/Mehta0007/Brogram_workout_app"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </div>

      <img
        src="https://github.com/jamezmca/1_web_portfolio/blob/main/public/brogram.png?raw=true"
        alt="brogram-thumbnail"
        className="w-full md:w-64 rounded"
      />
    </div>
  );
}
