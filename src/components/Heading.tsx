const Heading = ({ thin, thick } : { thin: string, thick: string}) => {
  return (
    <p className='sm:text-[4rem] text-[2.5rem] mb-5'>
      <span className="font-thin mr-3">{thin}</span>
      <span className="font-light">{thick}</span>
    </p>
  )
}

export default Heading