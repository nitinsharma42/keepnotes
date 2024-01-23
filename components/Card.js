'use client'

export default function Card({children, handleClick}) {
    return (
        <div className="w-[20%] border-2 border-[#4CC9F0] p-5 rounded-lg text-center shadow-xl cursor-pointer" onClick={handleClick}>
            {children}
        </div>
    )
}