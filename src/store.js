import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "A SOLO",
      image: "/1.jpg",
      aspect: 1.51,
      text: "As a teenager, Cropper had his first hit with the Mar-Keys, titled “Last Night”. This paved the way to his mainstream career, when he developed his reputation for being a deeply soulful guitarist."
    },
    {
      offset: 2,
      factor: 1.5,
      header: "Diamond Santa",
      image: "/2.jpg",
      aspect: 1.5,
      text:
        "From Carlos Santana’s spiraling riff in “Black Magic Woman” to the haunting melody painted by Jimmy Page in “Stairway to Heaven”, guitarists have played a central role in crafting the greatest musical compositions known to humankind."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "BLUES & POPS",
      image: "/3.jpg",
      aspect: 1.5037,
      text:
        "Blues, Punk Rock, Pop, Folk, and Country, there are countless music genres that could not sustain without the artistic contributions of talented guitarists."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "District 9",
      image: "/4.jpg",
      aspect: 1.2,
      text:
        "A rock and blues guitarist, Taylor burst onto the rock and roll scene as the guitarist for John Mayall & The Bluesbreakers before being recruited by the Rolling Stones at the mere age of 20."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "STONEHEADS",
      image: "/5.jpg",
      aspect: 1.55,
      text:
        "While he only played for the Rolling Stones for five years, Taylor was an essential component in some of the band’s peak recordings."
    },
    { offset: 7, 
      factor: 1.05, 
      header: "So called 'PEACE'", 
      image: "/6.jpg", 
      aspect: 1.77, text: 
      "You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches." 
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.05, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.1, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
