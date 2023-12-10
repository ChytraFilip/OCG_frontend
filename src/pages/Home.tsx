import { useState } from 'react'

const home = () => {
  const [openMenu, setOpenMenu] = useState(false);


  return <section className="test scroll-disabled">
    <div className="landing-page-overlay"></div>
    <div className="div">
      <h1>Welcome to the new game</h1>
      <button 
        className="start-button"
        type="submit"
        onClick={()=>setOpenMenu(!openMenu)}>Start game
      </button>   
    {openMenu && <p>What is "Lorem ipsum"?
    In publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages, typography, and graphical layout. It is a form of "greeking".

    Even though using "lorem ipsum" often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning. Where text is visible in a document, people tend to focus on the textual content rather than upon overall presentation, so publishers use lorem ipsum when displaying a typeface or design in order to direct the focus to presentation. "Lorem ipsum" also approximates a typical distribution of letters in English.</p>
    }
    </div>

  </section>
}

export default home