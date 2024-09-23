// import React, { useState } from 'react';
// import styles from './comments.module.css';

// export const CommentForm = ({ onCommentSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newComment = {
//       title,
//       content,
//       author,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/comments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newComment),
//       });

//       if (response.ok) {
//         onCommentSubmit(); // Atualiza os comentários após o envio
//         setTitle('');
//         setContent('');
//         setAuthor('');
//       } else {
//         console.error('Erro ao enviar o comentário');
//       }
//     } catch (error) {
//       console.error('Erro ao enviar o comentário:', error);
//     }
//   };

//   return (
//     <form className={styles.commentForm} onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Título"
//         required
//       />
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Comentário"
//         required
//       />
//       <input
//         type="text"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         placeholder="Autor"
//         required
//       />
//       <button type="submit">Enviar Comentário</button>
//     </form>
//   );
// };
