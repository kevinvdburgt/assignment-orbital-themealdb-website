import { NextPage } from 'next';
import { FormEvent, useCallback, useState } from 'react';
import { fetchRandomMeal } from '../api/fetch-random-meal';
import { Container } from '../components/container';
import { MealOverview } from '../containers/meal-overview';
import { Meal } from '../interfaces/meal';

export interface IndexPageProps {
  meal: Meal;
}

const Index: NextPage<IndexPageProps> = (props) => {
  const [meal, setMeal] = useState<Meal>(props.meal);

  const renewMeal = useCallback((event: FormEvent) => {
    event.preventDefault();

    fetchRandomMeal().then((meal) => {
      setMeal(meal);
    });
  }, []);

  return (
    <Container>
      <MealOverview meal={meal} onRenewClick={renewMeal} />
    </Container>
  );
};

// Hydrate the page for SEO improvements
Index.getInitialProps = async (): Promise<IndexPageProps> => {
  const meal = await fetchRandomMeal();

  return { meal };
};

export default Index;
