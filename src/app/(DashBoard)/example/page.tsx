import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex ">
                <div className="w-1/3 h-screen sticky top-0 bg-blue-800 text-white p-4">
                    <h2 className="text-2xl font-bold">Sticky Sidebar</h2>
                    <p>This stays fixed while right content scrolls.</p>
                </div>

                <div className="w-2/3 p-4 space-y-10">
                    <div className="h-[400px] bg-gray-100">Section 1</div>
                    <div className="h-[400px] bg-gray-200">Section 2</div>
                    <div className="h-[400px] bg-gray-300">Section 3</div>
                    <div className="h-[400px] bg-gray-400">Section 4</div>
                    <div className="h-[400px] bg-gray-500">Section 5</div>
                    <div className="h-[400px] bg-gray-600 text-white">Section 6</div>
                </div>
            </div>

        </div>
    )
}

export default page
