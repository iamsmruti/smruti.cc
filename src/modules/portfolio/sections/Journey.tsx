import Heading from '../../../components/Heading'

const Journey = () => {
  return (
    <div className='mb-[250px]'>
      <Heading thin="Career" thick='Journey' />

      <div className='flex items-center'>
        <DateBubble date='May, 2020' />

        <div>
          <p className='ml-5'>Started my B.Tech CS</p>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>

      <div className='border-l-[1px] border-dashed border-white h-[100px] ml-12' />

      <div className=''>
        <div className='flex items-start'>
          <DateBubble date='Nov, 2021' />

          <div className='ml-5'>
            <ExperienceCard />
          </div>
        </div>
      </div>
    </div>
  )
}

const DateBubble = ({ date } : { date: string}) => {
  return (
    <div className='font-light border-dashed border-[1px] text-sm border-white w-[100px] text-center px-3 py-1 rounded-full'>
      {date}
    </div>
  )
}

const ExperienceCard = () => {
  return (
    <div className='absolute border-[1px] py-2 px-2 rounded-lg bg-[#121212] border-[rgb(43,43,43)]'>
      <div>
        <p className='text-xl'>HTML Developer</p>
        <p className='text-gray-400 text-sm'>Matterize | Nov 2021 - Mar 2022</p>
      </div>

      <p className='mt-5'>Worked hard to increase revenue to 20% more than the last FY.</p>
    </div>
  )
}

export default Journey