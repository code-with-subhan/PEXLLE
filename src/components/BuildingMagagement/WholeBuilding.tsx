import React from 'react'
import BuildingLeftView from './BuildingLeftView'
import BuildingPayment from './BuildingPayment'
import BuildingRequest from './BuildingRequest'
import BuildingDelayedOrder from './BuildingDelayedOrder'
import BuildingUpcomingUnit from './BuildingUpcomingUnit'

const WholeBuilding = () => {
    return (
        <div className='lg:flex gap-7 mt-6 px-5'> 
            <div className='lg:w-1/2'>
                <BuildingLeftView />
            </div>
            <div className='w-full'>
                <BuildingPayment />
                <div className='my-8 px-3 lg:flex  gap-6 justify-between w-full'>
                    <BuildingRequest />
                    <BuildingDelayedOrder />
                </div>
                <BuildingUpcomingUnit />
            </div>
        </div>
    )
}

export default WholeBuilding
