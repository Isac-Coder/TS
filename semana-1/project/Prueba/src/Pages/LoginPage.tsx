import { useState } from "react"

export const LoginPage = () => {


  const [movieName, setMovieName] = useState<string>("")

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(movieName)
  }

  return (
    <div className="flex-l flex items-center justify-center bg-slate-800 min-h-0.5 min-w-0.5">
        <form 
        onSubmit={handleSubmit}
        className="bg-slate-800 p-4 flex flex-col aligit-items-center justify-center gap-2 rounded-md">
          <h1 className="text-white font-bold text-2xl">Iniciar Sesion</h1>
          <input
          type="text"
          name="movieName"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          
          className="bg-white p-2 mb-2"  />
          <button type="submit" className="bg-white p-2"
          >Login</button>
        </form>
    </div>
  )
}
