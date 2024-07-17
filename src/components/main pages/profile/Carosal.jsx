import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carosal() {
  return (
   
    <Carousel>
        <Carousel.Item>
            {/*<ExampleCarouselImage text="First slide" />*/}
            <img src="https://dynamic.brandcrowd.com/template/preview/design/c395dca5-73fa-4306-91e8-eb2b745bae00/f2e8fd7e-ef15-4fcc-942c-d7159b817603?v=4&designTemplateVersion=1&logoTemplateVersion=8&size=design-preview-standalone-1x" alt="no image" width={'100%'} />

        </Carousel.Item>
        <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOrpGRTmLbnLvxpPCvS6CODbM1Hh5qTxgMw&s" alt="no image" width={'100%'} />
            {/*<ExampleCarouselImage text="Second slide" />*/}

        </Carousel.Item>
        <Carousel.Item>
            <img src="https://www.aeologic.com/blog/wp-content/uploads/2022/08/Impact-of-AI-on-E-learning-and-Education.jpg" alt="no image" width={'100%'} />
            {/*<ExampleCarouselImage text="Third slide" />*/}

        </Carousel.Item>
        <Carousel.Item>
            <img src="https://media.licdn.com/dms/image/D5612AQEbmU1pRson8w/article-cover_image-shrink_720_1280/0/1713493304587?e=2147483647&v=beta&t=uH2bmt0YqNinLfQ_sZaMU48EDRKDl8CRZFXQfmkPZbY" alt="no image" width={'100%'} />
            {/*<ExampleCarouselImage text="Third slide" />*/}

        </Carousel.Item>
        <Carousel.Item>
            <img src="https://colorwhistle.com/wp-content/uploads/2024/03/Metaverse-in-Education.jpeg" alt="no image" width={'100%'} />
            {/*<ExampleCarouselImage text="Third slide" />*/}

        </Carousel.Item>
    </Carousel>


  )
}

export default Carosal