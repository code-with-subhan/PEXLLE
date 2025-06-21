'use client'
import React, { useState } from 'react'
import Shipments from "@/components/Logictics/Shipments";
import EachShipmentData from "@/components/Logictics/EachShipmentData";
import ExportEdit from "@/components/Logictics/ExportEdit";
import { Data, ShipmentsData } from './ShipmentsData';
import { Button } from '../ui/button';
import { ArrowLeft, Download, Pen } from 'lucide-react';

const WholeLogistics = () => {
    const [logisTicsObj, setlogisTicsObj] = useState<Data>(ShipmentsData[0])
    const [ShowLogic, setShowLogic] = useState<boolean>(false)
    return (
        <div className=" lg:p-4 p-2 lg:flex gap-7 justify-between">
            <Shipments logicObject={logisTicsObj} setLogicObject={setlogisTicsObj} showlogic={ShowLogic} setShowlogic={setShowLogic} />
            <div className={`${ShowLogic ? "hidden" : "block"} lg:block`}>
                <div className="lg:hidden block mb-5 px-2">
                    <Button className="rounded-none cursor-pointer" variant='ghost' onClick={() => setShowLogic(prev => !prev)} ><ArrowLeft /> Back to List</Button>
                </div>
                <div className="text-[#737373] flex gap-2 text-xl">
                    LoadID : <h1 className="font-bold text-black">#{logisTicsObj.id}</h1>
                    <div className="flex gap-10 items-center justify-between ml-auto">
                        <Button variant='outline' className="rounded-none" size='sm'>
                            <Download /> Export
                        </Button>
                        <Button variant='outline' className="rounded-none" size='sm'>
                            <Pen /> Edit
                        </Button>
                    </div>
                </div>
                <div className='lg:flex gap-7 justify-between'>
                    <EachShipmentData showlogic={ShowLogic}  />
                    <ExportEdit showlogic={ShowLogic} />
                </div>
            </div>
        </div>
    )
}

export default WholeLogistics
