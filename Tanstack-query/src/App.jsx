import { useQuery } from '@tanstack/react-query'
import { fetchPost } from './API.js'


function App() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPost,
  })

  return (
    <>
      {data?.map((element) => {
        const { id, title, body } = element;
        return (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        )
      })}
    </>
  )
}

export default App
