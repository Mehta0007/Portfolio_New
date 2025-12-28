export default function SkillsTable() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>

      <table className="w-full border">
        <thead>
          <tr className="border">
            <th className="border p-2">Area</th>
            <th className="border p-2">Technologies</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Front-End</td>
            <td className="border p-2">
              HTML5 | CSS3 | TailwindCSS | JavaScript | ReactJS | Next.js
            </td>
          </tr>

          <tr>
            <td className="border p-2">Back-End</td>
            <td className="border p-2">
              NodeJS | ExpressJS | MongoDB | Mongoose | GraphQL | PostgresSQL
            </td>
          </tr>

          <tr>
            <td className="border p-2">Tools & Platforms</td>
            <td className="border p-2">Git | GitHub | CI/CD | Clerk</td>
          </tr>

          <tr>
            <td className="border p-2">Testing tools</td>
            <td className="border p-2">Jest | Postman</td>
          </tr>
        </tbody>
      </table>

    <table className="w-full border mt-6">
        <thead>
            <tr>
                <th className="p-2">Currently Learning</th>
            </tr>
        </thead>
    <tbody>
        <tr className="border ">
            <td className="p-2" >TypeScript </td>
        </tr>
        <tr className="border">
            <td className="p-2">Next.js App Router </td>
        </tr>
        <tr className="border">
            <td className="p-2">Backend architecture </td>
        </tr>
        <tr className="border">
            <td className="p-2">GraphQL </td>
        </tr>
        <tr className="border">
            <td className="p-2">DevOps Basics </td>
        </tr>
        <tr className="border">
            <td className="p-2">System Design Basics </td>
        </tr>
    </tbody>
    </table>


    </section>
  );
}
