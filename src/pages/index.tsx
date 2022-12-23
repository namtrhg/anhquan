import { useState } from "react"

export const MainPage = () => {
  const [dot1, setDot1] = useState(0)
  const [dot2, setDot2] = useState(0)
  const [dot3, setDot3] = useState(0)
  const [dot4, setDot4] = useState(0)
  const [a, setA] = useState(0)

  const k = 9 * 10 ** 9 //9*10^9

  const r = a / Math.sqrt(2) 

  const sumDot = Number(dot1) + Number(dot2) + Number(dot3) + Number(dot4);

  const p = k/r;

  return (
    <div className="space-y-4 h-screen flex flex-col justify-center items-center">
      <p className="mb-2 text-lg font-bold">BY TRAN HOANG ANH QUAN - 2053379</p>
      <div className="flex justify-center items-center">
        <div className="h-40 w-40 border-2 border-black flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="h-4 w-4 rounded bg-red-300 flex justify-center items-center" >{dot1}</div>
            <div className="h-4 w-4 rounded bg-red-300 flex justify-center items-center" >{dot2}</div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-4 rounded bg-red-300 flex justify-center items-center" >{dot3}</div>
            <div className="h-4 w-4 rounded bg-red-300 flex justify-center items-center" >{dot4}</div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <p>q1</p>
          <input type="number" value={dot1} onChange={(e) => setDot1(e.target.value as unknown as number)} />
        </div>
        <div className="flex items-center space-x-2">
          <p>q2</p>
          <input type="number" value={dot2} onChange={(e) => setDot2(e.target.value as unknown as number)} />
        </div>
        <div className="flex items-center space-x-2">
          <p>q3</p>
          <input type="number" value={dot3} onChange={(e) => setDot3(e.target.value as unknown as number)} />
        </div>
        <div className="flex items-center space-x-2">
          <p>q4</p>
          <input type="number" value={dot4} onChange={(e) => setDot4(e.target.value as unknown as number)} />
        </div>
        <div className="flex items-center space-x-2">
          <p>a</p>
          <input type="number" value={a} onChange={(e) => setA(e.target.value as unknown as number)} />
        </div>
      </div>

      <div>
        <p>
          q1 + q2 + q3 + q4 = {dot1} + {dot2} + {dot3} + {dot4} = {sumDot}
        </p>
        <p>
          K: {k}
        </p>
        <p>
          R = a / √2 = {a} / √2  = {r}
        </p>
        <p>
          k / r = {k} / {r} = {k / r}
        </p>
        <p>
          Result = k / r * (q1+q2+q3+q4) = {p*sumDot} (Newton)
        </p>
      </div>
    </div>
  )
}

export default MainPage
