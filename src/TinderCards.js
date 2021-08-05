import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Heatstroke",
      url: "https://images.unsplash.com/photo-1501285404133-0e100a37c3d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
      name: "Adult Insects",
      url: "https://images.unsplash.com/photo-1541804627596-3b5b9ef58c93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
    },
    {
      name: "Wooden Shields",
      url: "https://images.unsplash.com/photo-1544013204-eedd0bd6df1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGJhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
      name: "Arggghhh",
      url: "https://images.unsplash.com/photo-1549834125-80f9dda633c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGJhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen.");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>

    </div>
  )
}

export default TinderCards
