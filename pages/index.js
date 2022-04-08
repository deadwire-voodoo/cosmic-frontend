import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

/* I combined the Navbar and ThemeChanger function for readability. ThemeChanger() uses next-themes with DaisyUI's CSS modules. DaisyUI has since put a new 
plugin 'theme-change' however I feel this does the exact thing the same way. So since this is a Next project hosted on Vercel, I felt it was only prudent to
use theirs(next.js)  
ThemeChanger calls a list of DaisyUI themes from tailwind.config.js where they are called from the 'dasiyui' plugin. Custom themes and other global settings 
can be listed there for local use. 
*/

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='navbar border-2 border-gray-500 px-2 sm:px-4 py-2.5 rounded-2xl dark:bg-gray-800 bg-primary shadow-md shadow-slate-700'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold p-4'>
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
            data-theme='business'
            className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
            onClick={() => setTheme('business')}
          >
            Business
          </button>
          <button
            data-theme='night'
            className='btn btn-secondary border-2 border-secondary-focus shadow-md shadow-base py-2 pr-4 pl-3 mt-4'
            onClick={() => setTheme('night')}
          >
            Night
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
          <h1 className='text-3xl  text-bold'>
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



export default function HomePage() {
  return (
    <>


      {/*In a larger project I would have inserted ThemeChanger() at app.js (root of project for Next.js) */}
      <ThemeChanger />


      {/*Just some quick mock-ups. I was more attempting to give an idea of what Responsive, Mobile-First looks like. 
      Ill try to add some middleware and fun APIs to this later
      Also this structure and styling is not normally how I like to write. I generally write inline for the finishing touches or passing style to siblings or down to children
      I prefer to use modules for pages and components. It allows me to reuse as much as possible with as little code. Clean and neat.
      */}
      <div className='hero min-h-screen bg-base-200 border-2 shadow-md shadow-slate-700 border-gray-500 mt-6 mb-6 rounded-2xl'>
        <div className='hero-contentcontainer flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
          <Image src='/spaceShuttle.png' alt='stock illustration' height='750' width='850' className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128' />
          <div className='flex flex-col justify-center items-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
            <h1 className='text-5xl text-center text-primary font-bold'>Blast Off with<br /> Cosmic Development!</h1>
            <p className='text-3xl text-center text-accent font-bold mt-6 mb-2 sm:mb-12'>We&apos;re a One-Stop Shop <br /> for Custom Digital Solutions.</p>
            <p className='text-xl text-center text-secondary font-bold mb-6'>
              From Web + Mobile Apps, SasS,<br /> Social Media, Design, Marketing<br className='hidden md:inline lg:hidden' />- We&apos;ve Got You Covered</p>
            <Link href='https://www.linkedin.com/in/chris-hunter-505885163/'>
              <a>
                <button className='btn btn-primary border-2 border-gray-500 rounded-2xl shadow-xl shadow-grey-300'>LinkedIn</button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/*These don't connect to anything. I was looking for more filler so you can see the responsiveness in smaller screens and how the theming carries through.
Running from left to right are the main colors of the selected theme.  */}
      <div className='container justify-center items-center flex flex-col mx-auto border-2 border-gray-500 shadow-md shadow-slate-700 rounded-2xl'>
        <div className='flex-col items-center justify-center m-12 shadow-md shadow-slate-700 rounded-2xl p-8'>
          <div className='mb-6 mt-6 border border-slate-500 rounded-xl shadow-md shadow-slate-700'>
            <div className='grid grid-flow-col gap-4 items-center justify-between p-8'>
              <button className='btn rounded-xl btn-base border border-primary hover:shadow-lg hover:shadow-accent py-2 pr-4 pl-3 mt-4'>Base</button>
              <button className='btn rounded-xl btn-primary border hover:shadow-lg hover:shadow-accent py-2 pr-4 pl-3 mt-4'>Primary</button>
              <button className='btn rounded-xl btn-secondary border hover:shadow-lg hover:shadow-accent py-2 pr-4 pl-3 mt-4'>Secondary</button>
              <button className='btn rounded-xl btn-accent border hover:shadow-lg hover:shadow-accent py-2 pr-4 pl-3 mt-4'>Accent</button>
            </div>
          </div>
          <div className='mb-6 mt-6 border border-slate-500 rounded-xl shadow-md shadow-slate-700'>
            <div className='grid grid-flow-col gap-4 items-center justify-between p-8'>
              <div className='badge badge-outline'>neutral</div>
              <div className='badge badge-primary badge-outline'>primary</div>
              <div className='badge badge-secondary badge-outline'>secondary</div>
              <div className='badge badge-accent badge-outline'>accent</div>
              <div className='badge badge-ghost badge-outline'>ghost</div>
            </div>
          </div>
          <div className='mb-6 mt-6 border border-slate-500 rounded-xl shadow-md shadow-slate-700'>
            <div className='grid grid-flow-col gap-4 items-center justify-between p-8'>
              <Image className='mask mask-circle' alt='sneaker mask with outline' height='160' width='160' src='/5430284.jpg' />
              <Image className='mask mask-hexagon-2' alt='sneaker mask with outline' height='160' width='160' src='/2340423.jpg' />
              <Image className='mask mask-pentagon' alt='sneaker mask with outline' height='160' width='160' src='/2316611.jpg' />
              <Image className='mask mask-squircle' alt='sneaker mask with outline' height='160' width='160' src='/cosmic-bear.jpg' />
              <Image className='mask mask-parallelogram-3' alt='sneaker mask with outline' height='160' width='160' src='/duotone.jpg' />
            </div>
          </div>
          <div className='mb-6 mt-6 border border-slate-500 rounded-xl shadow-md shadow-slate-700'>
            <section className='dark:bg-coolGray-800 dark:text-coolGray-100'>
              <div className='container flex flex-col justify-center p-4 mx-auto md:p-8'>
                <p className='p-2 text-sm font-medium tracking-wider text-center uppercase'>How it works</p>
                <h2 className='mb-12 text-4xl font-bold leading-none text-center sm:text-5xl'>Frequently Asked Questions</h2>
                <div className='flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-700'>
                  <details>
                    <summary className='py-2 outline-none cursor-pointer hover:text-accent'>What is the tech used in this site?</summary>
                    <div className='px-4 pb-4 hover:text-accent'>
                      <p>This is similar to what I am currently working on. It uses Next.js for the developing and build. Then Vercel for hosting by pulling this CDN from GitHUB.
                        The styling is a mashup of Tailwind v3, daisyUI, flowBite.js, and MambaUI</p>
                    </div>
                  </details>
                  <details>
                    <summary className='py-2 outline-none cursor-pointer hover:text-accent'>How long did this take to Mock-Up?</summary>
                    <div className='px-4 pb-4 hover:text-accent'>
                      <p>
                        All in all, it took me about 4 hours to flesh out everything and deploy it. After I have built up my Component
                        Library and Templates,
                        </p>
                        <p> 
                          a page double this size with APIs and CMS would take around 6-8 hours. Makes for very fast proto-typing. 
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary className='py-2 outline-none cursor-pointer hover:text-accent'>Why did I choose to use this stack?</summary>
                    <div className='px-4 pb-4 space-y-2 hover:text-accent'>
                      <p>My offical tuteledge was MERN Full Stack. It was nice to get hands on with Classes and Redux but it felt clunky and bloated.</p>
                      <p>After I graduated I started playing with containers and VMs, which led to JAMstack and headless. That was a bit too light. After finding
                        Next.js, GraphQL, headless, CMS, it&apos;s all starting to come together. It doesn&apos;t hurt that you can write the entire stack in JavaScript now. 
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>


      {/**Thanks for checking it out. Just a mock up really to give an you an idea. Kids willing i'll try to put a metrics api on this running to rehydrating stats */}
      <footer className='footer footer-center mt-6 p-10 border-4 bg-primary border-gray-600 shadow-xl shadow-slate-700 rounded-2xl text-primary-content'>
        <div>
          <svg width='100' height='100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#000' d='M255.6 62.21c-25.1 0-50.7 5.02-75.3 15.48C81.74 119.5 35.86 233.1 77.69 331.7c4.76 11.1 10.45 21.7 16.93 31.5-12.6.3-23.45-.5-31.98-2.4-13.22-2.9-19.93-7.8-22.27-13.3-2.33-5.6-1.25-13.8 5.87-25.4 1.65-2.6 3.62-5.4 5.86-8.4-2.1-7.4-3.76-14.7-5.05-22.2-6.62 7.1-12.1 14.2-16.37 21.1-8.74 14.1-12.66 28.9-7.11 42 5.54 13.1 18.9 20.5 35.17 24 13.66 3 30.13 3.6 48.96 2.2 53.2 63.4 143.6 87.6 223.9 53.4 80.3-34.1 125.6-115.7 117.1-198.1 14.1-12.6 25.2-24.9 32.5-36.8 8.9-14.2 12.7-29 7.2-42-5.6-13.1-18.9-20.5-35.2-24.1-7.9-1.7-16.9-2.7-26.5-2.8 4.5 6.1 8.6 12.4 12.4 19.1 3.7.4 7.1.9 10.1 1.6 13.3 2.8 20 7.8 22.3 13.3 2.4 5.5 1.3 13.8-5.9 25.3-4.5 7.4-11.4 15.8-20.4 24.7 1.5 7.3 2.7 14.5 3.4 21.7-2.6 2.3-5.5 4.7-8.2 7.1-4.7 3.8-9.5 7.7-14.7 11.5 11.2 32-4.4 67.8-35.9 81.2-26.3 11.2-56 3.6-74-16.8-9.1 4.3-18.3 8.4-27.8 12.5-62.5 26.4-122.4 43-169.2 48.1-3.8.4-7.5.7-11 1.1-4.7-5.6-8.95-11.4-13.12-17.6 6.82-.2 14.22-.7 22.02-1.6 44.4-4.9 103-20.9 164.2-46.9 8.4-3.5 16.7-7.3 24.8-11-.4-.7-.7-1.4-1-2.1-14-32.9 1.5-71.2 34.4-85.1 28.3-12.1 60.7-2.1 78 21.8 4-3.1 7.9-6.1 11.5-9.1 6.1-5 11.6-10 16.6-14.8-2.6-11.5-6.2-22.9-11-34.1-31.4-73.9-103.1-118.22-178.6-118.09zM364.3 229.6c-5.9 0-12.1 1.2-18.1 3.7-23.7 10.1-34.8 37.3-24.6 61.2 10 23.8 37.3 34.7 61.1 24.6 23.7-10 34.8-37.3 24.6-61.1-7.5-17.9-24.7-28.5-43-28.4z' /></svg>
          <p className='font-bold text-xl text-accent'>
            Cosmic Development
          </p>
          <p className='font-bold text-lg text-accent'>Full Stack Digital Solutions</p>
          <Link href='tel:321-872-8993'
                >
          <a className='font-bold text-lg text-accent'>(321)872-8993</a>
          </Link>
          <p className='font-bold text-md text-accent'>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className='grid grid-flow-col gap-4'>
            <Link href='https://github.com/deadwire-voodoo'>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </Link>
            <Link href='mailto:cosmic.devshop@gmail.com'>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/></svg></a>
            </Link>
            <Link href='https://www.linkedin.com/in/chris-hunter-505885163/'>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}