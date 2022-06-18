import { ExternalLinkIcon, GlobeIcon, HashtagIcon, RefreshIcon } from '@heroicons/react/outline';
import { Fragment, FunctionComponent, MouseEventHandler } from 'react';
import { Button } from '../components/button';
import { HeaderContainer } from '../components/header-container';
import { Image } from '../components/image';
import { Tag } from '../components/tag';
import { TagContainer } from '../components/tag-container';
import { Title } from '../components/title';
import { Meal } from '../interfaces/meal';

export interface MealOverviewProps {
  meal: Meal;
  onRenewClick?: MouseEventHandler<HTMLButtonElement>;
}

export const MealOverview: FunctionComponent<MealOverviewProps> = (props) => {
  const { meal, onRenewClick } = props;

  return (
    <Fragment>
      <HeaderContainer>
        <div className="flex-1 min-w-0">
          <Title type="h1">{meal.name}</Title>

          <TagContainer>
            <Tag icon={<HashtagIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden />}>
              {meal.id}
            </Tag>

            <Tag icon={<GlobeIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden />}>
              {meal.area}
            </Tag>

            <Tag icon={<ExternalLinkIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden />}>
              <a href={meal.link} className="text-blue-400" target="_blank">
                Source
              </a>
            </Tag>
          </TagContainer>
        </div>

        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          {onRenewClick && (
            <Button onClick={onRenewClick}>
              <RefreshIcon className="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" />
              Give me a random recipe
            </Button>
          )}
        </div>
      </HeaderContainer>

      <div className="lg:flex lg:space-x-6 mt-8">
        {meal.image && (
          <div className="w-96">
            <Image src={meal.image} />

            <Title type="h2" className="mt-6 mb-2">
              Ingredients
            </Title>
            {meal.ingredients.map((ingredient, index) => (
              <div key={index}>
                {ingredient.name}: {ingredient.measure}
              </div>
            ))}
          </div>
        )}
        <div className="flex-1 text-gray-900">
          <Title type="h2">Instructions</Title>
          {meal.instructions.map((instruction, index) => (
            <div key={index} className="mt-1">
              {instruction}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
