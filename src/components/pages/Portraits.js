import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import './Portraits.css';
  
function Portraits() {
  return (
    <div className='cards_container container-fluid'>
    <Gallery>    
      <Item
        original="https://i.pinimg.com/originals/a9/de/42/a9de4234d16231f36e048301760de05c.png"
        thumbnail="https://i.pinimg.com/originals/a9/de/42/a9de4234d16231f36e048301760de05c.png"
        width="1024"
        height="1280"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "1" onClick={open} src="https://i.pinimg.com/originals/a9/de/42/a9de4234d16231f36e048301760de05c.png" />
        )}
      </Item>
      <Item
        original="https://images.squarespace-cdn.com/content/v1/571bf96620c6472939a37872/1553370557674-31YVOYYT4JL0EGC35SC2/ke17ZwdGBToddI8pDm48kPpfyw2-UzyHJPS6ByPd_CdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwxIXx1jSMQI63zCMsGyRJfiUcUHeS4UaDTwMB3OwzwN5g57nNxkTm50-ROPam9rO8/image-asset.jpeg"
        thumbnail="https://images.squarespace-cdn.com/content/v1/571bf96620c6472939a37872/1553370557674-31YVOYYT4JL0EGC35SC2/ke17ZwdGBToddI8pDm48kPpfyw2-UzyHJPS6ByPd_CdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwxIXx1jSMQI63zCMsGyRJfiUcUHeS4UaDTwMB3OwzwN5g57nNxkTm50-ROPam9rO8/image-asset.jpeg"
        width="1024"
        height="1280"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "2" onClick={open} src="https://images.squarespace-cdn.com/content/v1/571bf96620c6472939a37872/1553370557674-31YVOYYT4JL0EGC35SC2/ke17ZwdGBToddI8pDm48kPpfyw2-UzyHJPS6ByPd_CdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwxIXx1jSMQI63zCMsGyRJfiUcUHeS4UaDTwMB3OwzwN5g57nNxkTm50-ROPam9rO8/image-asset.jpeg" />
        )}
      </Item>
      <Item
        original="https://i.pinimg.com/564x/7f/48/4a/7f484a4626b6de33b645773b2dda1817.jpg"
        thumbnail="https://i.pinimg.com/564x/7f/48/4a/7f484a4626b6de33b645773b2dda1817.jpg"
        width="1024"
        height="1280"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "3" onClick={open} src="https://i.pinimg.com/564x/7f/48/4a/7f484a4626b6de33b645773b2dda1817.jpg" />
        )}
      </Item>
      <Item
        original="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        thumbnail="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        width="1024"
        height="1280"
      >
        {({ ref, open }) => (
          <img ref={ref} alt = "4" onClick={open} src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        )}
      </Item>      
    </Gallery>
    </div>
  )
}

export default Portraits;