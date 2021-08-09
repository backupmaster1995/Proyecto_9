import React from 'react'
import PropTypes from 'prop-types';
import Image from "./Image"

export default function ImageList({APIimages}) {
    return (
        <div className="col-12 p-5 row">
            {
                APIimages.map((image)=> (
                    <Image 
                        image={image}
                        key={image.id}
                    />
                ))
            }
        </div>
    )
}

ImageList.propTypes = {
    APIimages : PropTypes.array.isRequired
}

