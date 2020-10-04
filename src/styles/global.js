import { createGlobalStyle } from 'styled-components';
import GothicLight from '../assets/fonts/gotham-light.ttf';
import GothicBook from '../assets/fonts/gotham-book.otf';
import GothicMedium from '../assets/fonts/gotham-medium.ttf';
import GothicBold from '../assets/fonts/gotham-bold.otf';
import MakeSummer from '../assets/fonts/MakeSummer.ttf';
import IconsSea from '../assets/fonts/IconsSea.ttf';
import Aloha from '../assets/fonts/Aloha.ttf';
import Beauty from '../assets/fonts/Beauty.ttf';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
    outline: 0;
    }
  
  button {
    cursor: pointer;
  }

  /* Fontes */
	@font-face {
	    font-family: 'Gothic Light';
	    src: url(${GothicLight});
	}
	
	@font-face {
        font-family: 'Gothic Medium';
        src: url(${GothicMedium});
	}
	
	@font-face {
		font-family: 'Gothic Bold';
		src: url(${GothicBold});
	}

    @font-face {
		font-family: 'Gothic Book';
		src: url(${GothicBook});
	}

	@font-face {
		font-family: 'MakeSummer';
		src: url(${MakeSummer});
	}
	
	@font-face {
		font-family: 'Icons';
		src: url(${IconsSea});
	}

	@font-face {
		font-family: 'Aloha';
		src: url(${Aloha});
	}

	@font-face {
		font-family: 'Beauty';
		src: url(${Beauty});
	}

`;