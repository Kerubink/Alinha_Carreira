// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios';
// import styles from './comments.module.css';

// export const CommentCarousel = () => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     // Requisição para obter os comentários da API
//     axios.get('http://localhost:3000/comments') // Substitua pela URL da sua API
//       .then(response => {
//         setComments(response.data);
//       })
//       .catch(error => {
//         console.error("Erro ao carregar comentários:", error);
//       });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, 
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };
  

//   return (
//     <div className={styles.carouselContainer}>
//       <Slider className={styles.slides} {...settings}>
//         {comments.map((comment) => (
//           <div key={comment.id} className={styles.card}>
//             <h3>{comment.title}</h3>
//             <p>{comment.content}</p>
//             <span>Por: {comment.author}</span>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
