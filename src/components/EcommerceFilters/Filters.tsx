import React from 'react'
import { Button } from '../ui/button'
import ConditionFilter from './Filters/ConditionFilter'
import SellerTypeFilter from './Filters/SellerTypeFilter'
import Waranty from './Filters/Waranty'
import NegotiableFilter from './Filters/NegotiableFilter'
import PaymentFilter from './Filters/PaymentFilter'
import ReturnPolicyFilter from './Filters/ReturnPolicyFilter'
import AdTypeFilter from './Filters/AdTypeFilter'
import VerifiedFilter from './Filters/VerifiedFilter'
import ShippingFilter from './Filters/ShippingFilter'
import { CategoryFilter } from './Filters/CategoryFilter'
import { SubCategoryFilter } from './Filters/SubCategoryFilter'

const Filters = () => {
    return (
        <div className='bg-[#F5F5F5] p-4 w-1/3'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-[1rem]'>Filters</h1>
                <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>Clear Filters</Button>
            </div>
            <CategoryFilter/>
            <SubCategoryFilter/>
            <ConditionFilter />
            <SellerTypeFilter />
            <Waranty />
            <ShippingFilter/>
            <NegotiableFilter />
            <PaymentFilter />
            <ReturnPolicyFilter />
            <AdTypeFilter />
            <VerifiedFilter />
        </div>
    )
}

export default Filters
