// function Student({ name, marks}){
    
//     return(
//         <div>
//             <h1>{name}</h1>
//             <h2>Marks: {marks}</h2>
//         </div>
//     )
// }

// export default Student

{/* function Child({onIncrease}){
    return(
        <button onClick={onIncrease}>Increase on child</button>
    )
}
export default Child */}

function Child({name, count, onIncrease, onDecrease}){

    return(
        <div className="w-90 bg-gray-700 border border-black text-white p-6 rounded-lg text-4xl text-center">
            <h1 className="mb-4 font-bold">{name}</h1>
            <h1 className="mb-4 font-bold">Marks: {count}</h1>
            <div className="flex justify-center gap-4 mb-4">
                <button onClick={onIncrease} className="bg-green-400 border-b border-black p-2 rounded-lg">Increase</button>
                <button onClick={onDecrease} className="bg-red-400 border-b border-black p-2 rounded-lg">Decrease</button>
            </div>
            <h2 className="mb-4 font-bold">Status: {count >= 35 ? "pass" : "fail"}</h2>
        </div>
    )
}

export default Child