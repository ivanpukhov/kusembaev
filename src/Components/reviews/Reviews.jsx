import svg from "../../images/svg.svg";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import review5 from "../../images/reviews/5.webp";
import review1 from "../../images/reviews/1.webp";
import review2 from "../../images/reviews/2.webp";
import review3 from "../../images/reviews/3.webp";
import review4 from "../../images/reviews/4.webp";

const Reviews = () => {


    const textContent = {
        pageTitle: "Отзывы",
        reviews: [
            {
                'photo': review5,
                'name': 'Константин Константинович Константинопольский',
                'review': 'Lorem ipsum dolor sit amet consectetur. Risus id mauris vestibulum condimentum orci fermentum mus. Felis ultrices feugiat in vel nunc. Arcu vitae sem tempus tincidunt. Elit aliquam dolor adipiscing quam scelerisque bibendum. Sit interdum tortor hendrerit pharetra porta nulla eget adipiscing magna. Consequat venenatis rutrum integer fermentum proin. Ut bibendum pellentesque adipiscing fermentum sodales arcu auctor aliquam elit.'
            },
            {
                'photo': review1,
                'name': 'Константин Константинович Константинопольский',
                'review': 'Lorem ipsum dolor sit amet consectetur. Risus id mauris vestibulum condimentum orci fermentum mus. Felis ultrices feugiat in vel nunc. Arcu vitae sem tempus tincidunt. Elit aliquam dolor adipiscing quam scelerisque bibendum. Sit interdum tortor hendrerit pharetra porta nulla eget adipiscing magna. Consequat venenatis rutrum integer fermentum proin. Ut bibendum pellentesque adipiscing fermentum sodales arcu auctor aliquam elit.'
            },
            {
                'photo': review2,
                'name': 'Константин Константинович Константинопольский',
                'review': 'Lorem ipsum dolor sit amet consectetur. Risus id mauris vestibulum condimentum orci fermentum mus. Felis ultrices feugiat in vel nunc. Arcu vitae sem tempus tincidunt. Elit aliquam dolor adipiscing quam scelerisque bibendum. Sit interdum tortor hendrerit pharetra porta nulla eget adipiscing magna. Consequat venenatis rutrum integer fermentum proin. Ut bibendum pellentesque adipiscing fermentum sodales arcu auctor aliquam elit.'
            },
            {
                'photo': review3,
                'name': 'Константин Константинович Константинопольский',
                'review': 'Lorem ipsum dolor sit amet consectetur. Risus id mauris vestibulum condimentum orci fermentum mus. Felis ultrices feugiat in vel nunc. Arcu vitae sem tempus tincidunt. Elit aliquam dolor adipiscing quam scelerisque bibendum. Sit interdum tortor hendrerit pharetra porta nulla eget adipiscing magna. Consequat venenatis rutrum integer fermentum proin. Ut bibendum pellentesque adipiscing fermentum sodales arcu auctor aliquam elit.'
            },
            {
                'photo': review4,
                'name': 'Константин Константинович Константинопольский',
                'review': 'Lorem ipsum dolor sit amet consectetur. Risus id mauris vestibulum condimentum orci fermentum mus. Felis ultrices feugiat in vel nunc. Arcu vitae sem tempus tincidunt. Elit aliquam dolor adipiscing quam scelerisque bibendum. Sit interdum tortor hendrerit pharetra porta nulla eget adipiscing magna. Consequat venenatis rutrum integer fermentum proin. Ut bibendum pellentesque adipiscing fermentum sodales arcu auctor aliquam elit.'
            },
            {
                'photo': review5,
                'name': 'Константин Константинович Константинопольский',
                'review': 'Lorem ipsum dolor sit amet consectetur. Risus id mauris vestibulum condimentum orci fermentum mus. Felis ultrices feugiat in vel nunc. Arcu vitae sem tempus tincidunt. Elit aliquam dolor adipiscing quam scelerisque bibendum. Sit interdum tortor hendrerit pharetra porta nulla eget adipiscing magna. Consequat venenatis rutrum integer fermentum proin. Ut bibendum pellentesque adipiscing fermentum sodales arcu auctor aliquam elit.'
            },
        ]

    };

    return (
        <section className="review">
            <h2 className="mt68">{textContent.pageTitle}</h2>
            <div className="svg">
                <img src={svg} alt="Декоративный элемент" />
            </div>
            <ScrollMenu style={{ overflowX: "scroll", msOverflowStyle: "none", scrollbarWidth: "none" }}>
                <div className="review__container">
                    {textContent.reviews.map((review, index) => (
                        <article key={index} className="review__item">
                            <figure className="review__profile">
                                <img src={review.photo} alt={`Фото ${review.name}`} />
                                <figcaption className="review__name">
                                    {review.name}
                                </figcaption>
                            </figure>
                            <div className="review__text">
                                {review.review}
                            </div>
                        </article>
                    ))}
                </div>
            </ScrollMenu>
        </section>    );

}

export default Reviews
