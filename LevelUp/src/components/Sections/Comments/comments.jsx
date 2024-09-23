// import React, { useState, useEffect } from 'react';
// import { CommentForm } from "./CommentForm.jsx";
// import { CommentCarousel } from "./commentCarousel.jsx";
// import styles from './comments.module.css';

// export const Comments = () => {
//   const [comments, setComments] = useState([]);

//   const fetchComments = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/comments');
//       const data = await response.json();
//       setComments(data);
//     } catch (error) {
//       console.error('Erro ao buscar os comentários:', error);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   return (
//     <div className={styles.commentSection}>
//       <h2>Comentários</h2>
//       <CommentCarousel comments={comments} />
//       <CommentForm onCommentSubmit={fetchComments} />
//     </div>
//   );
// };
