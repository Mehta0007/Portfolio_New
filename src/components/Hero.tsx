import Age from "./AgeCalculatorTimer";

export default function Hero() {
  return (
    <section className="space-y-2">
      <h1 className="text-4xl font-bold">Namaste! I'm Ankit…</h1>
      <p className="text-lg">Software Developer</p>

      <h5 className="text-gray-700 mt-2">
        A software developer by trade. Based in India, I love to walk, play
        video games, and build out all sorts of fun and useful internet
        applications!
      </h5>

    <Age />

    </section>
  );
}
