import React from 'react'
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { setSelectedCategory } from '@/store/slices/SelectProductCategorySlice';

const CommerceCategoriesFiltersButton = ({ uniqueCategories, }: { uniqueCategories: string[] }) => {
    const selectCategory = useSelector(
        (state: RootState) => state.category.selectedCategory
    );
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="flex gap-2 mb-7">
            {uniqueCategories.map((e) => (
                <Button
                    size="sm"
                    className="rounded-none"
                    key={e}
                    variant={e === selectCategory ? "default" : "outline"}
                    onClick={() => dispatch(setSelectedCategory(e))}
                >
                    {e}
                </Button>
            ))}
        </div>
    )
}

export default CommerceCategoriesFiltersButton
