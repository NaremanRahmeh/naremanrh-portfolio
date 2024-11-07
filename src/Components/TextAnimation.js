import {useTypewriter , Cursor} from 'react-simple-typewriter'

function TextAnimation() {
   
  const [text] = useTypewriter({
    words: ['React Js', 'Next js', 'Tailwind Css', 'Css' , 'Javascript' , 'Wordpress'],
    loop: {},
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <>
    <div>
      <span className='text-[#7eb895] text-2xl'>{text}</span>
      <Cursor cursorColor='gray' />
    </div>
    </>
  )
}

export default TextAnimation