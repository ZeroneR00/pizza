import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from '.';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='assemblable' name="filter-options" />
        <FilterCheckbox text='Новинки' value='new' name="filter-options" />
      </div>

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="100"
            min={100}
            max={1000}
          // value={String(filters.prices.priceFrom)}
          // onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
          // value={String(filters.prices.priceTo)}
          // onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
        //   value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
        //   onValueChange={updatePrices}
        />
      </div>

      {/* Ингредиенты */}
      <div className="mt-8">
        <CheckboxFiltersGroup
          title="Ингредиенты"
          name="ingredients"
          limit={6}
          defaultItems={[
            {
              text: 'Сырный соус',
              value: 'cheese-sauce',
            },
            {
              text: 'Моцарелла',
              value: 'mozzarella',
            },
            {
              text: 'Пармезан',
              value: 'parmesan',
            },
            {
              text: 'Чеддер',
              value: 'cheddar',
            },
            {
              text: 'Горгонзола',
              value: 'gorgonzola',
            },
            {
              text: 'Проволоне',
              value: 'provolone',
            },
          ]}
          items={[
            {
              text: 'Сырный соус',
              value: 'cheese-sauce',
            },
            {
              text: 'Моцарелла',
              value: 'mozzarella',
            },
            {
              text: 'Пармезан',
              value: 'parmesan',
            },
            {
              text: 'Чеддер',
              value: 'cheddar',
            },
            {
              text: 'Горгонзола',
              value: 'gorgonzola',
            },
            {
              text: 'Проволоне',
              value: 'provolone',
            },
            {
              text: 'Рикотта',
              value: 'ricotta',
            },
            {
              text: 'Брынза',
              value: 'brynza',
            },
            {
              text: 'Фета',
              value: 'feta',
            },
            {
              text: 'Манчего',
              value: 'manchego',
            },
            {
              text: 'Халлуми',
              value: 'halloumi',
            },
            {
              text: 'Кефалотири',
              value: 'kefalotyri',
            },
          ]}
        />
      </div>
    </div>
  )
}