import { useRouter } from 'next/router';
import React from 'react'

const Category = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1 className='text-5xl p-[200px]'>Category { id }</h1> 
        </div>
    )
}

export default Category