import React from 'react'
import img from "../Images/animated.gif";


const Cards = () => {
  // eslint-disable-next-line
  return (

    <div className="card-div">
      <div className="isResponviseDiv">
        <div className="marquee">
          <p className="isResponsiveDummyText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae adipisci illum quo delectus ducimus error sapiente accusantium, vero et, laudantium recusandae in officia fugit facilis. Incidunt dolorum est sunt, voluptate, vitae tenetur soluta culpa autem ex impedit exercitationem cumque consequuntur accusantium veritatis iusto nemo dolor aliquid optio dolorem fugit ut repellat quisquam. Quod, nihil nobis iusto optio expedita perspiciatis magni perferendis culpa ducimus quia ipsam explicabo sed officia obcaecati?
          </p>
        </div>
      </div>
      <div className="gif-div">
        <img src={img} className="card-gif" alt="..." />
      </div>
      <div className="text-div">
        <div className="marquee">
          <p className="dummyText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, laborum nihil id est sunt rerum dolores et cum harum dignissimos architecto quae, nisi ea voluptate neque dolorum accusamus in molestias numquam voluptatibus ad? Libero, ducimus itaque! Natus, nemo quia. Nesciunt iste reprehenderit, rem veritatis labore iure eum amet itaque aliquid repellat, praesentium unde, sequi expedita molestiae quibusdam rerum debitis. Esse veritatis beatae aperiam dicta dolorem voluptatum pariatur. Suscipit, eum earum.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Cards
