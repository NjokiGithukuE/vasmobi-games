const TailwindIndicator = () => {
    if (process.env.NODE_ENV === 'production') return null;
  
    return (
      <div className='fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white'>
        <div className='fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white'>
          <div className='block xs:hidden'>d</div>
          <div className='hidden xs:block sm:hidden'>xs</div>
          <div className='hidden xs:hidden sm:block md:hidden '>sm</div>
          <div className='hidden md:block xmd:hidden'>md</div>
          <div className='hidden  xmd:block lg:hidden'>xmd</div>
          <div className='hidden  lg:block xl:hidden'>lg</div>
          <div className='hidden  xl:block 2xl:hidden'>xl</div>
          <div className='hidden 2xl:block'>2xl</div>
        </div>
      </div>
    );
  };
  
  export default TailwindIndicator;