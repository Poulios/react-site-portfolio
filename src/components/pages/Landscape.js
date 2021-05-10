import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import './Landscape.css';
  
function Landscape() {
  return (
    <div className='cards_container container-fluid'>
    <Gallery>
      
      <Item
        original="https://www.photoblog.com/learn/wp-content/uploads/2017/02/landscape-photography-trick-1.jpg"
        thumbnail="https://www.photoblog.com/learn/wp-content/uploads/2017/02/landscape-photography-trick-1.jpg"
        width="800"
        height="1000"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "1" onClick={open} src="https://www.photoblog.com/learn/wp-content/uploads/2017/02/landscape-photography-trick-1.jpg" />
        )}
      </Item>
      <Item
        original="https://c0.wallpaperflare.com/preview/38/770/576/maroon-bells-united-states-fall-autumn.jpg"
        thumbnail="https://c0.wallpaperflare.com/preview/38/770/576/maroon-bells-united-states-fall-autumn.jpg"
        width="910"
        height="1363"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "2" onClick={open} src="https://c0.wallpaperflare.com/preview/38/770/576/maroon-bells-united-states-fall-autumn.jpg" />
        )}
      </Item>
      <Item
        original="https://images.squarespace-cdn.com/content/v1/56bf55504c2f85a60a9b9fe5/1584116827406-3I6HTJUFD7CKYKVH4GQC/ke17ZwdGBToddI8pDm48kOlRP_X0hZa-99ncqjsZ3XcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRFyN9mEIqSaNUR8r0V1_vqOGzRXq7WgKgvEbP9yXxc-KNepKi3kHhBWfcMGkvuWk/DesolationReflections.jpg"
        thumbnail="https://images.squarespace-cdn.com/content/v1/56bf55504c2f85a60a9b9fe5/1584116827406-3I6HTJUFD7CKYKVH4GQC/ke17ZwdGBToddI8pDm48kOlRP_X0hZa-99ncqjsZ3XcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRFyN9mEIqSaNUR8r0V1_vqOGzRXq7WgKgvEbP9yXxc-KNepKi3kHhBWfcMGkvuWk/DesolationReflections.jpg"
        width="1000"
        height="800"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "3" onClick={open} src="https://images.squarespace-cdn.com/content/v1/56bf55504c2f85a60a9b9fe5/1584116827406-3I6HTJUFD7CKYKVH4GQC/ke17ZwdGBToddI8pDm48kOlRP_X0hZa-99ncqjsZ3XcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRFyN9mEIqSaNUR8r0V1_vqOGzRXq7WgKgvEbP9yXxc-KNepKi3kHhBWfcMGkvuWk/DesolationReflections.jpg" />
        )}
      </Item>
      <Item
        original="https://cdn.pixabay.com/photo/2015/09/05/22/58/dock-926014_960_720.jpg"
        thumbnail="https://cdn.pixabay.com/photo/2015/09/05/22/58/dock-926014_960_720.jpg"
        width="960"
        height="720"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "4" onClick={open} src="https://cdn.pixabay.com/photo/2015/09/05/22/58/dock-926014_960_720.jpg" />
        )}
      </Item>      
    </Gallery>
    </div>
  )
}

export default Landscape;