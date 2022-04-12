import { useTheme } from 'next-themes'



export default function ThemeChanger() {
    const { theme, setTheme } = useTheme()
  
    return (
      
      <div className='navbar border border-slate-800 px-2 sm:px-4 my-4 dark:bg-secondary bg-primary shadow-md shadow-slate-700'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <div className='flex items-center'>
            <h1 className='text-center sm:text-left text-xl font-bold p-4'>
              The Current Theme Is : {theme}
            </h1>
          </div>
  
          {/* The buttons in this group activate the preloaded themes from tailwind.config.js 
                    Each button is shaped according to the daisyUI theme  */ }
          <div className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <button
              data-theme='cupcake'
              className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
              onClick={() => setTheme('cupcake')}
            >
              Cupcake
            </button>
            <button
              data-theme='dracula'
              className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
              onClick={() => setTheme('dracula')}
            >
              Dracula
            </button>
            <button
              data-theme='bumblebee'
              className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
              onClick={() => setTheme('bumblebee')}
            >
              Bumblebee
            </button>
            <button
              data-theme='forest'
              className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
              onClick={() => setTheme('forest')}
            >
              Forest
            </button>
            <button
              data-theme='synthwave'
              className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
              onClick={() => setTheme('synthwave')}
            >
              Synthwave
            </button>
            <button
              data-theme='luxury'
              className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
              onClick={() => setTheme('luxury')}
            >
              Luxury
            </button>
          </div>
          <div className='flex justify-center p-6 items-center'>
            <h1 className='text-3xl sm:text-left text-bold'>
              Hi, Steve!
              <br />
              Try switching themes by clicking the buttons
              <br />
              Minimize the browser to see how it looks on smaller view screens.
            </h1>
          </div>
        </div>
      </div>
    )
  }