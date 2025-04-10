import lightgallery from 'lightgallery';
import	"./css/main.css"
import "./css/grid-responsive.css";
import "./css/infopoint.css";
import 'lightgallery/css/lightgallery-bundle.min.css';

import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgPager from 'lightgallery/plugins/pager';

lightgallery(document.querySelector('.thumbnails'),
{
  selector: '.thumbnails a',
  plugins: [lgAutoplay, lgZoom, lgThumbnail, lgPager],
  slideShowAutoplay: true,
  slideShowInterval: 2000
});