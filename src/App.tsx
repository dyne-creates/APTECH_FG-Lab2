import './App.css'

function App() {
  const studentName: string = "Dwayne Hinnong"
  const course: string = "BS in Information Technology"
  const isEnrolled: boolean = true;
  const subjects: string[] = ["Database Management", "Application Development", "Networking and Communication"]
  return (
    <>
      <h1>Student Dashboard</h1>
      <div className="card">
        <p><span>Name:</span> {studentName}</p>
        <p><span>Course:</span> {course}</p>
        <p><span>Status:</span> {isEnrolled ? "Enrolled" : "Not Enrolled"}</p>
        <p><span>List of Subjects:</span></p>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App