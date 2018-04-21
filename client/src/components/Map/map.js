//  external dependencies 
import GoogleMapReact from 'google-map-react'
//  code dependencies 
// import default from '../Pages/Result/Result';
import "./Map.css";

//  map  goes here
    //  default props (dbl check exactly how this is set up)
    //  hardcoding for Hawaii for now 
    //  chatting with teamMates 
//  we can do this 
//   we can have the address and the lat / lng attributes stored in db 
//  then we return that match 
//  then we just set state, rather than pass around props 
//  we are just returning address and pins - that's it 
class Map extends Component {
    state = {
        //  things go in state here 
    }

    render() {
        return (
            <div className='map'>
            </div>
        )
    }
}

//  ok so the coordinates are going to be props that are passed down from the result component 
//  and they would match the location / details that are provided in the card results 
//  I'll have to check the schema for that, too see where we are storing location data 
//  map result would be called in render array.map method when the results are being rendered to the screen 
//  and how we are storing that
//  for now, can provide coordinates of Hawaii  props.lat props.lgn => where would I be finding them>
//  initially thinking it's prolly from address 
//  Js library that converts address into lat/lgn or maybe there is something easier there 



