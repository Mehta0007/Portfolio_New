export default function ProjectCard() {
  return (
    <div
      className="
        border rounded-2xl p-4
        hover:-translate-y-1
        transition-all duration-200
        shadow-sm
        hover:shadow-md
        bg-[#f8f5f2]
      "
    >
      <div className="flex flex-col md:flex-row gap-4">

        {/* left */}
        <div className="flex-1 space-y-2">
          <p className="text-xs text-gray-600">Jan 19, 2025</p>

          <h3 className="text-xl font-semibold">Brogram</h3>

          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-0.5 border rounded-full text-xs">ReactJS</span>
            {/* <span className="px-2 py-0.5 border rounded-full text-xs">FantaCSS</span> */}
            <span className="px-2 py-0.5 border rounded-full text-xs">JavaScript</span>
          </div>

          <p className="text-sm text-gray-700 max-w-lg">
            A simple 30-workouts training plan app.
          </p>

          <div className="flex gap-4 text-sm">
            <a
              target="_blank"
              href="https://brogram-workout-app.vercel.app/"
              className="underline"
            >
              Live
            </a>

            <a
              target="_blank"
              href="https://github.com/Mehta0007/Brogram_workout_app"
              className="underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* right */}
        <div className="md:w-60">
          <img
            src="https://github.com/jamezmca/1_web_portfolio/blob/main/public/brogram.png?raw=true"
            className="rounded-lg border"
            alt="Brogram preview"
          />
        </div>
      </div>
    </div>
  );
}
