import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import moviesApiService from '../../services/movies-api';
import { ReviewsItem, ReviewAuthor } from './Reviews.styled';

interface IReview {
  author: string;
  content: string;
}

const Reviews: FC = () => {
  const { id="" } = useParams<{id?:string}>();
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState<string|unknown>('');

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getReviews() {
      try {
        const reviews = await moviesApiService.fetchReviews(id);
        if (reviews.results.length !== 0) {
          setReviews(reviews.results);
          setError('');
        } else {
          setError("👨‍💻 We don't have any reviews for this movie");
        }

      } catch (error) {
        setReviews([]);
        setError(error);
      }
    }

    getReviews();
  }, [id]);

  return (
    <>
      {typeof (error) === "string" && error ? <p>{error}</p> : 
     <ul>
     {reviews.map(({ author, content }) => (
       <ReviewsItem key={author}>
         <ReviewAuthor>Author: {author}</ReviewAuthor>
         <p>{content}</p>
       </ReviewsItem>
     ))}
   </ul>
    }
    </>
   
    
  );
};

export default Reviews;
